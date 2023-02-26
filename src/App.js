import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Team from "./components/team/team";
import Happen from "./components/happen/happen";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer.jsx";
import CopyRight from "./components/copyright/copyright";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div id="section-1"></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Services />} />
          <Route path="/about" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/happen" element={<Happen />} />
        </Routes>
        <Contact />
        <Footer />
        <CopyRight />
      </Router>
    </>
  );
}

export default App;
