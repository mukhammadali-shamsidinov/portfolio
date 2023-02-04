import React from "react";

import bath from "../../image/bath.svg";
import bedroom from "../../image/bed.svg";
import "./filter.css";
import Card from "./card";
const Filter = () => {
  return (
    <div className="container">
      <div className="filter"></div>
      <main>
        <div className="row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </main>
    </div>
  );
};

export default Filter;
