import React from "react";
export default function Card(props) {
  const fontStyle = {
    margin: "0",
    padding: "0",
    fontSize: "10px",
  };

  const { color, value, title } = props;
  const colorclass = `card-body text-${color}`;

  return (
    <div
      className="card text-white border-primary mb-3"
      style={{ height: "5em", padding: "10" }}
    >
      <div className={colorclass}>
        <p className="card-text" style={{ margin: "0" }}>
          {title}{" "}
        </p>
        <p className="card-text" style={{ margin: "0" }}>
          {value}
        </p>
      </div>
    </div>
  );
}
