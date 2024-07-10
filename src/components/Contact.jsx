import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-5 px-4">
            <form className="form-origin">
              <div className="row">
                <div className="col-lg-6">
                  <div class="mb-3">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="mb-3">
                    <input
                      type="Email"
                      placeholder="Email Address*"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="row rowe mx-auto">
                  <div className="col-lg-12 px-0 mb-4">
                    <div class="mb-4">
                      <textarea
                        class="form-control"
                        placeholder="Your Message"
                        id="exampleFormControlTextarea1"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12  text-center ">
                    <div class="mb-3">
                      <button className="contact-button">
                        SEND MESSAGE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 contact-right">
            <p className="contact-more">More About <span className="contact-orng"> Brand</span></p>
            <p className="contact-scnd-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In magni fugit repellat harum, itaque maiores deleniti repellendus aliquam molestiae provident, beatae, tempora ducimus. Magnam exercitationem, rem rerum atque harum placeat.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam esse dolor quis eum autem non libero nobis corrupti, atque impedit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
