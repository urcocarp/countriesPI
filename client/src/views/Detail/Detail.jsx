import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./Detail.module.css"
import { getPais } from "../../Redux/Actions";
import { statePais } from "../../Redux/Actions";



const Detail = () => {
    const { id } = useParams();
    console.log(id)

    const dispatch = useDispatch();
    const countries = useSelector(state => state.getDetail)
    // console.log(countries.nombre)




    useEffect(() => {

      
        dispatch(getPais(id));

           return()=>{
            dispatch(statePais())
           }

    }, [dispatch, id]);

    return (
        <div className={style.principal}>
         <div className={style.detail}>
            <img className={style.bandera}src={countries.flags} />
            <p>pais:{countries.name}</p>
            <p>id:{countries.id}</p>
            <p>continents:{countries.continents}</p>
            <p>capital:{countries.capital}</p>
            <p>subregion:{countries.subregion}</p>
            <p>area:{countries.area}</p>
            <p>poblacion:{countries.population}</p>
         </div>
        <hr></hr>
          <div className={style.detail} >
                {countries?.Activities?.map((actividad, key)=>
                 <div key={key} >
                       
                     <p>name: {actividad.name}</p>
                     <p>difficulty: {actividad.difficulty}</p>
                     <p>duration: {actividad.duration}</p>
                     <p>season:{actividad.season}</p>

                 </div>
                )}
            </div>

         </div>

                )
            }
    
    

            
export default Detail;