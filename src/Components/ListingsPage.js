// import React, { useEffect, useState } from "react";
import Card from "./Card";
// import { Link } from "react-router-dom";
// import { fetchHomestays } from "../api";

const ListingsPage = () => {
  // const [homestays, setHomestays] = useState([]);

  // useEffect(() => {
  //   fetchHomestays().then(data => setHomestays(data));
  // }, []);

  return (
    <div className="container d-flex justify-content-evenly flex-wrap">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
};

export default ListingsPage;
