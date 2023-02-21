import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Team from "./components/team/team";

function App() {
  return (
    <BrowserRouter>
        {/* <Navbar/>
        <Home/>
        <Services/>
        <Portfolio/> */}
        <Team/>

      </BrowserRouter>
    
  );
}

export default App;
