import React from 'react';
import DonorSearch from './components/DonorSearch'; // Correct path for components folder
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript and Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import routes 
import RoutesComponent from './components/Routes';
//import navbar
import NavBar from './components/NavBarComponent';
import { Router } from 'express';

const App = () => {
  return (
    <div className="App">
      
   <NavBar/>
      <RoutesComponent/>
      
      
    </div>
  );
};

export default App;
