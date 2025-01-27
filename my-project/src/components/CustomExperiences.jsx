import React from 'react';

function CustomExperiences() {
  return (
    <section id="custom-experiences" className="custom-experiences-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="/src/images/exp_personalizadas.png" alt="Experiencias Personalizadas" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="display-4">EXPERIENCIAS PERSONALIZADAS</h2>
            <h3 className="my-3">¿QUÉ NOS HACE DIFERENTES?</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            <a href="#" className="btn btn-primary mt-2">COTIZAR MI VIAJE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomExperiences;
