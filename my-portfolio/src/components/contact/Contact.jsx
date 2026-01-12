import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className='section__subtitle'>Contact Me</span>

        <div className="contact__container">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
            </div>

            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">JasNjoku@gmail.com</span>
                    <a href="mailto:jasnjoku@gmail.com" className="contact__button">Write me {" "} <i className="contact__button-icon bx bx-right-arrow-alt"></i></a>
                </div>

                <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>
                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">0892675379</span>
                    <a href="https://api.whatsapp.com/send?phone=0892675379&text=Hello, more information!" className="contact__button">Write me {" "} <i className="contact__button-icon bx bx-right-arrow-alt"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact