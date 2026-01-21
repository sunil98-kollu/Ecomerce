import React, { useState } from "react";

export default function CountryStateDropdown() {
  const countryStateData = [
    //arrays of objects
    {
      id: 1,
      country: "USA",
      states: ["Califrnia", "Texs", "NewYork"],
    },
    {
      id: 2,
      country: "India",
      states: ["Ap", "Maharashtra", "Karnataka"],
    },
    {
      id: 3,
      country: "Australia",
      states: ["New South Wales", "Victoria", "Queensland"],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(""); // country
  const [selectedState, setSelectedState] = useState(""); // selected state
  const [showstates, setShowStates] = useState([]); // showing states   based on country

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country); // set country

    const countryObj = countryStateData.find(          // iterate find the country object and get countries  set to states
      (item) => item.country === country,
    );
    setShowStates(countryObj ? countryObj.states : []); // if states r avaliable show in states info on dropdown
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value); // selected state update to state variable
  };
  return (
    <div style={{ padding: "20px", backgroundColor: "grey" }}>
      <label>Country:</label>
      <br />
      <select onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countryStateData.map((item) => (
          <option key={item.id} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <br />
      <br />

      <label>State:</label>
      <br />
      <select onChange={handleStateChange} disabled={!selectedCountry}>
        <option value="">
          {selectedCountry ? "Select State" : "Select country first"}
        </option>
        {showstates.map((state) => (
          <option key={state}>{state}</option> // lopp to state object display states
        ))}
      </select>

      <br />
      <br />

      <h3>Selected Values</h3>
      <p>Country: {selectedCountry || "None"}</p>
      <p>State: {selectedState || "None"}</p>
    </div>
  );
}
