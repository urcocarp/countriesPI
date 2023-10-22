import style from './Card.module.css'
import {Link} from 'react-router-dom'
import { getPais } from '../../Redux/Actions'

const Card =(props)=>{

  

    return (
        <Link to={`/countries/${props.id}`}>
        
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