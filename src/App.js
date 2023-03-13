import "./App.css";
import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
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
        <Route exact path="*" element={<Navigate replace to="/fiducha" />} />

        <Route exact path="/fiducha" element={<Home />} />

        <Route exact path="/fiducha/whoWeAre" element={<WhoWeAre />} />
        <Route exact path="/fiducha/services" element={<MainServices />} />
        <Route
          exact
          path="/fiducha/services/digitalMarketing"
          element={<DigitalMarketing />}
        />
        <Route exact path="/fiducha/services/marketing" element={<Marketing />} />

        <Route exact path="/fiducha/portfolio" element={<Portfolio />} />
        <Route exact path="/fiducha/team" element={<Team />} />
        <Route exact path="/fiducha/happen" element={<Happen />} />
      </Routes>
      <Contact />
      <Footer />
      <CopyRight />
    </Router>
  );
}
export default App;
