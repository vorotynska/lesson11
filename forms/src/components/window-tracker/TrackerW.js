import React from "react"
import "./tracker.css"
import WindowTracker from "./WindowTracker"

export default function TrackerW() {
    
const [show, setShow] = React.useState(true)

function toggle() {
    setShow(prevShow => !prevShow)
}
    return (
        <div classname="container">
        <button>
           Togle WindowTracker
        </button>
       {show && <WindowTracker />}
        </div>
    )
}