import React from "react";
export default function Card(props) {
  const fontStyle = {
    margin: "0",
    padding: "0",
    fontSize: "10px",
  };

  let { color, value, title, newdata } = props;
  const colorclass = `card-body text-${color}`;
  newdata = "[+" + newdata + "]";

  return (
    <div
      className="card text-white border-primary mb-3"
      style={{ height: "5em", padding: "10" }}
    >
      <div className={colorclass} style={{ paddingTop: "0" }}>
        <p style={{ margin: "0", padding: "0", color: "#FF6347" }}>{newdata}</p>
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
