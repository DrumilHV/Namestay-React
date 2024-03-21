import React from "react";

import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ props }) => {
  props = props.info;

  // const {name, cloudinaryImageId, costForTwo , cuisines.join(", "), avgRating} = props?.;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + props.cloudinaryImageId}
        alt={props.name}
        height={200}
      />
      <h3>
        {props.name.length > 20
          ? props.name.substring(0, 20) + "..."
          : props.name.substring(0, 20)}
      </h3>
      <h4>{props.cuisines.join(", ").substring(0, 30) + "..."}</h4>

      <div className="timeAndStars">
        <h5 className="stars">{props.avgRating} stars</h5>
        <h5 className="time">{props.sla.deliveryTime} mins</h5>
      </div>

      {/* <h5>20 mins</h5> */}
    </div>
  );
};

export default RestaurantCard;
