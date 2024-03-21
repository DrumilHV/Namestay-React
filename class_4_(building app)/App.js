import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./public/images/logo.svg";

/*
    Header
        -logo
        -nav items
    Body
        -Search
        -RestaurantContainer
            -RestaurantCard
              -IMG
              -Name
              -Cusiens
              -Ratings
              -delevery time
    Footer
        -coypywrite
        -link
        -address
        -contacts
*/

// ---------------------------

const RestaurantData = [
  {
    info: {
      id: "387588",
      name: "Kouzina Kafe - The Food Court",
      cloudinaryImageId: "zbznazd2ueaac2tp9xvc",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 3.7,
      parentId: "249027",
      avgRatingString: "3.7",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textExtendedBadges: {}, textBased: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=387588",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "351391",
      name: "WarmOven Cake & Desserts",
      cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4,
      parentId: "9696",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { textBased: {}, imageBased: {}, textExtendedBadges: {} },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=351391",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "434227",
      name: "Laziz Pizza",
      cloudinaryImageId: "ytq6pbtxnp7rt8wjhcpu",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Burgers", "Fast Food"],
      avgRating: 3.9,
      parentId: "2299",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { textBased: {}, imageBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "UPTO ₹50" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=434227",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "351394",
      name: "Cupcake Bliss Cake & Desserts",
      cloudinaryImageId: "40f193d8b23afb2988489dac1258962f",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 3.8,
      parentId: "66732",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { textExtendedBadges: {}, textBased: {}, imageBased: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=351394",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "351400",
      name: "Slurpy Shakes",
      cloudinaryImageId: "coec8htwt8tvlifmzdyk",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts"],
      avgRating: 3.3,
      veg: true,
      parentId: "5713",
      avgRatingString: "3.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { textBased: {}, imageBased: {}, textExtendedBadges: {} },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=351400",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "351393",
      name: "Kaati Zone Rolls & Wraps",
      cloudinaryImageId: "tgfgjebat8vzmrwik4mg",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹150 for two",
      cuisines: ["Fast Food", "Bengali", "Beverages", "Desserts"],
      avgRating: 3.4,
      parentId: "248306",
      avgRatingString: "3.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { textBased: {}, imageBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=351393",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "348374",
      name: "The Dessert Zone",
      cloudinaryImageId: "c447c9ce7d0bbe78e46141e866236762",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4,
      parentId: "10414",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { textBased: {}, imageBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=348374",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "351397",
      name: "Sundae Everyday Ice Creams",
      cloudinaryImageId: "upv8bcwtjicexovzqwox",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts"],
      avgRating: 4,
      veg: true,
      parentId: "20021",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textExtendedBadges: {}, textBased: {} },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=351397",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "485236",
      name: "Momo Zone - The Momo Company",
      cloudinaryImageId: "j113rj4rqxdw05qdnmge",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Tibetan", "Fast Food"],
      avgRating: 3.4,
      parentId: "382343",
      avgRatingString: "3.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { textBased: {}, imageBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=485236",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "351401",
      name: "Indiana Burgers",
      cloudinaryImageId: "grgj3ndc0mj0prgn1kk5",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹150 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Desserts"],
      avgRating: 3.4,
      parentId: "5714",
      avgRatingString: "3.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { textBased: {}, imageBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=351401",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "787658",
      name: "Seoul Fried Chicken",
      cloudinaryImageId: "b76ed695e98af0127d588171d34795fd",
      locality: "Sharada Kalyana Mandapa Road",
      areaName: "Manipal",
      costForTwo: "₹300 for two",
      cuisines: [
        "American",
        "Fast Food",
        "Snacks",
        "Korean",
        "Burgers",
        "Beverages",
      ],
      avgRating: 2.3,
      parentId: "468084",
      avgRatingString: "2.3",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  description: "OnlyOnSwiggy",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=787658",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "348370",
      name: "Burger It Up",
      cloudinaryImageId: "h6fpsxxgwh3k3ae0ctav",
      locality: "Kunjibettu",
      areaName: "Udupi",
      costForTwo: "₹150 for two",
      cuisines: ["Burgers", "Beverages", "Desserts", "American", "Cafe"],
      avgRating: 3.5,
      parentId: "7864",
      avgRatingString: "3.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { textExtendedBadges: {}, textBased: {}, imageBased: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=348370",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "626802",
      name: "Coastal Kitchen",
      cloudinaryImageId: "aefape0z9nocamgbtvlr",
      locality: "Maruthi Veethika",
      areaName: "Udupi",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Chinese", "Seafood", "Coastal"],
      avgRating: 4.1,
      parentId: "64085",
      avgRatingString: "4.1",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-27 00:45:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { textExtendedBadges: {}, textBased: {}, imageBased: {} },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=626802",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

// -----------------------------

const Header = () => {
  return (
    <div className="header">
      <div id="logo-container">
        <img className="logo" src={logo} alt="FoodGenix" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = ({ props }) => {
  props = props.info;

  // const {name, cloudinaryImageId, costForTwo , cuisines.join(", "), avgRating} = props?.;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.cloudinaryImageId
        }
        alt={props.name}
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
const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {RestaurantData.map((restaurant) => (
          <RestaurantCard props={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
