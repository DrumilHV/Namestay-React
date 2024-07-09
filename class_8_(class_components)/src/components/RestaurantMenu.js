// import { useState, useEffect } from "react";
// import { MENU_URL } from "../../utils/constants";
// import { useParams } from "react-router-dom";
// import ShimmerUI from "./ShimmerUI";
// const RestaurantMenu = () => {
//   const { resName, resId } = useParams();
//   const [menu, setMenu] = useState(null);
//   console.log(resId, resName);
//   useEffect(() => {
//     //add name here , now its empty
//     getData();
//   }, []);
//   const getData = async () => {
//     let data = await fetch(MENU_URL + resId);
//     data = await data.json();
//     setMenu(data);
//     console.log(MENU_URL + resId);
//   };

//   // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.addons
//   return menu === null ? (
//     <ShimmerUI />
//   ) : (
//     <div>
//       <h1> Testing {menu} </h1>
//     </div>
//   );
// };

// export default RestaurantMenu;

import { useState, useEffect } from "react";
import { MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const { resName, resId } = useParams();
  const [menu, setMenu] = useState(null);

  console.log(resId, resName);

  useEffect(() => {
    //add name here , now its empty
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      console.log("Fetched data: ", json); // Log the fetched data
      setMenu(json);
    } catch (error) {
      console.error("Error fetching menu data: ", error);
    }
  };
  //data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.addons
  // Conditional rendering and optional chaining

  return menu === null ? (
    <ShimmerUI />
  ) : (
    <div>
      <h1>
        {" "}
        Testing{" "}
        {console.log(menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)}
        {card.map((item) => {
          return <h1>{item}</h1>;
        })}
      </h1>
    </div>
  );
};

export default RestaurantMenu;
