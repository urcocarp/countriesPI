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

        case FILTER:
            return {...state, filterCountries: action.payload}
         
        case ORDER:
            const countryByName= [...state.countries]
               console.log(countryByName)  
            return {
                ...state,
                countries: countryByName.sort((a,b)=>{
                    if(action.payload==="Ascendent"){
                        return b.name.localcompare(a.name)
                    }else if(action.payload==="Descendent"){
                        return a.name===localcompare(b.name)
                    }
                    console.log(countryByName)
                return countryByName;
                })
            }

        default:
            return{...state};
  
        }

        
    };
    
    



export default rootReducer;


