import './List.css'

const List =({texto})=>{
    return (<>
      <div className='conten-tarea'>
      <i className="fa-solid fa-trash"></i>
         <span className='conten-tarea-text'> {texto}
         </span>
         <i className="fa-regular fa-circle-check"></i>
      </div>
    
    </>)
}

export default List