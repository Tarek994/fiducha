import Card from "react-bootstrap/Card";
import download from "./images/download.jpeg";
import { Link } from "react-router-dom";
import "./services.css";

const MainServices = () => {
  return (
    <div id="services" className="main-services">
      <div className="col-md-12 col-sm-12 text-center">
        <h1 className="heading bold title">SERVICES</h1>
        <h2 className="subheading">Strategic planning. Measurable results</h2>
      </div>

      <div className="row services-cards">
        <div className="row">
          <div
            className="d-flex justify-content-center align-items-center"
            
          >
            <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-4">
              <Card
                style={{
                  width: "60%",
                  margin: "0 auto",
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/about" className="btn btn-primary">Go to Services</Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-4">
              <Card
                style={{
                  width: "60%",
                  margin: "0 auto",
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <Card.Img
                    variant="top"
                    src={download}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <Card.Body className="body-center">
                  <Card.Title className="bold"> marketing Services</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/about" className="btn btn-primary">Go to Services</Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
