import React from "react";
import "./tracker.css"

export default function WindowTracker() {
  
   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

   React.useEffect(() => {
        function watchWidth(){
        setWindowWidth(window.innerWidth)
       }
       window.addEventListener("resize",watchWidth)
       return function() {

       }
   }, [])

  return(
    <div>
      <h1>Window width: {windowWidth}</h1>
     
    </div>

  )
}