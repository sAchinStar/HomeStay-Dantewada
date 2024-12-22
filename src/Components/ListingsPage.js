// import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./ListingsPage.css";
// import { Link } from "react-router-dom";
// import { fetchHomestays } from "../api";

const ListingsPage = () => {
  // const [homestays, setHomestays] = useState([]);

  // useEffect(() => {
  //   fetchHomestays().then(data => setHomestays(data));
  // }, []);

  return (
    <div className="container d-flex justify-content-evenly flex-wrap">
     
      <div className="one all">
      <Card/>   
      </div>

      <div className="two all">
      <Card/>
      </div>

      <div className="three all">
      <Card/>
      </div>

      <div className="four all">
      <Card/>
      </div>

      <div className="five all">
      <Card/>
      </div>

      <div className="six all">
      <Card/>
      </div>

      <div className="seven all">
      <Card/>
      </div>

      <div className="eight all">
      <Card/>
      </div>

      <div className="nine all">
      <Card/>
      </div>

      <div className="ten all">
      <Card/>
      </div>

      <div className="eleven all">
      <Card/>
      </div>

      <div className="twelve all">
      <Card/>
      </div>

      <div className="thirteen all">
      <Card/>
      </div>

      <div className="fourteen all">
      <Card/>
      </div>

      <div className="fifteen all">
      <Card/>
      </div>

      <div  className="sixteen all">
        <Card/>
      </div>
    
    </div>
  );
};

export default ListingsPage;