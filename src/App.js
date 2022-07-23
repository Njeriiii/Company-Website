import { BrowserRouter as Router, Switch, 
  Route,Routes, Redirect, viewBox, Link} from "react-router-dom";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { LandingPage } from './components/LandingPage';
import ContactUs from './components/ContactUs';
import { AboutUs } from "./components/AboutUs";
import ServicesProvided from "./components/ServicesProvided";

import logo from './logo.svg';
import './App.css';
import './components/Cards/CarCards.js'
import { CarInsurance } from "./components/Major Types/CarInsurance";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/ServicesProvided" element={<ServicesProvided/>} />
          <Route exact path="/ContactUs" element={<ContactUs/>} />
          <Route exact path="AboutUs" element={<AboutUs/>} />

          <Route exact path="/CarInsurance" element={<CarInsurance/>}/>
        </Routes>
      </Router>
      {/* <header className="App-header">
        <div>
          <img size='100px' src={require('./images/finallogo.png')} className="logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LandingPage/>  */}
        {/* <AboutUs/>
        <ServicesProvided/>
        <ContactUs/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
