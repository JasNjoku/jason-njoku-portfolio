import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Njoku</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualifications</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/jason-njoku-034b97268/" className="footer__social-link" target='_blank'>
                        <i className='bx bxl-linkedin'></i>
                    </a>

                    <a href="https://github.com/JasNjoku" className="footer__social-link" target='_blank'>
                        <i className='bx bxl-github'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer