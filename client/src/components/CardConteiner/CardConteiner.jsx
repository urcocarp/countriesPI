import style from './CardConteiner.module.css'
import Card from '../Card/Card'
import { useSelector } from "react-redux"



const CardConteiner = ()=>{


  const users = useSelector((state) => state.country);


    return (
        
        <div className={style.conteiner}>
          {users.map(user=>{
            return <Card
              key={user.id}
              id={user.id}
              name={user.name}
              capital={user.capital}
              flags={user.flags}
              population={user.population}
            />
          })}

        </div>
    )

}

export default CardConteiner