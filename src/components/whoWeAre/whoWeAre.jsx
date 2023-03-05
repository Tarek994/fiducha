import "./whoWeAre.css";
import InstagramPost from "./post.jsx";

const WhoWeAre = () => {
  return (
    <div id="whoWeAre" className="main col-12 ">
      <div className="max-width col-12">
        <div className="col-12 ">
          <h1 className="Who-title">WHO WE ARE</h1>
          <h2 className="subheading">what can we do for you?</h2>
        </div>
        <div className="main-des col-12">
          <div className="description col-lg-6 col-sm-12 col-xs-12">
            <h4> What kind of people we are ? </h4>
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
          <div className="gallery col-lg-6 col-sm-12 col-xs-12">
            <InstagramPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
