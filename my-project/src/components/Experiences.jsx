import React, { useEffect, useState } from "react";
import axios from "axios";

function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get-travels")
      .then((response) => setExperiences(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="experiencias" className="experiencias-section py-5">
      <div className="container">
        <h2 className="display-4 text-center">EXPERIENCIAS GRUPALES</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/src/images/exp_grupales_1.png" className="card-img-top" alt="Safari en África" />
              <div className="card-body">
                <h5 className="card-title">SAFARI (ÁFRICA)</h5>
                <h6 className="card-subtitle mb-2 text-muted">5 AL 15 DE ABRIL</h6>
                <p className="card-text">Desde 5.500 USD</p>
                <p className="card-text">Serengeti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer los 4 reyes de la sabana africana.</p>
                <p className="card-text text-danger">¡ÚLTIMOS CUPOS!</p>
                <a href="#" className="btn btn-primary">MÁS INFORMACIÓN</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/src/images/exp_grupales_2.png" className="card-img-top" alt="Japón: Tradición y Modernidad" />
              <div className="card-body">
                <h5 className="card-title">JAPÓN: TRADICIÓN Y MODERNIDAD</h5>
                <h6 className="card-subtitle mb-2 text-muted">30/04 - 11/05</h6>
                <p className="card-text">Desde 2.700 USD</p>
                <p className="card-text">Tokio, Monte Fuji y Kamakura. Conoce la cultura que combina la tradición y la tecnología.</p>
                <p className="card-text text-warning">AGOTADO</p>
                <a href="#" className="btn btn-primary">MÁS INFORMACIÓN</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/src/images/exp_grupales_3.png" className="card-img-top" alt="Egipto: Místico y Majestuoso" />
              <div className="card-body">
                <h5 className="card-title">EGIPTO: MÍSTICO Y MAJESTUOSO</h5>
                <h6 className="card-subtitle mb-2 text-muted">01 AL 08 DE ABRIL</h6>
                <p className="card-text">Desde 4.200 USD</p>
                <p className="card-text">El Cairo, Pirámides, Valle de los muertos y viaje por el Nilo. Retrocedamos en la historia y conozcamos una de las naciones más antiguas del mundo.</p>
                <p className="card-text text-success">CUPOS DISPONIBLES</p>
                <a href="#" className="btn btn-primary">MÁS INFORMACIÓN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
