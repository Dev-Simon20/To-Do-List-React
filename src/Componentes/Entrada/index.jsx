import { useEffect, useState } from 'react'
import './Inpu.css'

const Entrada =(props)=>{
    const {extraer}=props

    const [inputValue,setInputValue]=useState('');

    const changeInput=(e)=>{
        setInputValue(e.target.value);
    }
    
    /*Cuando se da click:
     1- Se envia el input value
     2- Se limpia el set Input value
     3- El input atraves del value recibe el valor del  inputvalue limpio y se borra todo en el front*/ 
    return(
        <div className='cont'>
            <label className='cont-label' htmlFor=""><h2>Ingrese la Tarea</h2></label>
            <input className='cont-input' onChange={changeInput} value={inputValue}  type="text" required/>
            <input className='cont-buton' onClick={()=>{
                extraer(inputValue)
                setInputValue('')
            }
             } type="submit" />
        </div>
    )
}

export default Entrada