import React from "react";
import "./category.css";
import earphone from "../assets/earphone1.jpeg";
import headphone3 from "../assets/headphone3.jpg";
import headphone4 from "../assets/headphone4.jpeg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="category">
      <h2>Product Category</h2>

      <div className="container-fluid">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row ms-lg-4">
                  <div className="col-md-4 col-lg-4">
                    <div className="card ">
                      <img src={headphone3} className="card-img-top" alt="..." />
                      <div className="card-body ">
                        <h5 className="card-title">WIRELESS HEAD PHONES</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link to="/explore-headphone-result" className="btn btn-category">
                          READ MORE &gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card ">
                      <img src={earphone} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">EAR PHONE 83D</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link to="/explore-earphone-result" className="btn btn-category">
                          READ MORE &gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card">
                      <img src={headphone4} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">E5D WIRELESS AIR PODS</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link to="/explore-airpod-result" className="btn btn-category">
                          READ MORE &gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row ms-lg-4">
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={headphone3} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">WIRELESS HEAD PHONES</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link to="/explore-headphone-result" className="btn btn-category">
                          READ MORE &gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={earphone} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">EAR PHONE 83D</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link to="/explore-earphone-result" className="btn btn-category">
                          READ MORE &gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={headphone4} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">E5D WIRELESS HEAD PHONES</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link to="/explore-airpod-result" className="btn btn-category">
                          READ MORE &gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
