import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { poplar, all } from "../../utils/filter";
import Button from "./Button";
var PermRestaurantData;

const Body = () => {
  const [RestaurantData, setRestaurantData] = useState([]);
  // const [PermRestaurantData, setPermRestaurantData] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=13.35120&lng=74.78000"
    );
    let json = await data.json();
    PermRestaurantData =
      json.data.success.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantData(PermRestaurantData);
  };
  if (RestaurantData.length === 0) {
    return <ShimmerUi />;
  }
  return (
    <div className="body">
      {console.log(RestaurantData)}
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
