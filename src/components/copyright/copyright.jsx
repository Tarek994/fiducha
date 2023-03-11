import "../../index.css";
import "./copyright.css";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-9">
            <p>
              Copyright © 2023 <i>TAREK GHALI</i>
              <Link rel="nofollow" to="/" target="_parent"></Link>
            </p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-3">
            <Link
              to="#section-1"
              className="smoothScroll fa fa-angle-up"
            ></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyRight;
