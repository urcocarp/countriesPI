import axios from "axios";



export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_ID = "GET_ID"
export const STATE_PAIS = "STATE_PAIS"
export const ORDER = "OREDER"
export const FILTER = "FILTER"


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
   return function(dispatch){

       console.log(continent, "en action")
       dispatch({type:ORDER, payload:continent})

   }
     
    }



