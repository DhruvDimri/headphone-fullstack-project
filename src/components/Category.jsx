import React from "react";
import "./category.css";
import earphone from "../assets/earphone1.jpeg";
import headphone3 from "../assets/headphone3.jpg";
import headphone4 from "../assets/headphone4.jpeg";

const Category = () => {
  return (
    <section className="category">
      <h2>Product Category</h2>

      <div className="container-fluid">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container">
                <div className="row ms-lg-4">
                  <div className="col-md-6 col-lg-4">
                    <div class="card ">
                      <img src={headphone3} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">WIRELESS HEAD PHONES</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-category">
                          READ MORE &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div class="card ">
                      <img src={earphone} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">EAR PHONE 83D</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-category">
                          READ MORE &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div class="card">
                      <img src={headphone4} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">E5D WIRELESS HEAD PHONES</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-category">
                          READ MORE &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="row ms-lg-4">
                  <div className="col-md-6 col-lg-4">
                    <div class="card">
                      <img src={headphone3} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">WIRELESS HEAD PHONES</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-category">
                          READ MORE &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div class="card">
                      <img src={earphone} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">EAR PHONE 83D</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-category">
                          READ MORE &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div class="card">
                      <img src={headphone4} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">E5D WIRELESS HEAD PHONES</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-category">
                          READ MORE &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
