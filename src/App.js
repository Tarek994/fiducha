import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Home/>
        <Services/>
        <Portfolio/>

      </BrowserRouter>
    
  );
}

export default App;
