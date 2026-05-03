import React from "react";
import reactDom from "react-dom/client";

    const heading = React.createElement("h1", {}, "Hello welcome to react learning!!");
    const Root = reactDom.createRoot(document.getElementById("root"));
    Root.render(heading);
