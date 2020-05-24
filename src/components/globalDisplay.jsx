import React from "react";
import Card from "./GlobalCard";

export default function GlobalDisplay(props) {
  const data = props.data;
  const globalPlace = props.place;
  console.log("the data us ", data);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{globalPlace} </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Card
          color="primary"
          title="TotalConfirmed"
          value={data.TotalConfirmed}
        />
        <Card color="danger" title="TotalDeaths" value={data.TotalDeaths} />
        <Card
          color="success"
          title="TotalRecovered"
          value={data.TotalRecovered}
        />
      </div>
    </div>
  );
}
