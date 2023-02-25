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
            <span className="bold logo">FIDUCHA</span>
        </Link>

      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/" className="smoothScroll">HOME</Link></li>
          <li><Link to="about" className="smoothScroll">SERVICES</Link></li>
          <li><Link to="portfolio" className="smoothScroll">PORTFOLIO</Link></li>
          <li><Link to="team" className="smoothScroll">TEAM</Link></li>
          <li><Link to="happen" className="smoothScroll">HAPPEN</Link></li>
          <li><Link to="contact" className="smoothScroll">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Navbar;