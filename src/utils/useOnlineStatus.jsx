import { useEffect, useState } from "react";

const useOnlineStatus = ( ) =>{
    const[onlineStatus,setOnlineStatus]=useState(navigator.onLine);
useEffect(() => {
    // Update network status
    const handleStatusChange = (props) => {
      console.log("props", onlineStatus);
      return props;
      
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange(setOnlineStatus));

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange(setOnlineStatus));

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
}, [onlineStatus]);


    return  onlineStatus;
}

export default useOnlineStatus;