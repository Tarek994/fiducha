import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
  return (
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
  )
}

export default Home;