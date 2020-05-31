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
            <tr
              key={data.Country}
              onClick={() => onClickHandler(data)}
              style={{ cursor: "pointer" }}
            >
              <td className="clickable">
                {dataType === "Countries" ? data.Country : data.state}
              </td>
              <td className="clickable">
                {dataType === "Countries" ? (
                  <div>
                    {data.NewConfirmed === 0 ? (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",

                          color: "red",
                          display: "inline-block",
                        }}
                      >
                        {"  "}
                      </span>
                    ) : (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",
                          color: "red",
                          display: "inline-block",
                        }}
                        className="glyphicon glyphicon-arrow-up"
                      >
                        {data.NewConfirmed}{" "}
                      </span>
                    )}
                    <span style={{ display: "block" }}>
                      {data.TotalConfirmed}
                    </span>
                  </div>
                ) : (
                  <div>
                    {data.cChanges === 0 ? (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",

                          color: "red",
                          display: "inline-block",
                        }}
                      >
                        {"  "}
                      </span>
                    ) : (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",
                          color: "red",
                          display: "inline-block",
                        }}
                        className="glyphicon glyphicon-arrow-up"
                      >
                        {data.cChanges}{" "}
                      </span>
                    )}
                    <span style={{ display: "block" }}>{data.confirmed}</span>
                  </div>
                )}
              </td>
              <td className="clickable">
                {dataType === "Countries" ? (
                  <div>
                    <span
                      style={{
                        width: "35%",
                        fontSize: "smaller",

                        color: "red",
                        display: "inline-block",
                      }}
                    >
                      {"  "}
                    </span>
                    <span style={{ display: "block" }}>
                      {data.TotalConfirmed -
                        (data.TotalRecovered + data.TotalDeaths)}
                    </span>
                  </div>
                ) : (
                  <div>
                    <span
                      style={{
                        width: "35%",
                        fontSize: "smaller",

                        color: "red",
                        display: "inline-block",
                      }}
                    >
                      {"  "}
                    </span>
                    <span style={{ display: "block" }}>
                      {data.confirmed - (data.recovered + data.deaths)}
                    </span>
                  </div>
                )}
              </td>
              <td className="clickable">
                {dataType === "Countries" ? (
                  <div>
                    {data.NewRecovered === 0 ? (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",

                          color: "green",
                          display: "inline-block",
                        }}
                      >
                        {"  "}
                      </span>
                    ) : (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",
                          color: "green",
                          display: "inline-block",
                        }}
                        className="glyphicon glyphicon-arrow-up"
                      >
                        {data.TotalRecovered}{" "}
                      </span>
                    )}
                    <span style={{ display: "block" }}>
                      {data.TotalRecovered}
                    </span>
                  </div>
                ) : (
                  <div>
                    {data.rChanges === 0 ? (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",

                          color: "green",
                          display: "inline-block",
                        }}
                      >
                        {"  "}
                      </span>
                    ) : (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",
                          color: "green",
                          display: "inline-block",
                        }}
                        className="glyphicon glyphicon-arrow-up"
                      >
                        {data.rChanges}{" "}
                      </span>
                    )}
                    <span style={{ display: "block" }}>{data.recovered}</span>
                  </div>
                )}
              </td>
              <td className="clickable">
                {dataType === "Countries" ? (
                  <div>
                    {data.NewDeaths === 0 ? (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",

                          color: "grey",
                          display: "inline-block",
                        }}
                      >
                        {"  "}
                      </span>
                    ) : (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",
                          color: "grey",
                          display: "inline-block",
                        }}
                        className="glyphicon glyphicon-arrow-up"
                      >
                        {data.NewDeaths}{" "}
                      </span>
                    )}
                    <span style={{ display: "block" }}>{data.TotalDeaths}</span>
                  </div>
                ) : (
                  <div>
                    {data.dChanges === 0 ? (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",

                          color: "grey",
                          display: "inline-block",
                        }}
                      >
                        {"  "}
                      </span>
                    ) : (
                      <span
                        style={{
                          width: "35%",
                          fontSize: "smaller",
                          color: "grey",
                          display: "inline-block",
                        }}
                        className="glyphicon glyphicon-arrow-up"
                      >
                        {data.dChanges}{" "}
                      </span>
                    )}
                    <span style={{ display: "block" }}>{data.deaths}</span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
