import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  let selectedCities = [];
  let countriesWithCities = [
    {
      country: "India",
      code: "IN",
      cities: ["Delhi", "Gurugram", "Mumbai"],
    },
    {
      country: "United States",
      code: "US",
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
      country: "United Kingdom",
      code: "UK",
      cities: ["London", "Manchester", "Birmingham"],
    },
    {
      country: "Australia",
      code: "AU",
      cities: ["Sydney", "Melbourne", "Brisbane"],
    },
    {
      country: "Germany",
      code: "DE",
      cities: ["Berlin", "Munich", "Frankfurt"],
    },
  ];

  useEffect(() => {
    console.log(selectedCountry);
    console.log(
      countriesWithCities.filter(
        (item, index) => item.code === selectedCountry
      )[0]?.cities
    );
    
  }, [selectedCountry]);
  selectedCities = countriesWithCities.filter(
      (item, index) => item.code === selectedCountry
    )[0]?.cities || [];
    
  return (
    <div>
      <select
        name="selectedCountry"
        id=""
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option selected disabled={true}>
          Select
        </option>
        {countriesWithCities.map((item, index) => (
          <option key={index} value={item.code}>
            {item.country}
          </option>
        ))}
      </select>
      <div className="text-success">
        {selectedCities?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
