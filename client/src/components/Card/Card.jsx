import style from './Card.module.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getPais } from '../../Redux/Actions'

const Card =(props)=>{

    const dispatch = useDispatch();

    const handlerPais=()=>{
        dispatch(getPais(props.id))
    }

    return (
        <Link to= {`/detail/${props.id}`} onClick={handlerPais}>
        
            <div className={style.card}>
                <img src={props.flags}/>
                <p>name:{props.name}</p>
                <p>capital:{props.capital}</p>
                <p>population:{props.population}</p>
            </div>
            
            
        </Link>
    )
}

export default Card