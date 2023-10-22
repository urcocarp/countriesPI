import {  GET_COUNTRIES, GET_ID, STATE_PAIS,FILTER, ORDER } from "./Actions";


const initialState={
    countries:[],
    country:{},
    getDetail:[],
    filterCountries:[],
    orderCountries: [],
    
}


const rootReducer =(state=initialState,action)=>{
    switch(action.type){
        case GET_COUNTRIES :
            return {...state, countries: action.payload}


        case GET_ID:
            return {...state, getDetail:action.payload}
        
        case STATE_PAIS:
            return {...state, country:action.payload}

        case ORDER:
            console.log(action.payload, "en order")
            return {...state,orderCountries : action.payload}
         
        case FILTER:
            const countryByName= action.payload
         
          
            return {
                ...state,
                countries: countryByName
            }

        default:
            return{...state};
  
        }

        
    };
    
    



export default rootReducer;


