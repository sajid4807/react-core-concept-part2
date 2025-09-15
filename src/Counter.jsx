import { useState } from "react"

export default function Counter (){
    const design ={
        padding:'20px',
        border:'2px solid dodgerblue'
    }
    const [count,setCounter] = useState(0)
    const handleAdd =()=>{
        const newCount = count + 1
        setCounter(newCount)
    } 

    return (
        <div style={design}>
            <h2>count:{count} </h2>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}