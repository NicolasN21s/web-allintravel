import React, { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get-blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
      <section id="blogs" className="blogs-section py-5">
        <div className="container">
          <h2 className="display-4 text-center">BLOGS</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/src/images/exp_personalizadas.png" className="card-img-top" alt="Destinos para parejas en 2025" />
                <div className="card-body">
                  <h5 className="card-title">DESTINOS PARA PAREJAS EN 2025</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</p>
                  <a href="#" className="btn btn-link">LEER MÁS</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/src/images/blogs_2.png" className="card-img-top" alt="Vuelve la visa para viajar a Londres" />
                <div className="card-body">
                  <h5 className="card-title">VUELVE LA VISA PARA VIAJAR A LONDRES</h5>
                  <a href="#" className="btn btn-link">LEER MÁS</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/src/images/blogs_3.png" className="card-img-top" alt="Top 3 destinos en Colombia" />
                <div className="card-body">
                  <h5 className="card-title">TOP 3 DESTINOS EN COLOMBIA</h5>
                  <a href="#" className="btn btn-link">LEER MÁS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Blog;
