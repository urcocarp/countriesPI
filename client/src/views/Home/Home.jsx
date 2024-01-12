import CardConteiner from "../../components/CardConteiner/CardConteiner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry,orderContinent,Poulation,orderAZ,activity,actividadPaises } from "../../Redux/Actions";
import style from "./Home.module.css"




const Home = ()=>{
    
    const dispatch = useDispatch()
    const actividades =useSelector(state=>state.Activity)
    const Paises=useSelector(state=>state.countries)

    
    const[actualPage,setActualpage]= useState(1)
    const [countriesxpage,setCountriesxpage]=useState(10)
    const indiceultimocountrie = actualPage * countriesxpage /// 1 * 15  = 15
    const indiceprimercountrie = indiceultimocountrie -countriesxpage///15-1
    const paisesactuales = Paises.slice(indiceprimercountrie,indiceultimocountrie)
    const paginado = (actualPage)=>{
        setActualpage(actualPage) 
      }
    const resetpagina = ()=>setActualpage(1)
    const paginaanterior =()=>{ actualPage>1 ?  setActualpage(actualPage-1): alert("no se puede retroceder")}

                            
                                
    const proximapagina =(e)=>{ actualPage<e.target.value?  setActualpage(actualPage+1): alert("no hay mas paginas")}

    useEffect(()=>{   //se ejecuta antes de que se monte el componente o que inicializa la pag
        dispatch(getCountry())
        dispatch(activity())
    
    },[])


    const filterbyContinent =(event)=>{

        event.preventDefault()
        const continent= event.target.value
        dispatch (orderContinent(continent))
        setActualpage(1)
       
     }
     const orderPopulation= (event)=>{

        
        event.preventDefault()
        const population= event.target.value
        dispatch(Poulation(population))
        
        
    }
    const orderPaisAlfa=(event)=>{
         
        event.preventDefault()
        const orderAlafabetic = event.target.value
        dispatch(orderAZ(orderAlafabetic))
        // console.log("name")

    }
    const actPaises= (event)=>{

        event.preventDefault()
        const filterActivities = event.target.value
        dispatch(actividadPaises(filterActivities))
    }
    const resset =(event)=>{
        event.preventDefault()
        dispatch(getCountry())

    }
 
    
 

    return (
        
       <div className={style.conteiner} >

         <div className={style.select} >
             <h3 className={style.number}>{actualPage}</h3>
            <select onChange={filterbyContinent} className={style.filterContinent}>
            <option value="default">Continente</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Europe">Europa</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Oceania">Oceania</option> 

            </select>

            <select className={style.alfabetic} onChange={orderPaisAlfa} >
            <option>order alfabetico</option>
            <option value= "none">None</option>
            <option value= "A-Z">A-Z</option>
            <option value= "Z-A">Z-A</option>

            </select>

            <select onChange={orderPopulation} className={style.population}>
            <option value="default">Population</option>
            <option value= "Ascendent">Ascendent</option>
            <option valeue= "Descendent">Descendent</option>
            </select>
            
            <select className={style.activity}onChange={actPaises}>
            <option>Order activity </option>
            <option value="none">none</option>
            {actividades.map((name,key)=>
              <option value= {name} key={key} >{name}</option>
              )}
            </select>

              <button onClick={resset}>Resset</button>


            </div>

        

            

          <CardConteiner 
          actualPage={actualPage}
          total={Paises.length}
          countriesxpage={countriesxpage} paginado={paginado}
          prev={paginaanterior}
          next={proximapagina}
          paisesactuales={paisesactuales}
          />


        
        </div>
        

        

    )
}


export default Home;