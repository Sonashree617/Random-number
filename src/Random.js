import {useState} from "react";
import "./style.css"; 

function RandomNumber(){
    const[number,setnum]=useState(null)
const random=()=>{
    setnum(Math.floor(Math.random()*100)+1)
}
    return(
        <div>
            <h1>Random Number</h1>
            {(number===null?<p>No number generated</p>:
            <p>{number}</p>)}
            <button onClick={random}>Generate Random number</button>
        </div>
    )

}
export default RandomNumber




















