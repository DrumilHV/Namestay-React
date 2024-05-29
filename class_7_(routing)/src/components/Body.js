import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { poplar, all } from "../../utils/filter";
import Button from "./Button";
var PermRestaurantData;

const Body = () => {
  document.title = "FoodGinx";
  const [RestaurantData, setRestaurantData] = useState([]);
  // const [PermRestaurantData, setPermRestaurantData] = useState([]);
  useEffect(() => {
    console.log("useEffect Called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430"
    );
    // console.log("here", await data.json());
    let json = await data.json();
    console.log("This is json\n", json);
    PermRestaurantData =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(PermRestaurantData);

    setRestaurantData(PermRestaurantData);
  };
  if (RestaurantData.length === 0) {
    return <ShimmerUi />;
  }
  return (
    <div className="body">
      <Button text={"search"} />

      <Button
        text={"Popular"}
        RestaurantData={RestaurantData}
        setRestaurantData={setRestaurantData}
        event={poplar}
      />
      <Button
        text={"All"}
        RestaurantData={RestaurantData}
        setRestaurantData={setRestaurantData}
        event={all}
      />

      <div className="res-container">
        {RestaurantData.map((restaurant) => (
          <RestaurantCard props={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
