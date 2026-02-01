import "./portfolio.css"
import projects from "../../data/projects.json"
import { useState } from "react"

const Portfolio = () => {
    const [toggleState, setToggleState] = useState("All")

    const toggleTab = (type) => {
        setToggleState(type)
    }

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <span className='section__subtitle'>My Portfolio</span>

            <div className="portfolio__container container">
                <div className="portfolio__tabs">
                    <div className={toggleState === "All" ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick={() => toggleTab("All")}>
                        All
                    </div>

                    <div className={toggleState === "Frontend" ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick={() => toggleTab("Frontend")}>
                        Frontend
                    </div>

                    <div className={toggleState === "Backend" ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick={() => toggleTab("Backend")}>
                        Backend
                    </div>

                    <div className={toggleState === "Fullstack" ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick={() => toggleTab("Fullstack")}>
                        Fullstack
                    </div>
                </div>

                <div className="portfolio__content grid">
                    {projects.projects
                        .filter(project => {
                            if (toggleState === "All") return true
                            return project.type === toggleState
                        })
                        .map(project => (
                            <div className="portfolio__card" key={project.name}>
                                <div className="portfolio__card-header">
                                    <h3 className="portfolio__card-title">{project.name}</h3>
                                    <span className="portfolio__card-type">{project.type}</span>
                                </div>

                                <p className="portfolio__card-description">
                                    {project.description}
                                </p>

                                <div className="portfolio__card-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span className="portfolio__card-tech-item" key={index}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio__card-link"
                                >
                                    View Project →
                                </a>
                            </div>
                        ))}
                </div>

            </div>
        </section>
    )
}

export default Portfolio