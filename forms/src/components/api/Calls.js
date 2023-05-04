import React from "react";

export default function Calls() {
    const [ starWarsData,setStarWarsData] = React.useState({})
    const [count,setCount] = React.useState(0)

    React.useEffect(function() {
        
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))

    }, [count])

     return (
        <div>
           <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get new character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
    )
}