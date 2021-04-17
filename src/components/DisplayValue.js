import React from "react";

function DisplayValue({ value, title, unit }) {
  return (
    <div
      style={{
        border: "2px solid #CBD5E0",
        minWidth: 300,
      }}
    >
      <h2 style={{ margin: 12 }}>{title}</h2>
      <p>
        <b>
          {value} {unit}
        </b>
      </p>
    </div>
  );
}

export default DisplayValue;
