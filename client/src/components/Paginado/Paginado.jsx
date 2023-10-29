import style from "./Paginado.module.css"



export default function Paginado ({actualPage,total,countriesxpage,paginado,prev,next}){
       
    const pagenumber = []
    for (let i=0;i<Math.ceil(total/countriesxpage);i++){
        pagenumber.push(i+1)
    } 
    // console.log(total)  
    // console.log(countriesxpage)
    // console.log(pagenumber)
    
    return (
        <div className={style.paginado}>
                <span style={{color:'white'}}>Hola esta en la pagina {actualPage}</span>
               <ul >
                    <button className={style.button} onClick={prev}> ← </button>
                   {pagenumber && pagenumber.map((i,key)=>
                      <button className={style.button} key={key} onClick={()=>paginado(i)}>{i}</button>
                   )}
                   <button className={style.button} value={pagenumber.length} onClick={next}> → </button>
               </ul>
        </div>
    )
}