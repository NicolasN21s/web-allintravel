import React from 'react';

function Hero() {
  return (
    <header className="hero-header text-center text-white">
      <div className="hero-overlay">
        <div className="container">
          <h1 className="display-5">THE TRAVEL</h1>
          <h4 className='display-6'>EXPERIENCE</h4>         
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src="/src/images/logo.png" alt="ALL IN TRAVELS" className="logo-image" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
                <li className="nav-item"><a className="nav-link" href="#viajes">Viajes</a></li>
                <li className="nav-item"><a className="nav-link" href="#blogs">Blogs</a></li>
                <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Hero;





/*function Hero() {
  return (
    <section className="bg-light text-white text-center py-5" style={{ backgroundImage: "url('https://api.test.interactiva.net.co/media/logo.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container">
        <h1 className="display-4">THE TRAVEL EXPERIENCE</h1>
        <p className="lead">Explora, vive, y sueña</p>
      </div>
    </section>
  );
}

export default Hero;
*/