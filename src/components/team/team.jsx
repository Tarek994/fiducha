import team1 from "../../images/team1.jpeg";
import team2 from "../../images/team2.webp";
import team3 from "../../images/team3.jpg";
import "./team.css";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h1 className="heading bold background">OUR TEAM</h1>
            <h2 className="subheading">CREATIVE TALENTS FROM WEST COAST</h2>
          </div>
          <div className="cards">
            <div
              className="col-md-4 col-sm-4 col-xs-12 wow fadeIn"
              data-wow-delay="0.9s"
            >
              <div className="team-wrapper">
                <img src={team1} className="img-responsive " alt="team img" />
                <div className="team-des">
                  <h4>Tracy</h4>
                  <h3>Social Marketing</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-4 col-xs-12 wow fadeIn"
              data-wow-delay="1.3s"
            >
              <div className="team-wrapper">
                <img src={team2} className="img-responsive" alt="team img" />
                <div className="team-des">
                  <h4>Linda</h4>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-4 col-xs-12 wow fadeIn "
              data-wow-delay="1.6s"
            >
              <div className="team-wrapper">
                <img src={team3} className="img-responsive" alt="team img" />
                <div className="team-des">
                  <h4>Mary</h4>
                  <h3>Web Ads</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
