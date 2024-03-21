import React from "react";
import ShimmerCard from "./ShimmerCard";
import Button from "./Button";
const ShimmerUi = () => {
  return (
    <div className="body">
      <div className="res-container">
        <button className="filter-btn">{"Popular"}</button>
        <button className="filter-btn">{"All"}</button>
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default ShimmerUi;
