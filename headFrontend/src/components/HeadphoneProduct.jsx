import React, { useState } from "react";
import "./headphoneProduct.css";
import { useLocation } from "react-router-dom";

const HeadphoneProduct = () => {

  const location = useLocation();
  const { imageSrc, rupee } = location.state || {};
  const [inc, setInc] = useState(1);
  const discount = Math.floor(Math.random() * 660);
  const platform = 20;
   
  const handleIncrement = () => {
   if (inc < 20) setInc(inc + 1);
  };
  const handleDecrement = () => {
    if (inc > 1) setInc(inc - 1);
  };
  const handleSubmit = () => {
    alert("\n Successfully Placed order 😊 \n \n \n Thanks For Visting Us"
        );
  }

  return (
    <div className="product-container">
      <div className="product-group">
        <div className="left-product">
          <img src={imageSrc} alt="" className="left-product-img" />
          <div className="product-head">
            <p className="clinge">Clinge</p>
            <p className="product-head-button">
              <i className={inc === 1 ? "bi bi-dash-circle-fill blur" : "bi bi-dash-circle-fill"} onClick={handleDecrement}></i>{inc}
              <i className={inc === 20 ? "bi bi-plus-circle-fill blur" : "bi bi-plus-circle-fill"} onClick={handleIncrement} disabled={inc === 20}></i>
            </p>
          </div>
          <div className="product-head-mrp">
            <p>Net Total</p>
            <span>
              <i className="bi bi-currency-rupee"></i>
              {rupee * inc}
            </span>
          </div>
        </div>
        <div className="right-product">
          <h2>
            <span className="right-product-heading">Price </span>Breakdown
          </h2>
          <div className="right-head">
            <div className="right-head-left">
              <p>Total MRP</p>
              <p>Discount on MRP</p>
              <p>Platform Fee</p>
              <p>Shipping Fee</p>
            </div>
            <div className="right-head-right">
              <p>
                <i className="bi bi-currency-rupee"></i>
                {rupee * inc}
              </p>
              <p>
                <i className="bi bi-currency-rupee"></i>{discount}
              </p>
              <p>
                <i className="bi bi-currency-rupee"></i>{platform}
              </p>
              <p>
                <i className="bi bi-currency-rupee"></i>FREE
              </p>
            </div>
          </div>
          <hr />
          <div className="right-foot">
            <p>Total Amount</p>
            <p className="product-rupee">
              <i className="bi bi-currency-rupee product-rupee"></i>{(rupee * inc) - discount + platform}
            </p>
          </div>
          <button className="product-button" onClick={handleSubmit}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneProduct;
