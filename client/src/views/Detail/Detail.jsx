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
    console.log(countries.nombre)




    useEffect(() => {

        console.log("hola")
        dispatch(getPais(id));

           return()=>{
            dispatch(statePais())
           }

    }, [dispatch, id]);

    return (
        <div className={style.detail}>

            <img src={countries.flags} />
            <p>pais:{countries.name}</p>
            <p>id:{countries.id}</p>
            <p>continente:{countries.continente}</p>
            <p>capital:{countries.capital}</p>
            <p>subregion:{countries.subregion}</p>
            <p>area:{countries.area}</p>
            <p>poblacion:{countries.population}</p>




        </div>
    )

}

export default Detail;