import './App.css'
import Entrada from './Componentes/Entrada'
import List from './Componentes/List'
import { useState } from 'react'
function App() {
  
   const [texto,setText]=useState([]); 
   
   const extraer=(text)=>{
    const newText=[...texto,text]
       setText(newText);
   }

  return (
    <div className='container'>
      <h1 className='container-title'>To do List  </h1>
       <div className='container-task'>
       <Entrada extraer={extraer}/>
       <div className='container-task-list'>
        {/* El index es una propiedad del map y el key se tiene que pasar como parametro cuando se crean varios componentes de uno */}
         {texto.map((t,index)=><List texto={t} key={index} />
         )}
        </div>
       </div>
    </div>
  )
}

export default App
