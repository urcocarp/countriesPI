import style from './Landing.module.css'
import { Link } from 'react-router-dom';




const Landing = ()=>{
    return (
        <div>
        <h1 className={style.landing}>Hello World! You are in the country </h1>
     
        <Link to='./home' className={style.buttonlanding}>Start</Link>

        </div>
    )
}


export default Landing;