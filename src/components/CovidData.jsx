import React from "react";

export default function CovidData(props) {
  const coviddata = props.coviddata;
  const sortData = props.onsort;
  console.log("The data", coviddata);

  return (
    <div>
      <table
        className="table"
        style={{
          background: "#f6f6f7",
          color: "#6c757d",
        }}
      >
        <thead>
          <tr>
            <th scope="col" onClick={() => sortData("Country")}>
              Country
            </th>
            <th scope="col" onClick={() => sortData("TotalDeaths")}>
              TotalDeaths
            </th>
            <th scope="col" onClick={() => sortData("TotalConfirmed")}>
              TotalConfirmed
            </th>
            <th scope="col" onClick={() => sortData("TotalRecovered")}>
              TotalRecovered
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coviddata.map((data, i) => (
            <tr key={data.Country}>
              <td className="clickable">{data.Country}</td>
              <td className="clickable">{data.TotalDeaths}</td>
              <td className="clickable">{data.TotalConfirmed}</td>
              <td className="clickable">{data.TotalRecovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
