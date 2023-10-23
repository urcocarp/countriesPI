import style from "./Form.module.css"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry, createActivity } from "../../Redux/Actions";




const Form = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountry())
    
    },[])
 
 const countriesName= useSelector(state=> state.countries)


 const [form, setForm] = useState({name:"", difficulty:1, duration:"", season: ""})
 
 const handlerChange= (event)=>{
    event.preventDefault()
    
    const {value, name}= event.target

   setForm({
    ...form, 
    [name]:value

   })


   

 }
 const selectForm=(event)=>{
    event.preventDefault()
    const {value, name}= event.target



 }

 const button =(event)=>{
    event.preventDefault()
    dispatch(createActivity(form))
    
 }



    return (
        <form className={style.form}>
            <h1>esta es la vista de Form</h1>

            <label>name</label>
            <input type="text" value={form.name} name="name" onChange={handlerChange}/>
            <label>difficulty</label>
            <input type="number"min={1}max={5} value={form.difficulty} name="difficulty" onChange={handlerChange}/>
            <label>duration</label>
            <input type="text" value={form.duration} name="duration" onChange={handlerChange}/>
            <label>season</label>
            <input type="text" value={form.season} name="season"onChange={handlerChange}/>

            <select name="countries" onChange={handlerChange}>
                <option>selecciona un pais</option>
                {countriesName.map((i,key)=>
                <option value={i.id} >{i.name}</option>
                )}
            </select>

            <button type="button" onClick={button}>Create</button>

        </form>
    )
    }

export default Form;