import React from "react";
import { RestroCard } from "./RestroCard";
import  {restDetails} from"../utils/mockData";



export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        {restDetails.map((res) => (
          <RestroCard key={res.RestaurantID} resData={res } />
        ))}
      </div>
    </div>
  );
};