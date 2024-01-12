import style from "./Form.module.css"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry, createActivity } from "../../Redux/Actions";
import { useNavigation, useNavigate } from "react-router-dom"



const Form = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountry())
    
    },[])
 
 const countriesName= useSelector(state=> state.countries)


 const [form, setForm] = useState({name:"", difficulty:1, duration:"", season: "", countries:[]})
 
 const [ errors, setErrors]= useState({name:"", difficulty:1, duration:"", season: ""})
 
 const handlerChange= (event)=>{
    event.preventDefault()
    
    const {value, name}= event.target
 

    
    setForm({
        ...form,  [name]:value})

}
const handlerSelectCountry = (event) => {
    setForm({
        ...form,
        countries: [...new Set([...form.countries, event.target.value])]
    })
}       
        


const temporada= ["invierno", "primavera", "otoño", "verano"]

const validate=(form)=>{
    if(!form.name) 
    return alert("debe ingresar un nombre")

   if(form.name.length> 25){
     return alert (" el nombre de la actividad no debe superar 25 caracteres")
   }
   if (!form.duration)
   return alert("debe ingresar un valor")
  if(form.duration.length > 5 || !form.duration.includes(":"))
    return alert("franja horaria invalida")
  if(!form.season)
  return alert( "debe ingresar una estacion")
  if(!temporada.includes(form.season))
    return alert(`${form.season} no es una temporada`)
   if(!form.countries)
    return alert( "debe seleccionar un pais" )
  
   else{
       navigate("/home")
   }


}
 
 const selectForm=(event)=>{
    event.preventDefault()
    const {value, name}= event.target



 }
const navigate = useNavigate()

 const button =(event)=>{
     
   if( validate({...form})) dispatch(createActivity(form))
   
    event.preventDefault()
   
    

  

 }



    return (
        <form className={style.form}>
            <h1 className={style.formtittle}> activity</h1>
             <div className={style.formu}>

            <label>name</label>
            <input type="text" value={form.name} name="name" onChange={handlerChange}/>
            <label>difficulty</label>
            <input type="number"min={1}max={5} value={form.difficulty} name="difficulty" onChange={handlerChange}/>
            <label>duration</label>
            <input type="text" value={form.duration} name="duration" onChange={handlerChange}/>
            <label>season</label>
            <input type="text" value={form.season} name="season"onChange={handlerChange}/>

             </div>

            <select name="countries" onChange={handlerSelectCountry}className={style.select}>
                <option>selecciona un pais</option>
                {countriesName.map((i,key)=>
                <option value={i.id} >{i.name}</option>
                )}
            </select>
            {/* <button onClick={()=>console.log(form)}type="button"> ver info </button> */}
            <button type="button" onClick={button} className={style.create}>Create</button>

        </form>
    )
    }

export default Form;