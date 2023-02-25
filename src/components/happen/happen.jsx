import { Card, Button } from "react-bootstrap";
import team1 from "../../images/team1.jpeg";
import team2 from "../../images/team2.webp";
import team3 from "../../images/team3.jpg";
import "./happen.css";

const Happen = () => {
  return (
    <section id="happen">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h1 className="heading bold background">OPPORTUNITY <span className="yellow"> HUB!</span></h1>
            <h2 className="subheading">LET'S BE MORE <span className="yellow">CREATIVE</span> , LET'S HAVE MORE <span className="yellow">EVENTS</span>.</h2>
          </div>
          <div className="cards-1">
          <div
            className="col-md-4 col-sm-4 col-xs-10 wow fadeIn fa-border "
            data-wow-delay="0.9s"
          >
            <Card.Img className="img-responsive" variant="top" src={team1} />
            <Card.Body className="happen-des">
              <Card.Title className="bold">Digital Marketing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button href="#happen" className="smoothScroll btn-primary">
                Enrollment
              </Button>
            </Card.Body>
          </div>

          <div
            className="col-md-4 col-sm-4 col-xs-10 wow fadeIn fa-border"
            data-wow-delay="0.9s"
          >
            <Card.Img className="img-responsive" variant="top" src={team2} />
            <Card.Body className="happen-des">
              <Card.Title className="bold">Digital Marketing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button href="#happen" className="smoothScroll btn btn-default">
                Enrollment
              </Button>
            </Card.Body>
          </div>
          <div
            className="col-md-4 col-sm-4 col-xs-10 wow fadeIn fa-border"
            data-wow-delay="0.9s"
          >
            <Card.Img className="img-responsive" variant="top" src={team3} />
            <Card.Body className="happen-des">
              <Card.Title className="bold">Digital Marketing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button href="#happen" className="smoothScroll btn btn-default">
                Enrollment
              </Button>
            </Card.Body>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happen;
