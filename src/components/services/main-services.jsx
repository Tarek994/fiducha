import Card from "react-bootstrap/Card";
import download from "./images/download.jpeg";
import { Link } from "react-router-dom";
import "./mainServices.css";

const MainServices = () => {
  return (
    <div id="services" className="main-services">
      <div className="row text-center">
        <div className="col-md-12 col-sm-12">
          <h1 className="heading bold title">SERVICES</h1>
          <h2 className="subheading">Strategic planning. Measurable results</h2>
        </div>
      </div>

      <div className="row services-cards justify-content-center">
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="cardss-1">
            <Card className="card-style">
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src={download}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Card.Body className="body-center">
                <Card.Title className="bold">Digital marketing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/digitalMarketing" className="btn btn-primary">
                  Go to Services
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mb-4">
          <div className="cardss-2">
            <Card className="card-style">
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src={download}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Card.Body className="body-center">
                <Card.Title className="bold">MARKETING</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/marketing" className="btn btn-primary">
                  Go to Services
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
