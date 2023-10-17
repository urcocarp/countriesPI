import {  GET_COUNTRIES, GET_ID } from "./Actions";


const initialState={
    country:[],
}


const rootReducer =(state=initialState,action)=>{
    switch(action.type){
        case GET_COUNTRIES :
            return {...state, country: action.payload}


        case GET_ID:
            return {...state, country:action.payload}


        default:
            return{...state};
  
        }

        
    };
    
    



export default rootReducer;


