import React, { useState } from "react";

import RestaurantCard from "./RestaurantCard";

import mockRestaurantData from "../../utils/mockData";
const Body = () => {
  const [RestaurantData, setRestaurantData] = useState(mockRestaurantData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = RestaurantData.filter(
              (restaurant) => restaurant.info.avgRating > 3.5
            );
            console.log(mockRestaurantData, filterdList);
            setRestaurantData(filterdList);
          }}
        >
          Popular
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantData(mockRestaurantData);
          }}
        >
          All
        </button>
      </div>
      <div className="res-container">
        {RestaurantData.map((restaurant) => (
          <RestaurantCard props={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
