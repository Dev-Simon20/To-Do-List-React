import "./App.css";
import Entrada from "./Componentes/Entrada";
import List from "./Componentes/List";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Boton from "./Componentes/Boton/Boton";
function App() {
  const [texto, setText] = useState([]);
  const [colorBoton,SetColorBoton]= useState();
 
  //Funcion para Extraer los Datos del input
  const extraer = (text) => {
    const textToObject = { info: text, identifi: uuid() };
    const newText = [...texto, textToObject];
    setText(newText);
  };
  
  //Funcion para eliminar Una tarea
  const eliminar = (ident) => {
    const newText = texto.filter((valor) => valor.identifi != ident);
    setText(newText);
  };

  //Funcion para acmbiar el color del boton
  const modifyColor=(colorP)=>{
      console.log('Modificando el Body',colorP);
      document.body.style.backgroundColor = colorP;

  }
  return (
    <div className="container">
      <h1 className="container-title">To do List </h1>
      <Boton modify={modifyColor}></Boton>
      <div className="container-task">
        <Entrada extraer={extraer} />
        <div className="container-task-list">

          {/* El index es una propiedad del map y el key se tiene que pasar como parametro cuando se crean varios componentes de uno, esta es una regla de react. Ojo: La key es exclisivo para el uso de react No se debe de usar para otras cosas */}

          {texto.map((t, index) => (
            <List
              texto={t.info}
              key={index}
              id={t.identifi}
              eliminar={eliminar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
