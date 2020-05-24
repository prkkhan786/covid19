import React, { useState, useEffect } from "react";
import "./App.css";
import CovidData from "./components/CovidData";
import _ from "lodash";
import GlobalDisplay from "./components/globalDisplay";
import axios from "axios";

const API_URL = "https://api.covid19api.com/summary";
//const API_URL_INDIA = "http://covid19-india-adhikansh.herokuapp.com/summary";

function App() {
  const [conviddata, setcoviddata] = useState([]);
  const [globalData, setGlobalData] = useState({});
  const [indiadata, setIndiadata] = useState({});
  useEffect(() => {
    getdataFromApi();
  }, []);

  const getdataFromApi = async () => {
    try {
      const [{ data: coviddata }] = await Promise.all([
        axios.get(API_URL),
        //axios.get(API_URL_INDIA),
      ]);
      const data = coviddata.Countries;
      const globaldata = coviddata.Global;
      const indaData = data.find((ele) => ele.Country === "India");
      console.log("india data is ", indaData);
      setcoviddata(data);
      setGlobalData(globaldata);
      setIndiadata(indaData);
    } catch (err) {
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
    <div className="container">
      <div style={{ borderBottom: "1px solid black", marginBottom: "2%" }}>
        <h1 className="App display-1">Covid Status</h1>
      </div>
      <div className="row">
        <div className="col-7">
          <div
            style={{
              width: "auto",
              height: "30em",
              overflow: "scroll",
              border: "1px solid black",
            }}
          >
            <CovidData coviddata={conviddata} onsort={handleSort} />
          </div>
        </div>
        <div className="col-5" style={{ border: "1px solid green" }}>
          <GlobalDisplay data={globalData} place="GLOBAL" />
          <GlobalDisplay data={indiadata} place="INDIA" />
        </div>
      </div>
    </div>
  );
}

export default App;
