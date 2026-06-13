import { createContext, useState } from "react";
import React from "react";

const userContext = createContext();

export function UserProvider({ children }) {
    const [theme, setTheme] = useState(false);
    
    return(
        <userContext.Provider value={{theme, setTheme}}>
            {children}
        </userContext.Provider>
    );
}


   


export default userContext;