import React from "react";
import { useState, useEffect } from "react";
import { RestroCard } from "./RestroCard";
import { restDetails } from "../utils/mockData";

const Body = () => {
  // console.log(<Body/>);
    const [filteredData, setFilteredData] = useState(restDetails);

  useEffect(() => {
    SwiggyData();
  }, []);

  const SwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0571934&lng=77.501779&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await data.json();
    const restaurants = json.data.cards
      .map((card) => card.card.card.info)
      .filter((restaurant) => restaurant && restaurant.id);
    console.log("restaurants", restaurants);
    setFilteredData(restaurants);
  };



  return (
    <div className="body">
      <button
        className="Button"
        onClick={() => {
          const filtered = filteredData.filter((res) => res.avgRating > 4);
          console.log("kiran",filtered);
          setFilteredData(filtered);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="resto-container">
        {filteredData.map((res, index) => (
          <RestroCard key={`${res.id}-${index}`} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
