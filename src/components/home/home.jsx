import { Link } from "react-router-dom";
import WhoWeAre from "../whoWeAre/whoWeAre";
import "./home.css"

const Home = () => {
  return (
    <div className="home-container">
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <hr />
              <h3><span className="bold">WE ARE A MARKETING AGENCY</span></h3>
              <h1 className="heading">FROM EGYPT TO THE WORLD</h1>
              <Link to="about" className="smoothScroll btn btn-default">Our Process</Link>
            </div>
          </div>
        </div>
      </section>
      <WhoWeAre/>
    </div>
  )
}

export default Home;
