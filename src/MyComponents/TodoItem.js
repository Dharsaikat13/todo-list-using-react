import React from 'react'
import '../App.css'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className='bk'>
           <h4>{todo.title}</h4><br/>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger bt" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
