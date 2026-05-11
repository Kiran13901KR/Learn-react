import React from "react";
import ReactDOM from "react-dom/client";


export const RestroCard = ({ resData }) => {
  const {RestaurentImg,RestaurentName,City,Cuisine,Ratings} = resData;
  return (
    <div className="restro-card">
      <img
        className="reso-food"
        src={RestaurentImg}
        alt={RestaurentName}
        loading="lazy"
      />
      <div className="restro-details">
        <div>{RestaurentName}</div>
        <div>{City}</div>
        <div>{Cuisine}</div>
        <div>{Ratings}</div>
      </div>
    </div>
  );
};