import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import ArtCubes from "./pages/ArtCubes";
import Contact from "./pages/Contact";
import Directors from "./pages/Directors";
import Wheels from "./pages/Wheels";
import Workshops from "./pages/Workshops";


function App() {
  return (
    <Router> 
      <Navbar/> 
      <Footer/>
      <Route exact path="/" component={Home} />
      <Route exact path="/ArtCubes" component={ArtCubes} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Directors" component={Directors} />
      <Route exact path="/Wheels" component={Wheels} />
      <Route exact path="/Workshops" component={Workshops} />
    </Router>
  );
}

export default App;
