import style from './CardConteiner.module.css'
import Card from '../Card/Card'
import { useSelector } from "react-redux"
import Paginado from '../Paginado/Paginado'



const CardConteiner = ({actualPage,total,paginaanterior,proximapagina,paisesactuales,countriesxpage,paginado,prev,next})=>{


  const users = useSelector((state) => state.countries);


    return (
        
        <div className={style.conteiner}>
          <h1 className={style.tittle}>Home</h1>
          <hr></hr>
          <div className={style.paisesactuales}>
          {paisesactuales.map(user=>{
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
          <Paginado 
                 actualPage={actualPage}
                 total={total}
                 countriesxpage={countriesxpage} paginado={paginado}
                 prev={prev}
                 next={next}
                 />



        </div>
    )

}

export default CardConteiner