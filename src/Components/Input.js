import React, {useState, useRef} from "react";
import APICaller from "./APICaller";

const Input = () => {
    const [searchParam, setSearchParam] = useState("");
    const [setSecond, setSecondArray] = useState("djent");

    const handleChange = (event) => {
        event.preventDefault();
        const typeIt = (event.target.value);
        setSearchParam(typeIt);
    };
    
    const funcTest = (event) => {
        event.preventDefault();
        setSecondArray(searchParam);
        console.log(searchParam);
    } 
   
    return (
    <div className="centered">
        <form onSubmit={funcTest}>
            <input type="text" onChange={handleChange}></input>
            <button type="submit">Search</button>
            <APICaller linkTo={setSecond}></APICaller>
        </form>
    </div>
    )
}

export default Input;