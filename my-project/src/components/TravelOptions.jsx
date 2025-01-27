import React from 'react';

function TravelOptions() {
  return (
    <section id="travel-options" className="travel-options-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/src/images/viajes_grupales.png" className="card-img-top" alt="Viajes Grupales" />
              <div className="card-body text-center">
                <h5 className="card-title">Viajes grupales</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/src/images/viajes_a_la_medida.png" className="card-img-top" alt="Viajes a la Medida" />
              <div className="card-body text-center">
                <h5 className="card-title">Viajes a la medida</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/src/images/destinos_para_parejas.png" className="card-img-top" alt="Destinos para Parejas" />
              <div className="card-body text-center">
                <h5 className="card-title">Destinos para parejas</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelOptions;
