import "../../index.css";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { projectImages, projectDescriptions, projectNames } from "./data";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Portfolio = () => {
  const Project = ({ title }) => {
    const overlayStyles = {
      position: "absolute",
      height: "100%",
      width: "100%",
      opacity: 0,
      transition: "opacity 500ms",
      backgroundColor: "transparent",
      zIndex: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: 16,
      color: "deep-blue",
    };

    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
      <div
        variants={projectVariant}
        className="iso-box html wordpress  col-lg-4 col-md-4 col-sm-6 col-xs-6"
      >
        <Link to="" data-lightbox-gallery="portfolio-gallery">
          <div style={overlayStyles}>
            <p
              style={{
                fontSize: "1.5rem",
                fontFamily: "Playfair Display",
                fontWeight: 400,
              }}
            >
              {projectNames[title]}
            </p>
            <p style={{ marginTop: "1.75rem" }}>
              {projectDescriptions[projectTitle]}
            </p>
          </div>
          <img alt="page-1" src={projectImages[projectTitle]} />
        </Link>
      </div>
    );
  };

  return (
    <div id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h1 className="heading bold title-pro1">PORTFOLIO</h1>
            <h2 className="subheading">MOBILE, WEB AND BRAND IDENTITY</h2>
            {/* ISO section   */}
            <div className="iso-section">
              <div className="iso-box-section wow fadeIn" data-wow-delay="0.9s">
                <div className="iso-box-wrapper col4-iso-box">
                  <Link>
                    <Project
                      className="iso-box wordpress mobile"
                      title="portfolio-img1"
                    />
                  </Link>
                  <Link>
                    {" "}
                    <Project
                      className="iso-box html mobile"
                      title="portfolio-img2"
                    />
                  </Link>
                  <Link>
                    <Project
                      className="iso-box wordpres"
                      title="portfolio-img3"
                    />
                  </Link>
                  <Link>
                    <Project
                      className="iso-box wordpress"
                      title="portfolio-img4"
                    />
                  </Link>
                  <Link>
                    <Project
                      className="iso-box photoshop mobile"
                      title="portfolio-img5"
                    />
                  </Link>
                  <Link>
                    <Project
                      className="iso-box wordpress mobile"
                      title="portfolio-img6"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
