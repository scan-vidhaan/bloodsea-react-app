import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DonorSearch = () => {
  const [pincode, setPincode] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle the search action
  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/find-donors', {
        pincode: pincode,
        bloodGroup: bloodGroup,
      });
      setDonors(response.data); // Set the donors data
      setError('');

      // Navigate to /donors and pass the entire donors list
      navigate('/donors', { state: { donors: response.data } });

    } catch (err) {
      setError('Error fetching donor data');
      console.error(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-4 p-md-5"
        style={{
          backgroundColor: 'rgba(47, 2, 29, 0.93)',
          borderRadius: '10px',
          border: '1px solid rgba(47, 2, 29, 0.93)',
          width: '100%',  // Use full width on smaller screens
          maxWidth: '300px',  // Limit to 400px on larger screens
        
        }}
      >
        <h2 className="text-center mb-4" style={{ color: 'white' }}>
          Donor Search
        </h2>

        {/* Input for Pincode */}
        <div className="form-group mb-3">
       
          <input
            type="text"
            className="form-control"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter pincode"
          />
        </div>

        {/* Select for Blood Group */}
        <div className="form-group mb-3">
        
          <select
            className="form-control"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
            <option value="A RhD positive (A+">A RhD positive (A+)</option>
            <option value="A RhD negative (A-)">A RhD negative (A-)</option>
            <option value="B RhD positive (B+)">B RhD positive (B+)</option>
            <option value="B RhD negative (B-)">B RhD negative (B-)</option>
            <option value="O RhD positive (O+)">O RhD positive (O+)</option>
            <option value="O RhD negative (O-)">O RhD negative (O-)</option>
            <option value="AB RhD positive (AB+)">AB RhD positive (AB+)</option>
            <option value="AB RhD negative (AB-)">AB RhD negative (AB-)</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="text-center">
          <button className="btn btn-warning" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Error message */}
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default DonorSearch;
