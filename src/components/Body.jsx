import React from "react";
import { useState, useEffect } from "react";
import { RestroCard } from "./RestroCard";
import { restDetails } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // console.log(<Body/>);
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    SwiggyData();
  }, []);

  useEffect(() => {
    FilterRestro();
  }, [search]);

  const FilterRestro = () => {
    const filtered = allData.filter((res) => {
      const name = res.name?.toLowerCase() || "";
      const cuisines = Array.isArray(res.cuisines) ? res.cuisines.join(" ").toLowerCase() : "";
      const locality = res.locality?.toLowerCase() || "";
      return name.includes(search.toLowerCase()) || cuisines.includes(search.toLowerCase()) || locality.includes(search.toLowerCase());
    });
    setFilteredData(filtered);
  }

  const SwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0571934&lng=77.501779&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await data.json();
    const restaurants = json.data.cards
      .map((card) => card.card.card.info)
      .filter((restaurant) => restaurant && restaurant.id);
    setAllData(restaurants);
    setFilteredData(restaurants);
  };

  return allData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-field">
          <input
            type="text"
            className="filter-text"
            placeholder="Search for restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="search-restaurents">Search</button>
        </div>

        <button
          className="Button"
          onClick={() => {
            const filtered = filteredData.filter((res) => res.avgRating > 4);
            // console.log("user logged in:",  login);
            setFilteredData(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="resto-container">
        {(filteredData.length > 0 ? filteredData : allData).map((res, index) => (
          <RestroCard key={`${res.id}-${index}`} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
