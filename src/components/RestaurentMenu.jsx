import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurentMenuData  from "../utils/useRestaurentMenuData";

const RestaurentMenu = () => {
  const { resid } = useParams();
  console.log("param", resid);

 const fetchData = useRestaurentMenuData(resid);
 console.log("fetchData", fetchData);

  return (
    <div>
      <h2>Restaurant Menu</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {/* {data ? JSON.stringify(data, null, 2) : "Loading..."} */}
        <div>
          <h2>
            {fetchData?.name || "Restaurant Name Not Available"}
             </h2>
            <h3>{fetchData?.cuisines ? fetchData.cuisines.join(", ") : "Cuisines Not Available"}</h3>
            <p>{fetchData?.locality || "Locality Not Available"}</p>
            <p>⭐ {fetchData?.avgRating || "Rating Not Available"}</p>
         
        </div>
      </pre>
    </div>
  );
};

export default RestaurentMenu;
