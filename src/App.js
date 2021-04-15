import React, { useState, useEffect } from "react";
import "./App.css";
import CovidData from "./components/CovidData";
import _ from "lodash";
import GlobalDisplay from "./components/globalDisplay";
import axios from "axios";
import { Heading } from "./config/constants";
import { Bar } from "react-chartjs-2";
import UIspinner from "./components/UIspinner";
import Footer from "./components/Footer";

//const API_URL = "https://api.covid19api.com/summary";
const API_URL = "https://immense-garden-59038.herokuapp.com/";
//const API_URL_States = "https://api.covidindiatracker.com/state_data.json";
//const API_URL_States = "http://localhost:8081/all";

const API_URL_States = "https://api.covid19india.org/data.json";

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
  const [orderBy, setorderby] = useState("asc");
  useEffect(() => {
    getdataFromApi();
  }, []);

  const state = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Number",
        backgroundColor: "rgba(75,192,192,123)",
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
      console.log("The states data", statesdata.statewise);
      console.log("covid data ", coviddata);

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

      setcoviddata(data);
      setGlobalData(globaldata);
      setIndiadata(indaData);
      setdate(date);
      setStatesdata(statesdata.statewise);
      setbardata(indiadataFrorBar);
      isloading(true);
    } catch (err) {
      // getdataFromApi();

      console.log(err);
    }
  };

  function handleSort(path, type) {
    if (type === "Country") {
      var newData = [...conviddata];
      if (newData.path === path) {
        let newOderBy = orderBy === "asc" ? "desc" : "asc";
        setorderby(newOderBy);
      } else {
        newData.path = path;
        let newOderBy = orderBy === "asc" ? "desc" : "asc";
        setorderby(newOderBy);
      }
      const sorted = _.orderBy(newData, newData.path, orderBy);
      setcoviddata(sorted);
    } else {
      newData = [...statesdata];
      if (newData.path === path) {
        let newOderBy = orderBy === "asc" ? "desc" : "asc";
        setorderby(newOderBy);
      } else {
        newData.path = path;
        let newOderBy = orderBy === "asc" ? "desc" : "asc";
        setorderby(newOderBy);
      }
      const sorted = _.orderBy(newData, newData.path, orderBy);
      setStatesdata(sorted);
    }
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
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
