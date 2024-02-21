import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pak",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },
];

const DropDownQuestion = () => {
  const [country, setCountry] = useState("");

  return (
    <>
      <select
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <option>Select Country</option>
        {countries.map((c) => (
          <option value={c.value} key={c.value}>
            {c.name}
          </option>
        ))}
      </select>

      <select>
        {country ? (
          countries.map((st) =>
            st.value === country
              ? st.cities.map((s, index) => <option key={index}>{s}</option>)
              : ""
          )
        ) : (
          <option>Please Select a country</option>
        )}
      </select>
    </>
  );
};

export default DropDownQuestion;
