import "../../index.css";
import React from 'react';
import aboutImg from '../../images/about-img.png';


const Services = () => {
  return (
    <section id="about">
        <div class="container">
            <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <h1 className="heading bold">ABOUT US</h1>
                        <h2 className="subheading">WE ARE TALENTED DESIGNERS & DEVELOPERS</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                    {/* <FontAwesomeIcon icon="fa-duotone fa-cloud" /> */}
                        <h3>Planning</h3>
                        <p>Blaster is free responsive layout from <a rel="nofollow" href="http://www.templatemo.com" target="_parent">templatemo</a>. Credit goes to <a rel="nofollow" href="https://pixabay.com" target="_parent">Pixabay</a> for images. You can change icons by looking at <a rel="nofollow" href="https://fortawesome.github.io/Font-Awesome/icons/" target="_parent">FontAwesome icons</a>. Thank you for visiting our website.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
                        {/**/}
                        <h3>Developing</h3>
                        <p>Example: &lt;i class=&quot;fa fa-phone&quot;&gt;&lt;/i&gt; for phone icon. &lt;i class=&quot;fa fa-mobile&quot;&gt;&lt;/i&gt; for mobile icon. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="1s">
                        {/* <FontAwesomeIcon icon={faGlobe} /> */}
                        <h3>Launching</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia deserunt mollit anim id.</p>
                    </div>
                    <hr />
                    <div className="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                        <img src={aboutImg} className="img-responsive" alt="about img" />
                    </div>
                    <div className="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                        <h3>Our Focus</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <div>
                            <span><i className="fa fa-mobile"></i> Mobile Apps</span>
                            <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div>
                            <span><i className="fa fa-link"></i> Web Development</span>
                            <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div>
                            <span><i className="fa fa-cloud"></i> Cloud Computing</span>
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