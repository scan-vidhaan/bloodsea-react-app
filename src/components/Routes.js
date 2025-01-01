import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonorSearch from './DonorSearch'; // Adjust path if needed
import DonorList from './DonorList'; // Adjust path if needed

const RoutesComponent = () => {
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<DonorSearch />} />
          <Route path="/donors" element={<DonorList />} />
        </Routes>
   
    </div>
  );
};

export default RoutesComponent;
