import React, {useState, useEffect} from "react";
import axios from "axios";
import apiValues from "./Constants"
import "./App.css";

const defaultValues = {
  copyright: "",
  date: "",
  explanation: "",
  hdurl: "",
  title: "",
  media_type: ""
}

function App() {


axios.get(`${apiValues.API_URL}${apiValues.API_KEY}`)
  .then (res => {
    // console.log(res.data);
    const data = res.data;
  })
  .catch (err => {
    console.error(err)
  })


  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className = "container">
        <p>If you run away now, will you come back around?</p>
      </div>
      <p>
        copyright nobody nowhere tonight. here we go again
      </p>
    </div>
  );
}

export default App;
