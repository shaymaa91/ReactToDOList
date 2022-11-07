import React from 'react'
import ToDo from './../ToDo/ToDo';

export default function List({todos,handleToggleCheckbox}) {
    
  return (
    <>
        <div>
            {todos.map(todo=> <ToDo key={todo.id} todo={todo} handleToggleCheckbox={handleToggleCheckbox}/>)}
        </div>
        
       
    </>
  )
}
