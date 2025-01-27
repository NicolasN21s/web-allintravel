import React, { useState } from 'react';

function DesignTrip() {
  const [tripDetails, setTripDetails] = useState({
    fullName: '',
    email: '',
    destination: '',
    otherDestination: '',
    experiences: [],
    knowDates: '',
    departureDate: '',
    returnDate: '',
    children: 0,
    adults: 0,
    additionalDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setTripDetails({ ...tripDetails, experiences: [...tripDetails.experiences, value] });
    } else {
      setTripDetails({ ...tripDetails, experiences: tripDetails.experiences.filter(exp => exp !== value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(tripDetails);
  };

  return (
    <section id="design-trip" className="design-trip-section py-5">
      <div className="container">
        <h2 className="display-4 text-center">DISEÑA TU VIAJE</h2>
        <p className="lead text-center">AQUÍ COMIENZA TU EXPERIENCIA</p>
        <p className="text-center">
          Una vez llenado este formulario, uno de nuestros planners travelers se pondrá en contacto contigo para perfeccionar ese viaje que tanto has soñado.
          Estamos aquí para brindarte la mejor experiencia.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Nombre completo</label>
            <input type="text" className="form-control" id="fullName" name="fullName" value={tripDetails.fullName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" name="email" value={tripDetails.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="destination" className="form-label">¿Cuál es el destino que quieres visitar?</label>
            <input type="text" className="form-control" id="destination" name="destination" value={tripDetails.destination} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="otherDestination" className="form-label">¿Qué otro destino tienes en mente?</label>
            <input type="text" className="form-control" id="otherDestination" name="otherDestination" value={tripDetails.otherDestination} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">¿Qué experiencias quieres vivir?</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="experience1" name="experiences" value="SAFARI" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="experience1">Safari</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="experience2" name="experiences" value="DEPORTE" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="experience2">Deporte</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="experience3" name="experiences" value="ARTE Y CULTURA" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="experience3">Arte y Cultura</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="experience4" name="experiences" value="DESCANSO" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="experience4">Descanso</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="experience5" name="experiences" value="ESPIRITUAL" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="experience5">Espiritual</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="experience6" name="experiences" value="PLAYA" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="experience6">Playa</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="experience7" name="experiences" value="NATURALEZA" onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="experience7">Naturaleza</label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">¿Sabes cuándo viajar?</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="knowDatesYes" name="knowDates" value="SÍ" onChange={handleChange} />
              <label className="form-check-label" htmlFor="knowDatesYes">Sí</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="knowDatesNo" name="knowDates" value="NO" onChange={handleChange} />
              <label className="form-check-label" htmlFor="knowDatesNo">No</label>
            </div>
            {tripDetails.knowDates === 'SÍ' && (
              <>
                <div className="mb-3">
                  <label htmlFor="departureDate" className="form-label">Ida</label>
                  <input type="date" className="form-control" id="departureDate" name="departureDate" value={tripDetails.departureDate} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="returnDate" className="form-label">Regreso</label>
                  <input type="date" className="form-control" id="returnDate" name="returnDate" value={tripDetails.returnDate} onChange={handleChange} />
                </div>
              </>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="children" className="form-label">Niños</label>
            <select className="form-select" id="children" name="children" value={tripDetails.children} onChange={handleChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="adults" className="form-label">Adultos</label>
            <select className="form-select" id="adults" name="adults" value={tripDetails.adults} onChange={handleChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="additionalDetails" className="form-label">Cuéntanos más sobre tu viaje...</label>
            <textarea className="form-control" id="additionalDetails" name="additionalDetails" rows="3" value={tripDetails.additionalDetails} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default DesignTrip;
