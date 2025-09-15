import { useEffect, useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)
    const [fours, setFours] = useState(0)
    const handleSingle = () =>{
        const updateRuns = runs + 1
        setRuns(updateRuns)
    }
    const handleFour = () =>{
        const updateRuns = runs + 4
        const updateFours = fours + 1
        setFours(updateFours)
        setRuns(updateRuns)
    }
    const handleSix = () =>{
        const updateRuns = runs + 6
        const updateSixes = sixes +1
        setSixes(updateSixes)
        setRuns(updateRuns)
    }
    return (
        <div>
            <h4>player bangla batsman</h4>
            <p><small>Sixes: {sixes}</small></p>
            <p><small>Fours: {fours}</small></p>
            {/* {
                runs >= 50 && runs < 100 && <p>He scored a half-century</p>
                // runs >= 50 && <p>he scored 50</p>
            } */}
            {
                runs >= 100 ? <p>He scored a century</p>: runs >= 50 ? <p>He scored a half-century</p> : <p></p>
            }

            <h3>runs: {runs} </h3>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}