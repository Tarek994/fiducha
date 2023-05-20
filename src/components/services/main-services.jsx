import Card from "react-bootstrap/Card";
import alt from "./images/atl-01.jpg";
import blt from "./images/BTL-marketing.jpg";
import ttl from "./images/ttl-marketing.jpg";
import { Link } from "react-router-dom";
import "./mainServices.css";
import "../../index.css";
import Contact from "../contact/contact"

const MainServices = () => {
  return (
    <div id="services" className="main-services">
      <div className="row text-center">
        <div className="col-md-12 col-sm-12">
          <h1 className="heading bold title">SERVICES</h1>
          <h2 className="subheading bold">
            Strategic planning. Measurable results
          </h2>
        </div>
      </div>

      <div className="row services-cards ">
        <div className="main-cards ">
          <div className="cardss-1">
            <Card className="card-style">
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" src={alt} style={{ width: "100%" }} />
              </div>
              <Card.Body className="body-center">
                <Card.Title className="bold ">ATL</Card.Title>
                <Card.Text>
                  <p className="offers">
                    Signboard
                    <br />
                    Outdoor
                    <br />
                    Outdoor Booking
                    <br />
                    TV
                  </p>
                </Card.Text>
                <Link to="" className="btn btn-primary-ser">
                  Get it now
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="cardss-1">
            <Card className="card-style">
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" src={blt} style={{ width: "100%" }} />
              </div>
              <Card.Body className="body-center">
                <Card.Title className="bold">BTL</Card.Title>
                <Card.Text>
                  <p className="offers">
                    Booths
                    <br />
                    Indoor
                    <br />
                    Shop Branding
                    <br />
                    Event Setup
                    <br />
                    Planning
                    <br />
                    Event Management
                    <br />
                    Catering
                    <br />
                    3D Simulation
                    <br />
                    Production Rentals
                    <br />
                    Events Production
                    <br />
                    Rentals
                    <br />
                    Printing
                  </p>
                </Card.Text>
                <Link to="" className="btn btn-primary-ser">
                  Get it now
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="cardss-1">
            <Card className="card-style">
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" src={ttl} style={{ width: "100%" }} />
              </div>
              <Card.Body className="body-center">
                <Card.Title className="bold">TTL</Card.Title>
                <Card.Text>
                  <p className="offers">
                    photography
                    <br />
                    Motion Graphics
                    <br />
                    Video Production
                    <br />
                    Social Media
                    <br />
                    SEO
                    <br />
                    Web Development
                    <br />
                    Brand Identity
                    <br />
                    Google Services
                    <br />
                  </p>
                </Card.Text>
                <Link to="" className="btn btn-primary-ser">
                  Get it now
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default MainServices;
