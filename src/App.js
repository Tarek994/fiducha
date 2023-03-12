import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
// import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Team from "./components/team/team";
import Happen from "./components/happen/happen";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer.jsx";
import CopyRight from "./components/copyright/copyright";
import WhoWeAre from "./components/whoWeAre/whoWeAre";
import MainServices from "./components/services/main-services";
import DigitalMarketing from "./components/services/DigitalMarketing";
import Marketing from "./components/services/Marketing";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    
      <Router>
        <ScrollToTop />
        <Navbar />

        <div id="section-1"></div>
        <Routes>
        <Route exact path="/" element={<Home />} />

          <Route exact path="/fiducha" element={<Home />} />
          <Route  path="/fiducha/whoWeAre" element={<WhoWeAre />} />
          <Route  path="/fiducha/services" element={<MainServices />} />
          <Route
            
            path="/fiducha/digitalMarketing"
            element={<DigitalMarketing />}
          />
          <Route  path="/fiducha/marketing" element={<Marketing />} />

          <Route  path="/fiducha/portfolio" element={<Portfolio />} />
          <Route  path="/fiducha/team" element={<Team />} />
          <Route  path="/fiducha/happen" element={<Happen />} />
        </Routes>
        <Contact />
        <Footer />
        <CopyRight />
      </Router>
    
  );
}
export default App;
