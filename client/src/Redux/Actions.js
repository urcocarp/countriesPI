import axios from "axios";

 

export const GET_COUNTRIES= "GET_COUNTRIES"
export const GET_ID= "GET_ID"

export const getCountry=()=>{
    return async function(dispatch){
        const dataCountry = await axios.get("http://localhost:3001/countries")

        const countries= dataCountry.data

        dispatch({type:GET_COUNTRIES, payload: countries})
    };
};



export const getPais =(id)=>{
    return async function(dispatch){
        const country=await axios.get(`http://localhost:3001/countries/${id}`);

        const countryId = country.data;

        dispatch({type:GET_ID, payload: countryId})

    }
}