import CardConteiner from "../../components/CardConteiner/CardConteiner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../Redux/Actions";



const Home = ()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountry())
    },[])


    return (
        <>
        
        <h1>esto es home</h1>
          <CardConteiner/>
        
        </>
        

        

    )
}


export default Home;