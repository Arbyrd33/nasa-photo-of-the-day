import React, {useState, useEffect} from "react";

import axios from "axios";

import apiValues from "./Constants"
import ShowInfo from "./Components/Buttons/ShowInfo"
import "./App.css";


export default function App() {

  const [nasaData, setNasaData] = useState([]);
  const [todaysPicture, setTodaysPicture] = useState(null);

  useEffect(()=>{
    axios.get(`${apiValues.API_URL}${apiValues.API_KEY}`)
    .then (res => {
      console.log(res.data);
      setNasaData(res.data);
    })
    .catch (err => {
      console.error(err)
    })

  }, [])
  
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className = "container">
        <div className ="nav">
          <p>shameless portfolio plug link (eventually) goes here</p>
        </div>
        <div className = "card">
        <h3>{nasaData.date}: <i>{nasaData.title}</i></h3>
        <img src = {nasaData.url} alt={nasaData.title}/>
        {/* <span><p onClick={<ShowInfo/>}>Show Details...</p></span> */}
        {/* ^^^ Eventually I want that to be functional with the data on the next line. */}
        <p>{nasaData.explanation}</p>

        </div>
      </div>
      <p>
        copyright nobody nowhere tonight. here we go again
      </p>
    </div>
  );
}
