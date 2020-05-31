import React from "react";
import Card from "./GlobalCard";

export default function GlobalDisplay(props) {
  const data = props.data;
  const globalPlace = props.place;
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
          title="Confirmed"
          value={data.TotalConfirmed}
          newdata={data.NewConfirmed}
        />
        <Card
          color="danger"
          title="Deaths"
          value={data.TotalDeaths}
          newdata={data.NewDeaths}
        />
        <Card
          color="success"
          title="Recovered"
          value={data.TotalRecovered}
          newdata={data.NewRecovered}
        />
        <Card
          color="primary"
          title="Active"
          value={data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths}
          newdata={data.NewConfirmed - data.NewRecovered - data.NewDeaths}
        />
      </div>
    </div>
  );
}
