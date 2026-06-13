import { useState, useEffect } from "react";

const useRestaurentMenuData = (resid) => {

  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchMenu = async () => {
      try {
        const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0571934&lng=77.501779&restaurantId=${resid}`;
        console.log("Fetching menu URL:", swiggyUrl);
        const response = await fetch(swiggyUrl, {
          headers: { Accept: "application/json" },
        });

        console.log("Menu response status:", response.status);
        if (!response.ok) {
          console.warn("Menu fetch failed:", response.status, response.statusText);
          const debugText = await response.text().catch(() => null);
          console.log("Menu fetch debug text (first 1k):", debugText?.slice(0, 1000));
          return;
        }

        let json = null;
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          try {
            json = await response.json();
          } catch (err) {
            console.error("Failed to parse JSON response:", err);
            const text = await response.text().catch(() => null);
            try {
              json = text ? JSON.parse(text) : null;
            } catch (e) {
              console.error("Fallback parse failed:", e);
              console.log("Response text (first 1k):", text?.slice(0, 1000));
              return;
            }
          }
        } else {
          const text = await response.text().catch(() => null);
          if (!text) {
            console.warn("Empty response from menu API");
            return;
          }
          console.log("Menu response text (first 1k):", text?.slice(0, 1000));
          try {
            json = JSON.parse(text);
          } catch (parseErr) {
            console.error("Failed to parse menu JSON:", parseErr);
            return;
          }
        }

        const regularCards =
          json?.data?.cards
            ?.find(card => card?.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const itemCategories = regularCards.filter(
          card =>
            card?.card?.card?.["@type"]?.includes("ItemCategory")
        );

        if (itemCategories.length > 0) {
          setData(itemCategories);
        } else {
          const restaurantInfo = json?.data?.cards
            ?.map((x) => x?.card?.card)
            ?.find((x) => x?.info)
            ?.info;
          setData(restaurantInfo || json?.data);
        }

      } catch (err) {
        console.error(err);
      }
    };

    if (resid) {
      fetchMenu();
    }

  }, [resid]);

  return data;
};

export default useRestaurentMenuData;