import React from "react";

const Button = ({ text, RestaurantData, setRestaurantData, event }) => {
  return (
    <button
      className="filter-btn"
      onClick={() => {
        const filterdList = event(RestaurantData);
        setRestaurantData(filterdList);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
