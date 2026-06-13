import React from "react";
import { useState, useEffect } from "react";
import { RestroCard, RestroPromoted } from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  // console.log(<Body/>);
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [error,setError] =useState("");

  useEffect(() => {
    SwiggyData();
  }, []);

  useEffect(() => {
    FilterRestro();
  }, [search, allData]);

  const FilterRestro = () => {
    const q = search.toLowerCase();
    const filtered = allData.filter((res) => {
      const name = res.name?.toLowerCase() || "";
      const cuisines = Array.isArray(res.cuisines)
        ? res.cuisines.join(" ").toLowerCase()
        : (res.cuisines || "").toLowerCase();
      const locality = res.locality?.toLowerCase() || "";
      return name.includes(q) || cuisines.includes(q) || locality.includes(q);
    });
    setFilteredData(filtered);
  };

  const SwiggyData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0571934&lng=77.501779&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      if (!data.ok) {
        setError(`Fetch failed: ${data.status} ${data.statusText}`);
        return;
      }

      const json = await data.json();
      const restaurants = (json?.data?.cards || [])
        .map((card) => card?.card?.card?.info)
        .filter((restaurant) => restaurant && restaurant.id);
      setAllData(restaurants);
      setFilteredData(restaurants);
    } catch (err) {
      console.error(err);
      setError("Opps...! something went wrong check your internet connection");
    }
  };
  // console.log("Fetched Restaurants:", allData ?.filter((promoted) => promoted.promoted));
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h3>
        Opps...!!!! Something went wrong, Please check your internet
        connection
      </h3>
    );
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  const PromotedRestro = RestroPromoted(RestroCard);

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
          <Link key={`${res.id}-${index}`} to={"/Restaurents/" + res.id}>
            {allData.some((p) => p.promoted && p.id === res.id) ? (
              <PromotedRestro resData={res} />
            ) : (
              <RestroCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
