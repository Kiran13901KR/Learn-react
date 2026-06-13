import React from "react";

export const RestroCard = ({ resData }) => {
  const { cloudinaryImageId, name, locality, cuisines, avgRating } = resData;

  return (
    <div className="restro-card">
      <img
        className="reso-food"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        loading="lazy"
      />
      <div className="restro-details">
        <h3>{name}</h3>
        <p>{locality}</p>
        <p>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
        <p>⭐ {avgRating}</p>
        {/* <Link to={`/Restaurents/${resData.id}`}>
          <button>Restro Details</button>
        </Link> */}
      </div>
    </div>
  );
};

export const RestroPromoted = (RestroCard) => {
  return (props) => {
   return (
  <div className="card-wrapper">
    <span className="promoted-badge">Promoted</span>
    <RestroCard {...props} />
  </div>
);
  };
};
