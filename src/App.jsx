import './App.css'
import Entrada from './Componentes/Entrada'
import List from './Componentes/List'
import { useState } from 'react'
import {v4 as uuid} from'uuid'
function App() {
  
   const [texto,setText]=useState([]); 
   
   const extraer=(text)=>{
     const textToObject={info:text,identifi:uuid()}
    const newText=[...texto,textToObject]
    setText(newText);

    
   }

   const eliminar=(ident)=>{
        const newText=texto.filter((valor)=>valor.identifi!=ident);
         setText(newText)
   }

  return (
    <div className='container'>
      <h1 className='container-title'>To do List  </h1>
       <div className='container-task'>
       <Entrada extraer={extraer}/>
       <div className='container-task-list'>
        {/* El index es una propiedad del map y el key se tiene que pasar como parametro cuando se crean varios componentes de uno */}
         {texto.map((t,index)=><List texto={t.info} key={index} id={t.identifi} eliminar={eliminar}/>
         )}
        </div>
       </div>
    </div>
  )
}

export default App
