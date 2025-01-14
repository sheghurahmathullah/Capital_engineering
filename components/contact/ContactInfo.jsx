"use client";
import { contactInfo2 } from "@/data/contactInfo"; // Ensure this file contains the updated contactInfo2
import React, { useState } from "react";

export default function ContactInfo() {
  const [selectedLocation, setSelectedLocation] = useState(""); // State to hold the selected location

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value); // Update the selected location
  };

  const clearFilter = () => {
    setSelectedLocation(""); // Clear the filter by resetting the selected location
  };

  return (
    <div className="feature-area-1 space">
      <div className="container">
        {/* Globe image section */}
        <div className="text-center mb-4" style={{ marginTop: "10px" }}>
          <img src="/assets/img/image.png" alt="Globe" className="img-fluid" />
        </div>

        {/* Offices around the world section */}
        <div className="text-center mb-5">
          <h2 style={{ marginBottom: "30px", fontSize: "50px", marginTop: "20px" }}>Our Offices Around the World</h2>
          <p style={{ marginBottom: "100px", fontSize: "20px" }}>
            Connect with one of our global offices... or feel free to just send us a nifty postcard. We won't mind!
          </p>
        </div>

        {/* Filter options */}
        <div className="row">
          {/* Left filter section */}
          <div className="col-md-3 mb-4" style={{ "--theme-color": "#000000" }}>
            <h4 className="mb-3" style={{ color: "#000000" }}>Filter by Location</h4>
            {contactInfo2.map((country, index) => (
              <div key={index} className="mb-4">
                <h5>{country.title}</h5>
                <select
                  className="form-select"
                  onChange={handleLocationChange}
                  value={selectedLocation}
                  style={{
                    borderColor: selectedLocation ? "#071e53" : "#ccc", // Border color changes based on selection
                    backgroundColor: selectedLocation ? "#f0f8ff" : "#fff", // Background color when selected
                  }}
                >
                  <option value="">All Locations</option>
                  {country.locations.map((location, locIndex) => (
                    <option key={locIndex} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            {/* Clear Filter button */}
            <div className="mb-4">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={clearFilter}
                style={{ marginTop: "10px" }}
              >
                Clear Filter
              </button>
            </div>
          </div>

          {/* Right section to show filtered offices */}
          <div className="col-md-9">
            <div className="row">
              {contactInfo2.map((country, index) => {
                const filteredLocations = country.locations.filter((location) =>
                  selectedLocation ? location.name === selectedLocation : true
                );

                // Hide countries with no relevant locations
                if (selectedLocation && filteredLocations.length === 0) {
                  return null;
                }

                return (
                  <div
                    key={index}
                    className={
                      country.title === "UAE" && !selectedLocation
                        ? "col-12 mb-4"
                        : "col-md-4 mb-4"
                    }
                  >
                    <div
                      className={`feature-card border rounded p-3 text-center shadow-sm ${
                        country.title === "UAE" && !selectedLocation ? "w-100" : ""
                      }`}
                    >
                      <h4 className="feature-card-title">{country.title}</h4>
                      <div className="dropdown-content">
                        {/* Special layout for UAE */}
                        {country.title === "UAE" && !selectedLocation ? (
                          <div className="row">
                            {filteredLocations.map((location, locIndex) => (
                              <div
                                key={locIndex}
                                className="col-md-6 col-lg-4 text-start mb-3"
                              >
                                <h5>{location.name}</h5>
                                <p className="mb-1">{location.address}</p>
                                <p className="mb-1">{location.phoneNumber}</p>
                                <p className="mb-1">{location.email}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          filteredLocations.map((location, locIndex) => (
                            <div
                              key={locIndex}
                              className="location-item text-start mb-3"
                            >
                              <h5>{location.name}</h5>
                              <p className="mb-1">{location.address}</p>
                              <p className="mb-1">{location.phoneNumber}</p>
                              <p className="mb-1">{location.email}</p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
