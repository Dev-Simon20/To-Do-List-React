import './List.css'
import { useState } from 'react';

const List =(props)=>{
   const {texto,id}=props;
   const {eliminar}=props
   const[color,setColor]=useState('white');

   const cambiarColor=()=>{
      if (color=='white') {
         setColor('green')
      }
      else{
        setColor('white')
      }
   }
    return (<>
      <div className='conten-tarea'>
      <i className="fa-solid fa-trash trash" id={id} onClick={(e)=>eliminar(e.target.id)}></i>
         <span className='conten-tarea-text'> {texto}
         </span>
         <i className="fa-regular fa-circle-check"  onClick={()=>cambiarColor()} style={{color:color}}></i>
      </div>
    
    </>)
}

export default List