import { useState } from "react"

export default function Bowler (){
    const [ball,setBall] = useState(0)
    const [no, setNo] = useState(0)
    const [totla,setTotal] = useState(0)
    const handleBallAdd = () =>{
        const totalBa = totla +1
        const addBall = ball + 1
        setTotal(totalBa)
        setBall(addBall)
    }
    const handleNoBall =()=>{
        const totalBa = totla +1
        const noBall = no 
        setNo(noBall)
        setTotal(totalBa)
        alert('i will kill you')
    }
    const handlerWideBall = () =>{
        const totalBa = totla +1
        alert('what happen')
        const wideBall = ball
        setTotal(totalBa)
        setBall(wideBall)   
    }
    return (
        <div>
            <h3>Ball: {ball} </h3>
            <h2>Total Ball : {totla}</h2>
            {
                ball >= 6 ? <h2>finish a over</h2>: <p>continue over</p>
            }
            {/* {
                no <=1 ? <p>i will kill you</p>: ""
            } */}
            <button onClick={handleBallAdd}>add</button>
            <button onClick={handleNoBall}>No Ball</button>
            <button onClick={handlerWideBall}> wide ball</button>
        </div>
    )
}