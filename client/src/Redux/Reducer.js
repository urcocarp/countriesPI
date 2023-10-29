import {  GET_COUNTRIES,
    GET_ID,
    STATE_PAIS,
    FILTER,
    ORDER,
    CREATEACTIVITIES,
    POPULATION,
    ORDERAZ, 
    ACTIVITY,
    ACTIVIDAD} from "./Actions";


const initialState={
    countries:[],
    country:{},
    getDetail:[],
    filterCountries:[],
    orderCountries: [],
    countries2:[],
    orderP:[],
    Activity:[],

 
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
            // console.log(action.payload, "en order")

            const result= state.countries2.filter(i=> i.continents===action.payload)

            console.log(result)

            return {...state, countries: action.payload=== "default" ? state.countries2 : result }


         
        case FILTER:
            const countryByName= action.payload
         
          
            return {
                ...state,
                countries: countryByName
            }

        case CREATEACTIVITIES:
            return{...state}

        case POPULATION: 
        // console.log("en order")

        const Ascendent=[].concat(state.countries).sort((a,b)=>a.population-b.population)
        const Descendent= [].concat(state.countries).sort((a,b)=>b.population-a.population)

        return {
            ...state,
            countries: action.payload=== "Ascendent" ? Ascendent : action.payload==="Descendent" ? Descendent : state.countries2
            
         }

         case ORDERAZ:
                console.log(action.payload, "payload")
         const orderAscendent=[].concat(state.countries).sort((a,b)=>a.name > b.name ? 1:-1)
         const orderDescendent=[].concat(state.countries).sort((a,b)=>a.name < b.name ? 1:-1)
         console.log(orderAscendent,orderDescendent)
         return {

            ...state,
            countries:action.payload=== "A-Z"? orderAscendent: action.payload==="Z-A"? orderDescendent: state.countries
         }

          case ACTIVITY:

          const activitiesName = action.payload.map(i=>i.name) 
            return{...state,
                Activity: activitiesName
            }

         case ACTIVIDAD: 

         const paisesActividades= state.countries2.filter(i=>i.Activities.filter(actividad=>actividad.name==action.payload).length)
        
         return{...state,
          countries: action.payload==="none" ? state.countries2 : paisesActividades
        }
         
            

    

        default:
            return{...state};
  
        }
    

        
    };
    
    



export default rootReducer;


