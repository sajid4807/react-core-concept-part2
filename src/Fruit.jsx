// import { use } from "react"

import { use } from "react"

// export default function Fruit ({fruitFetch}){
//     const fruit = use(fruitFetch)
//     return (
//         <div>
//             <h3>Fruit:{fruit.length}</h3>
//         </div>
//     )
// }


export default function Fruit ({fruitPromise}){
    const fruit = use(fruitPromise)

    return (
        <div className="card">
            <h3>Fruit: {fruit.length}</h3>
        </div>
    )
}