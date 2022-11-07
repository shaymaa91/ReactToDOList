import React from 'react'

export default function ToDo({todo ,handleToggleCheckbox}) {

    const toggelCheck=()=>{
        
        handleToggleCheckbox(todo.id);
        

    }

    return (
        <>
            <div className='d-flex'>
                <input onChange={toggelCheck} type='checkbox' checked={todo.comp} />
                <span>{todo.todoDesc}</span>
            </div>
        </>
    )
}
