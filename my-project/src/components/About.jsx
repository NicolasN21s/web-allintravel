import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros-section py-5">
      <div className="container text-center">
        <h2 className="display-4">NOSOTROS</h2>
        <p className="lead">Un copy cercano como hablándole a un amigo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        <div className="row mt-4">
          <div className="col-md-3 position-relative">
            <FaInstagram className="icon-instagram position-absolute top-50 start-0 translate-middle-y" />
            <img src="/src/images/nosotros_1.png" className="img-fluid square" alt="Person 1" />
            <p className="mt-2 instagram-handle">@churroceballos</p>
          </div>
          <div className="col-md-3">
            <img src="/src/images/nosotros_2.png" className="img-fluid square" alt="Building" />
          </div>
          <div className="col-md-3">
            <img src="/src/images/nosotros_3.png" className="img-fluid square" alt="Coastal Town" />
          </div>
          <div className="col-md-3 position-relative">
            <img src="/src/images/nosotros_4.png" className="img-fluid square" alt="Sunset" />
            <FaArrowRight className="icon-right position-absolute top-50 end-0 translate-middle-y" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
