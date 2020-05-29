import React, { useState, useEffect } from "react";
import "./App.css";
import CovidData from "./components/CovidData";
import _ from "lodash";
import GlobalDisplay from "./components/globalDisplay";
import axios from "axios";
import { Heading } from "./config/constants";
import { Bar } from "react-chartjs-2";
import UIspinner from "./components/UIspinner";
const API_URL = "https://api.covid19api.com/summary";
const API_URL_States = "https://api.covidindiatracker.com/state_data.json";
//const API_URL_INDIA = "http://covid19-india-adhikansh.herokuapp.com/summary";

function App() {
  const [conviddata, setcoviddata] = useState([]);
  const [globalData, setGlobalData] = useState({});
  const [indiadata, setIndiadata] = useState({});
  const [statesdata, setStatesdata] = useState([]);
  const [bardata, setbardata] = useState([]);
  const [date, setdate] = useState();
  const [selectedStateData, setselectedStatedata] = useState([]);
  const [selectedStateName, setselectedStateName] = useState("None");
  const [loading, isloading] = useState(false);
  useEffect(() => {
    getdataFromApi();
  }, []);

  const state = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Number",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        // data: [1971, 21060, 1600],
        data: bardata,
      },
    ],
  };
  const selectedState = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Number",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        // data: [1971, 21060, 1600],
        data: selectedStateData,
      },
    ],
  };

  function onIndianStatesdataClickhandler(data) {
    console.log("onclick event triggered", data);
    const selecteStateData = [];
    selecteStateData.push(
      data.confirmed,
      data.active,
      data.recovered,
      data.deaths
    );
    setselectedStateName(data.state);
    setselectedStatedata(selecteStateData);
  }

  const getdataFromApi = async () => {
    try {
      const [{ data: coviddata }, { data: statesdata }] = await Promise.all([
        axios.get(API_URL),
        axios.get(API_URL_States),
      ]);
      console.log("The states data", statesdata);

      const data = coviddata.Countries;

      const date = coviddata.Date;

      const globaldata = coviddata.Global;
      const indaData = data.find((ele) => ele.Country === "India");
      console.log("india data", indaData);

      const indiadataFrorBar = [];
      const active =
        indaData.TotalConfirmed -
        (indaData.TotalRecovered + indaData.TotalDeaths);
      indiadataFrorBar.push(
        indaData.TotalConfirmed,
        active,
        indaData.TotalRecovered,
        indaData.TotalDeaths
      );

      console.log("The pei data is ", indiadata.TotalRecovered);

      setcoviddata(data);
      setGlobalData(globaldata);
      setIndiadata(indaData);
      setdate(date);
      setStatesdata(statesdata);
      setbardata(indiadataFrorBar);
      isloading(true);
    } catch (err) {
      getdataFromApi();

      console.log(err);
    }
  };

  function handleSort(path) {
    const newData = [...conviddata];

    if (newData.path === path) {
      newData.order = newData.order === "asc" ? "desc" : "asc";
    } else {
      newData.path = path;
      newData.order = "desc";
    }
    const sorted = _.orderBy(newData, newData.path, newData.order);
    setcoviddata(sorted);
  }

  return (
    <div className="container" style={{ animationDelay: "1.5s" }}>
      <div style={{ borderBottom: "1px solid black", marginBottom: "2%" }}>
        <h1 className="App display-1">{Heading}</h1>
        <p className="App"> Last Updated : {date}</p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-5" style={{}}>
          {loading ? (
            <div style={{ animationDelay: "1.5s" }}>
              <GlobalDisplay data={globalData} place="GLOBAL" />
              <GlobalDisplay data={indiadata} place="INDIA" />
            </div>
          ) : (
            <UIspinner />
          )}
        </div>
        <div className="col-12 col-sm-7">
          <div
            style={{
              width: "auto",
              height: "30em",
              overflow: "scroll",
            }}
          >
            <CovidData
              coviddata={conviddata}
              onsort={handleSort}
              dataType="Countries"
            />
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "5em" }}>
        <div className="col-xl-12 col-12">
          <h1 className="App display-1" style={{ fontSize: "6vw" }}>
            Indian States
          </h1>
        </div>
        <div
          className="col-xl-7 col-12"
          style={{
            width: "auto",
            height: "30em",
            overflow: "scroll",
          }}
        >
          <CovidData
            coviddata={statesdata}
            onsort={handleSort}
            dataType="States"
            onclickhandler={onIndianStatesdataClickhandler}
          />
        </div>
        <div className="col-xl-5 col-12">
          {isloading ? (
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "India Cases ",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          ) : (
            <UIspinner />
          )}
          <Bar
            data={selectedState}
            options={{
              title: {
                display: true,
                text: selectedStateName,
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
      <div
        className="row"
        style={{ marginTop: "5em", position: "relative", left: "0" }}
      >
        <div className="col-12 col-xl-12 App">
          <div
            align="center"
            className="socialbtns"
            style={{ position: "relative", right: "1%" }}
          >
            <ul>
              <li>
                <a
                  href="https://twitter.com/prkkhan1"
                  className="fa fa-lg fa-twitter"
                ></a>
              </li>

              <li>
                <a
                  href="https://github.com/prkkhan786"
                  className="fa fa-lg fa-github"
                ></a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/parvez-khan-1b245889/"
                  className="fa fa-lg fa-linkedin"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/travelwithparvez/"
                  className="fa fa-lg fa-instagram"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCbazSHWpFq-Io2PiehXY2Zw"
                  className="fa fa-lg fa-youtube"
                ></a>
              </li>
            </ul>
          </div>
          <p style={{ fontWeight: "bolder" }}>Made with ❤ by Parvez khan.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
