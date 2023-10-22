import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountriesByname } from "../../Redux/Actions";
import { useState } from "react";


const NavBar =()=>{
    const country = useSelector((state)=>state.countries)
   
    const [input, setInput] = useState("");


const HandlerInput=(event)=>{
    const value = event.target.value
    console.log(value)
    setInput(value)
    
}

const dispatch= useDispatch()

const searchHandler=(event)=>{

    event.preventDefault
    dispatch(getCountriesByname(input))
    
}



    return (

        <div className={style.main}>
           <Link to= '/home'>Home</Link>
           <Link to= '/form'>Form</Link>
           <input 
           type= "text"
           className={style.imput}
           onChange={HandlerInput}
           onSubmit={searchHandler}
           placeholder={`Search ${country.length} countries`}

           ></input>
           <button className={style.button} onClick={searchHandler}>search</button>
        </div>
    )
    
};
export default NavBar;
