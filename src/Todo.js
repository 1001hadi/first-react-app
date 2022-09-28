export const Todo = ({ completed, name, id, completeTodo, deleteTodo}) => {
    return(
        <div className='todo' style={{backgroundColor: completed ? "#80ed99" : ""}}>
         <h1>{name}</h1>
         <div className="btn">
            <button className="complete" onClick={()=> completeTodo(id)}>&#10003;</button>
            <button className="delete" onClick={()=> deleteTodo(id)}>X</button>
         </div>
        </div>
    )
}