import axios from "axios";


export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_ID = "GET_ID"
export const STATE_PAIS = "STATE_PAIS"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const CREATEACTIVITIES ="CREATEACTIVITIES"
export const POPULATION ="POPULATION "
export const ORDERAZ= "ORDERAZ"
export const ACTIVITY= "ACTIVITY"
export const ACTIVIDAD= "ACTIVIDAD"


export const getCountry = () => {
    return async function (dispatch) {
        const dataCountry = await axios.get("http://localhost:3001/countries")

        const countries = dataCountry.data

        dispatch({ type: GET_COUNTRIES, payload: countries })
    };
};



export const getPais =(id) => {
    console.log(id)
    return async function (dispatch) {
        const country = await axios.get(`http://localhost:3001/countries/${id}`);
        console.log(country)
        const countryId = country.data;

        dispatch({ type: GET_ID, payload: countryId })

    }
};

export const statePais = () => {
    return function (dispatch) {

        const state = {}
        dispatch({ type: STATE_PAIS, payload: state })

    }
};
 export const getCountriesByname =(name)=>{
    console.log(name)
    return async function (dispatch){
        const {data}=await axios.get(`http://localhost:3001/countries?nombre=${name}`)
        console.log(data)
        dispatch({type:FILTER, payload:data})
    
    }
}

export const orderContinent = (continent) => {

    console.log(continent, "en action")

   return{type:ORDER, payload:continent}
 
}
export const Poulation = (population)=>{
   console.log("poop")

   return {type:POPULATION, payload: population }
  
}
export const createActivity = (activity)=>{

    return async function (dispatch){
        const {data}=await axios.post(`http://localhost:3001/activities`, activity)
        console.log(data)
        dispatch({type:CREATEACTIVITIES, payload:data})
  }
}
export const orderAZ=(name)=>{
     console.log("orderName")
    return { type:ORDERAZ, payload:name}
    
}
export const activity =()=>{
    return async function(dispatch){
    const {data}= await axios.get(`http://localhost:3001/activities`)
    console.log("activity")
     dispatch ({type:ACTIVITY , payload: data})
}


}

export const actividadPaises=(activity)=>{

    return{ type:ACTIVIDAD, payload: activity }

}   
     
    



