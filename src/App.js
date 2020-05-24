import React, { useState, useEffect } from "react";
import "./App.css";
import CovidData from "./components/CovidData";
import _ from "lodash";
import GlobalDisplay from "./components/globalDisplay";
import axios from "axios";
import { Heading } from "./config/constants";

const API_URL = "https://api.covid19api.com/summary";
//const API_URL_INDIA = "http://covid19-india-adhikansh.herokuapp.com/summary";

function App() {
  const [conviddata, setcoviddata] = useState([]);
  const [globalData, setGlobalData] = useState({});
  const [indiadata, setIndiadata] = useState({});
  const [loading, isloading] = useState(false);
  const [date, setdate] = useState();
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
      const date = coviddata.Date;
      console.log("The date is ", date);
      const globaldata = coviddata.Global;
      const indaData = data.find((ele) => ele.Country === "India");
      console.log("india data is ", indaData);
      setcoviddata(data);
      setGlobalData(globaldata);
      setIndiadata(indaData);
      setdate(date);
      isloading(true);
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
            <div
              class="spinner-border text-primary"
              style={{
                textAlign: "center",
                position: "relative",
                top: "50%",
                left: "50%",
              }}
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
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
            <CovidData coviddata={conviddata} onsort={handleSort} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
