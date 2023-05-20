import { Link } from "react-router-dom";
import WhoWeAre from "../whoWeAre/whoWeAre";
import Team from "../team/team";
import "./home.css";
import Contact from "../contact/contact";

const Home = () => {
  return (
    <div className="home-container">
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <hr />
              <h3>
                <span className="bold">WE ARE A MARKETING AGENCY</span>
              </h3>
              <h1 className="heading">FROM EGYPT TO THE WORLD</h1>
              <Link to="services" className="smoothScroll btn btn-default">
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WhoWeAre />
      <Team />
      <Contact/>
    </div>
    
  );
};

export default Home;
