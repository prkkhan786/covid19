import React from "react";

export default function CovidData(props) {
  const coviddata = props.coviddata;
  const sortData = props.onsort;
  const dataType = props.dataType;
  let onClickHandler = props.onclickhandler;
  if (!onClickHandler) {
    onClickHandler = () => {
      console.log("");
    };
  }
  return (
    <div>
      <table
        className="table"
        style={{
          background: "",
          color: "#6c757d",
        }}
      >
        <thead>
          <tr>
            <th scope="col" onClick={() => sortData("Country")}>
              {dataType}
            </th>
            <th scope="col" onClick={() => sortData("TotalConfirmed")}>
              Confirmed
            </th>
            <th scope="col" onClick={() => sortData("TotalConfirmed")}>
              Active
            </th>
            <th scope="col" onClick={() => sortData("TotalRecovered")}>
              Recovered
            </th>
            <th scope="col" onClick={() => sortData("TotalDeaths")}>
              Deaths
            </th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {coviddata.map((data, i) => (
            <tr key={data.Country} onClick={() => onClickHandler(data)}>
              <td className="clickable">
                {dataType === "Countries" ? data.Country : data.state}
              </td>
              <td className="clickable">
                {dataType === "Countries"
                  ? data.TotalConfirmed
                  : data.confirmed}
              </td>
              <td className="clickable">
                {dataType === "Countries"
                  ? data.TotalConfirmed -
                    (data.TotalRecovered + data.TotalDeaths)
                  : data.confirmed - (data.recovered + data.deaths)}
              </td>
              <td className="clickable">
                {dataType === "Countries"
                  ? data.TotalRecovered
                  : data.recovered}
              </td>
              <td className="clickable">
                {dataType === "Countries" ? data.TotalDeaths : data.deaths}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
