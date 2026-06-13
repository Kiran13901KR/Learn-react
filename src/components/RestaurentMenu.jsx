import React , {useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { addItem as addCartItem } from "../reduxStore/cartSlice";
import { removeItem } from "../reduxStore/cartSlice";

const RestaurentMenu = () => {
const [itemData, setItemData] = useState();

  const dispatch = useDispatch();
  
  // Dummy data fallback so the page can be worked on without the API.
  const dummyCategories = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          title: `Recommended (${itemData})`,
          itemCards: [
            {
              card: {
                info: {
                  name: "Veg Family Bucket Biryani",
                  price: 74900,
                  avgRating: 4.6,
                  description:
                    "Serves 3 | Layers of aromatic Rice and Vegetables cooked with our biryani masala in a dum. Served with Mirchi ka Salan and creamy raita.",
                  isVeg: true,
                },
              },
            },
            {
              card: {
                info: {
                  name: "Paneer Makhani Family Bucket Biryani",
                  price: 89900,
                  avgRating: 4.8,
                  description:
                    "Serves 3 | Paneer Tikka cooked in a silky makhani gravy layered on Dum biryani rice. Served with raita and salan.",
                  isVeg: true,
                },
              },
            },
            {
              card: {
                info: {
                  name: "Masala Dosa",
                  price: 14900,
                  avgRating: 4.4,
                  description: "Crispy rice and lentil crepe served with potato masala and chutneys.",
                  isVeg: true,
                },
              },
            },
            {
              card: {
                info: {
                  name: "Gulab Jamun (2 pcs)",
                  price: 9900,
                  avgRating: 4.2,
                  description: "Soft milk-solid dumplings soaked in sugar syrup.",
                  isVeg: true,
                },
              },
            },
          ],
        },
      },
    },
  ];

  // Use API data when available, otherwise use dummyCategories for development.
  const categories = dummyCategories;
  const itemCards = categories[0]?.card?.card?.itemCards || [];

  useEffect(() => {
  setItemData(itemCards.length);
}, [itemCards.length]);


  const addRestoItem = (item) => {
    dispatch(addCartItem(item));
  };
 
  const removerestroData = (item) => {
    console.log("Removing item from cart with id:", item.id);
    dispatch(removeItem(item.name));
  }

  return (
    <div className="menu-page">
    

      <div className="menu-categories">
        {categories.map((cat, idx) => {
          const title = cat?.card?.card?.title || "";
          const items = cat?.card?.card?.itemCards || [];

          return (
            <div className="menu-category" key={idx}>
              {title && <h3 className="category-title">{title}</h3>}
              {items.map((it, i) => {
                const info = it?.card?.info || it?.card?.card?.info || it?.card || it;
                const name = info?.name || info?.itemName || "Item";
                const rawPrice = info?.price ?? info?.defaultPrice ?? info?.priceId ?? info?.cost;
                let priceStr = "";
                if (typeof rawPrice === "number") {
                  priceStr = `₹${Math.round(rawPrice / 100)}`;
                } else if (info?.priceString) {
                  priceStr = info.priceString;
                }
                const rating = info?.avgRating || info?.ratings?.aggregatedRating || info?.rating || null;
                const desc = info?.description || info?.itemDescription || info?.meta || "";
                const imageId = info?.imageId || info?.cloudinaryImageId || info?.image || info?.imageUrl;
                let imgUrl = null;
                if (imageId) {
                  if (typeof imageId === "string" && /^https?:\/\//.test(imageId)) {
                    imgUrl = imageId;
                  } else {
                    imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fill/${imageId}`;
                  }
                }
                const isVeg = info?.isVeg ?? (info?.vegClassifier === "VEG");
  console.log("log",info)
                return (
                  <div className="menu-item" key={i}>
                    <div className="menu-item-left">
                      <div className={`veg-indicator ${isVeg ? "veg" : "non-veg"}`} />
                      <div className="item-info">
                        <h4 className="item-title">{name}</h4>
                        <div className="item-meta">
                          <span className="item-price">{priceStr}</span>
                          {rating && <span className="item-rating">⭐ {rating}</span>}
                        </div>
                        {desc && <p className="item-desc">{desc}</p>}
                      </div>
                      <button className="AddButton" onClick={() => addRestoItem(info)}>ADD</button>
                       <button className="RemoveButton" onClick={() => removerestroData(info)} > 🗑️ REMOVE</button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentMenu;
