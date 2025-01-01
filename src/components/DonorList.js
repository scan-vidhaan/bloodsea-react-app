import React from 'react';
import { useLocation } from 'react-router-dom';

const DonorDetails = () => {
  const location = useLocation();
  const donors = location.state?.donors;

  // If no donors or empty list, show a message
  if (!donors || donors.length === 0) {
    return <p>No donor details available</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-white">Donor Details</h2>
      {donors.map((donor, index) => (
        <div
          key={index}
          className="card mb-4"  // Added margin-bottom for spacing between cards
          style={{
            backgroundColor: 'rgba(47, 2, 29, 0.93)',  // Purple color for the card
            color: 'white',  // White text color for the card
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{donor.name_of_the_donor}</h5>
            <p><strong>Blood Group:</strong> {donor.donor_blood_group}</p>
            <p><strong>Distance:</strong> {donor.distance_km.toFixed(2)} km</p>  {/* Formatting to 2 decimal places */}
            <p><strong>Behavior Analysis:</strong> {donor.behavior_analysis.toFixed(2)}</p>  {/* Formatting to 2 decimal places */}

            {/* Button to open call app */}
            <a
              href={`tel:${donor.mobile_number}`}  // Open phone's call app with the donor's number
              className="btn btn-warning mt-2"  // Yellow button color
            >
              Call Donor
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonorDetails;
