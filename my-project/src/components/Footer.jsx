import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>ALIANZAS ESTRATÉGICAS</h2>
            <div className="partner-logos d-flex justify-content-center flex-wrap">
              <img src="/src/images/avianca.png" alt="Avianca" className="partner-logo mx-2 my-2" />
              <img src="/src/images/expedia.png" alt="Expedia" className="partner-logo mx-2 my-2" />
              <img src="/src/images/uber.png" alt="Uber" className="partner-logo mx-2 my-2" />
              <img src="/src/images/life_miles.png" alt="LifeMiles" className="partner-logo mx-2 my-2" />
              <img src="/src/images/bancolombia.png" alt="Bancolombia" className="partner-logo mx-2 my-2" />
              <img src="/src/images/riu.png" alt="RIU Hotels & Resorts" className="partner-logo mx-2 my-2" />
              <img src="/src/images/royal_caribbean.png" alt="Royal Caribbean" className="partner-logo mx-2 my-2" />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 text-center">
            <h5>Suscribete a nuestro newlestter y recibe noticias, descuentos y más</h5>
            <form className="newsletter-form">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Correo electrónico" />
                <button type="submit" className="btn btn-primary">SUSCRIBIRME</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4">
            <img src="/src/images/logo.png" alt="All In Travels" className="footer-logo mb-3" />
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
              <li><a href="#viajes-grupales">Viajes grupales</a></li>
              <li><a href="#viajes-medida">Viajes a la medida</a></li>
              <li><a href="#contacto">Contáctanos</a></li>
              <li><a href="#alianzas">Alianzas estratégicas</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#terminos">Términos y condiciones</a></li>
              <li><a href="#privacidad">Política de privacidad</a></li>
              <li><a href="#turismo">Registro Nacional de Turismo</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-md-start text-center">
            <p>Email: info@allintravels.com</p>
            <p>Phone: + (057) (604) 444 68 58</p>
            <p>Address: Carrera 43A, N 18 Sur 135 Of 834, Sao Paulo Plaza Medellín - Colombia</p>
            <div className="social-icons d-flex justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com" className="mx-2"><FaFacebook /></a>
              <a href="https://www.instagram.com" className="mx-2"><FaInstagram /></a>
              <a href="https://www.tiktok.com" className="mx-2"><FaTiktok /></a>
              <a href="https://www.whatsapp.com" className="mx-2"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
