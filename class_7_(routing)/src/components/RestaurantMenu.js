import { useState, useEffect } from "react";
import { MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resName, resId } = useParams();
  console.log(resId, resName);
  useEffect(() => {
    //add name here , now its empty
    getData();
  }, []);
  const getData = async () => {
    let data = await fetch(MENU_URL + resId);
    data = await data.json();
    console.log(data, "\n", MENU_URL + resId);
  };
  // console.log();
  return <h1>Testing Now </h1>;
};

export default RestaurantMenu;
