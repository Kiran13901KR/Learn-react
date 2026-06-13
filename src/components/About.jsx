import React from"react";
import RestaurentMenu from "./RestaurentMenu";
import UserClass from "./UserClass"

const About = () =>{
    return(
        <div className="about">
            <h2>Inside About Component</h2>
            <UserClass name={"Kiran"}/>
            <RestaurentMenu/>
        </div>
    )
}

export default About;