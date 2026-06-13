import React from "react";
import {useRouteError} from "react-router-dom";

const Error = () =>{
    const error = useRouteError();
    console.log(error);
    const status = error?.status || "";
    const message = error?.error?.message || error?.message || "Something went wrong";

    return(
        <div>
            <h1>Oops!!!!!</h1>
            <h3>{`${status} ${message}`}</h3>
        </div>
    )
}

export default Error;
