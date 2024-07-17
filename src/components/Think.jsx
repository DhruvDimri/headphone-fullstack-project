import React from "react";
import "./think.css";

const Think = () => {
  return (
    <section className="think">
      <h2>
        What People Think <span className="think-span"> About Us</span>
      </h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 text-light mx-auto">
            <p className="text-center think-p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              sunt in labore Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. explicabo, Consequatur et sequi voluptate soluta expedita
              alias, ipsa saepe! Dolore iure dolorem nesciunt ipsam minus.
              Doloribus asperiores minima dignissimos!
            </p>
          </div>
        </div>
      </div>
      {/* carousel start */}
      <div className="container-fluid think-carousel">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row justify-content-evenly">
                  <div className="col-lg-5 think-col">
                    <div className="think-img-wrapper">
                      <img
                        src="https://c.stocksy.com/a/XJC000/z9/47339.jpg"
                        alt="man-face"
                        className="think-image"
                      />
                    </div>
                    <div className="think-content">
                      <ul className="think-ul">
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                      </ul>
                      <p className="think-content-name">Aiden Mathide</p>
                      <p className="text-center think-lorem">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate laboriosam a ullam rem nihil dicta sit
                        dolorum quaerat, veniam non!
                      </p>
                      <p className="think-post text-center">Web Designer</p>
                    </div>
                  </div>
                  <div className="col-lg-5 think-col">
                    <div className="think-img-wrapper">
                      <img
                        src="https://images7.alphacoders.com/101/1018761.jpg"
                        alt="man-face"
                        className="think-imagee"
                      />
                    </div>
                    <div className="think-content">
                      <ul className="think-ul">
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-half"></i>
                        </li>
                      </ul>
                      <p className="think-content-name">Aiden Mathide</p>
                      <p className="text-center think-lorem">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate laboriosam a ullam rem nihil dicta sit
                        dolorum quaerat, veniam non!
                      </p>
                      <p className="think-post text-center">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="container">
                <div className="row justify-content-evenly">
                  <div className="col-lg-5 think-col">
                    <div className="think-img-wrapper">
                      <img
                        src="https://c.stocksy.com/a/XJC000/z9/47339.jpg"
                        alt="man-face"
                        className="think-image"
                      />
                    </div>
                    <div className="think-content">
                      <ul className="think-ul">
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                      </ul>
                      <p className="think-content-name">Aiden Mathide</p>
                      <p className="text-center think-lorem">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate laboriosam a ullam rem nihil dicta sit
                        dolorum quaerat, veniam non!
                      </p>
                      <p className="think-post text-center">Web Designer</p>
                    </div>
                  </div>
                  <div className="col-lg-5 think-col">
                    <div className="think-img-wrapper">
                      <img
                        src="https://images7.alphacoders.com/101/1018761.jpg"
                        alt="man-face"
                        className="think-imagee"
                      />
                    </div>
                    <div className="think-content">
                      <ul className="think-ul">
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                          <i class="bi bi-star-half"></i>
                        </li>
                      </ul>
                      <p className="think-content-name">Aiden Mathide</p>
                      <p className="text-center think-lorem">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate laboriosam a ullam rem nihil dicta sit
                        dolorum quaerat, veniam non!
                      </p>
                      <p className="think-post text-center">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button> */}
          {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
        </div>
      </div>
    </section>
  );
};

export default Think;
