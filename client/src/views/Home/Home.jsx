import CardConteiner from "../../components/CardConteiner/CardConteiner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountry,orderContinent } from "../../Redux/Actions";



const Home = ()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountry())
    },[])

    const filterbyContinent =(event)=>{
       event.preventDefault()
       const continent= event.target.value
       orderContinent(continent)
      
    }
    return (
        <>
        
        <h1>esto es home</h1>
          <select onChange={filterbyContinent}>
          <option>Continente</option>
          <option value="America">America</option>
          <option value="Europa">Europa</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option> 

          </select>
          <CardConteiner/>
        
        </>
        

        

    )
}


export default Home;