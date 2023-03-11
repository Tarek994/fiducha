import "../../index.css";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <ul className="social-icon">
              <li>
                <Link
                  to="#"
                  className="fa fa-facebook wow bounceIn"
                  data-wow-delay="0.3s"
                  target="_parent"
                ></Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="fa fa-twitter wow bounceIn"
                  data-wow-delay="0.6s"
                ></Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="fa fa-behance wow bounceIn"
                  data-wow-delay="0.9s"
                ></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
