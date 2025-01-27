/*import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <section id="contact-form" className="contact-form-section py-5">
      <div className="container">
        <h2 className="display-4 text-center">Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Form;*/

