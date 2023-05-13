import "../../index.css";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section
      className="navbar navbar-fixed-top custom-navbar"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand smoothScroll">
            <span className="bold logo">FIDUCHA</span>
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/fiducha/" className="smoothScroll">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/fiducha/services" className="smoothScroll">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/fiducha/portfolio" className="smoothScroll">
                PORTFOLIO
              </Link>
            </li>
            <li>
              {/* <Link to="team" className="smoothScroll">
                TEAM
              </Link> */}
            </li>
            <li>
              {/* <Link to="happen" className="smoothScroll">
                HAPPEN
              </Link> */}
            </li>
            <li>
              <Link to="/fiducha/contact" className="smoothScroll">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
