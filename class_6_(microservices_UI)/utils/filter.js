export const poplar = (RestaurantData) => {
  const filterData = RestaurantData
    ? RestaurantData.filter((restaurant) => restaurant.info.avgRating > 3.5)
    : [];
  return filterData;
};
export const all = (RestaurantData) => {
  return RestaurantData;
};
