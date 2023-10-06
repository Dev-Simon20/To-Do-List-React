
import { useState } from 'react'
import './Boton.css'

const Boton=(props)=>{
     const {modify}=props
    const valorInicial={
        colorPri:'#fff',
        colorSec:'#000'
    }
    const [color,setColor]=useState(valorInicial)
    const change=()=>{
         if (color.colorPri=='#fff') {
            setColor({
                colorPri:'#000',
                colorSec:'#fff'
            })
         }
         else{
            setColor({
                    colorPri:'#fff',
                    colorSec:'#000'
                })
         }
        modify(color.colorPri)
    }


    return (
        <div className="darkLight" style={{background:color.colorPri}} onClick={change}>
            <i  className="fa-solid fa-power-off turn"   style={{color:color.colorSec}} ></i>
        </div>
    )
}

export default Boton