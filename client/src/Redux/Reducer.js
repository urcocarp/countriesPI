import {  GET_COUNTRIES, GET_ID, STATE_PAIS,FILTER, ORDER, CREATEACTIVITIES } from "./Actions";


const initialState={
    countries:[],
    country:{},
    getDetail:[],
    filterCountries:[],
    orderCountries: [],
    countries2:[],
 
}


const rootReducer =(state=initialState,action)=>{
    switch(action.type){
        case GET_COUNTRIES :
            return {...state, countries: action.payload, countries2: action.payload, 
               }

        

        case GET_ID:
            return {...state, getDetail:action.payload}
        
        case STATE_PAIS:
            return {...state, country:action.payload}

        case ORDER:
            console.log(action.payload, "en order")

            const result= state.countries2.filter(i=> i.continents===action.payload)

            console.log(result)

            return {...state, countries:result }


         
        case FILTER:
            const countryByName= action.payload
         
          
            return {
                ...state,
                countries: countryByName
            }
        case CREATEACTIVITIES:
            return{...state}

        default:
            return{...state};
  
        }

        
    };
    
    



export default rootReducer;


