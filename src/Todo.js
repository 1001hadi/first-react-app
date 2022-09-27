export const Todo = (props) => {
    return(
        <div className='todo' style={{backgroundColor: props.completed ? "#80ed99" : ""}}>
            <h1>{props.name}</h1>
         <div className="btn">
            <button className="complete" onClick={()=> props.completeTodo(props.id)}>&#10003;</button>
            <button className="delete" onClick={()=> props.deleteTodo(props.id)}>X</button>
         </div>
        </div>
    )
}