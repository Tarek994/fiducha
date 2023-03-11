import "./whoWeAre.css";
import "../../index.css";
import React from "react";

import hero1 from "../../images/hero1.jpg";
import hero from "../../images/hero.jpeg";

const WhoWeAre = () => {
  return (
    <div id="whoWeAre" className="main col-12 ">
      <div className="max-width col-12">
        <div className="col-12 ">
          <h1 className="Who-title">WHO WE ARE</h1>
          <h2 className="subheading bold">what can we do for you?</h2>
        </div>
        <div className="main-des col-lg-12 wow " data-wow-delay="0.9s">
          <div
            className="description col-lg-6 col-sm-12 col-xs-12 wow "
            data-wow-delay="0.9s"
          >
            <h4> What can we do for you ? </h4>
            <br />
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum,
              dolor sit amet consectetur adipisicing
            </p>
            <br />
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum,
              dolor sit amet consectetur adipisicing
            </p>{" "}
            <br />
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum,
              dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="gallery wow col-lg-6 col-sm-12 col-xs-12  ">
            <img className="who-image" src={hero1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
