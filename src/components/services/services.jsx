
import "./services.css";
import React from 'react';


const Services = () => {
  return (
    <section id="about">
        <div class="container">
            <div className="row center">
                    <div className="col-md-12 col-sm-12 text-center">
                        <h1 className="heading bold title">SERVICES</h1>
                        <h2 className="subheading">Strategic planning. Measurable results</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                    {/* <FontAwesomeIcon icon="fa-duotone fa-cloud" /> */}
                        <h3>Planning</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ducimus maxime error, nihil odit doloribus eos ex, neque culpa molestiae iusto tempora sed? Amet perspiciatis asperiores quidem tenetur exercitationem inventore!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
                        {/**/}
                        <h3>Developing</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ducimus maxime error, nihil odit doloribus eos ex, neque culpa molestiae iusto tempora sed? Amet perspiciatis asperiores quidem tenetur exercitationem inventore!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="1s">
                        {/* <FontAwesomeIcon icon={faGlobe} /> */}
                        <h3>Launching</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ducimus maxime error, nihil odit doloribus eos ex, neque culpa molestiae iusto tempora sed? Amet perspiciatis asperiores quidem tenetur exercitationem inventore!</p>
                    </div>
                    <hr />
                    <div className="col-md-6 col-sm-6 wow fadeInUp vedio" data-wow-delay="0.6s" >
                        {/* <img src={aboutImg} className="img-responsive" alt="about img" /> */}
                        <iframe className="video-container" title="vimeo-player" src="https://player.vimeo.com/video/522685321?h=582e4de3a3" max-width="540"  height="300" frameborder="0"    allowfullscreen ></iframe>
                    </div>
                    <div className="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                        <h3>Our Dedication</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <div>
                            <span><i className="fa fa-google"></i> Google ADS</span>
                            <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div>
                            <span><i className="fa fa-twitter"></i> Social media</span>
                            <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div>
                            <span><i className="fa fa-youtube"></i> Youtube</span>
                            <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Services;