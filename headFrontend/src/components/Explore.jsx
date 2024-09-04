import React from "react";
import "./explore.css";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className="container exp-cont">
        <h1 className="textex">
          <span className="textex-span">Explore</span> by category
        </h1>

        <div className="exp-group">
          <div className="exp1">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-realistic-3d-render-of-headphones-image_3796612.jpg"
              alt=""
              className="expimg"
            />
            <div className="headcont1">
              <h3 className="head-head">Headphone</h3>
              <span className="expspan">
                <Link to="/explore-headphone-result" className="explore-link">
                <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>
              </span>
            </div>
          </div>
          <div className="exp3">
            <img
              src="https://th.bing.com/th/id/R.0431e2268d4c7fe7019e77665fcbc85e?rik=6W8FI%2bwiDSI35w&riu=http%3a%2f%2ftoolsandtoys.net%2fwp-content%2fuploads%2f2012%2f09%2fTT-2012-09-13-earpods-600x432.jpeg&ehk=HN9cZSOBT3VWIoTUnI%2fcaIMsrTpXRW2gA9DHdFefXCM%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="expimg"
            />
            <div className="headcont2">
              <h3 className="head-head">Earphone</h3>
              <span className="expspan">
              <Link to="/explore-earphone-result" className="explore-link">
                <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>
              </span>
            </div>
          </div>
          <div className="exp2">
            <img
              src="https://rukminim1.flixcart.com/image/832/832/xif0q/headphone/n/x/h/latest-earbuds-tws-xpods-m10-buds-true-wireless-bluetooth-5-1-v-original-imagmfy4gkcktehh.jpeg?q=70"
              alt=""
              className="expimg"
            />
            <div className="headcont3">
              <h3 className="head-head">Air-Pod</h3>
              <span className="expspan">
              <Link to="/explore-airpod-result" className="explore-link">
                <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
