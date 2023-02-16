import "../../index.css";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <section className="navbar navbar-fixed-top custom-navbar" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon icon-bar"></span>
          <span className="icon icon-bar"></span>
          <span className="icon icon-bar"></span>
        </button>
        <Link to="home" spy={true} smooth={true} duration={900} className="navbar-brand">
            <span className="bold">Fiduccia</span>
        </Link>

      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#home" className="smoothScroll">HOME</a></li>
          <li><a href="#about" className="smoothScroll">SERVICES</a></li>
          <li><a href="#portfolio" className="smoothScroll">PORTFOLIO</a></li>
          <li><a href="#team" className="smoothScroll">TEAM</a></li>
          <li><a href="#happen" className="smoothScroll">HAPPEN</a></li>
          <li><a href="#contact" className="smoothScroll">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Navbar;