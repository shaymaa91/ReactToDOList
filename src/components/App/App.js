import './App.css';
import List from './../List/List';
import { useState, useRef, useEffect } from 'react';
import uuidv4 from '../../../node_modules/uuid/dist/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todo';

function App() {
  const [todos, setToDo] = useState([]);
  const inputRef = useRef();
  //reload the todos values from the local storage once on refresh
  useEffect(() => {
    const getFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getFromLocalStorage) setToDo(getFromLocalStorage);
  }, [])

  //each time the todos state value is change then save it in the localstorage
  //use useEffect hook
  useEffect(() => {
    const toDoOnLocalStorage = JSON.stringify(todos);
    localStorage.setItem(LOCAL_STORAGE_KEY, toDoOnLocalStorage);
  }, [todos]);

  //get the new value from the input add it to the todos 
  const handleAddToDo = () => {
    const todoDesc = inputRef.current.value;
    setToDo([...todos, { id: uuidv4(), todoDesc: todoDesc, comp: false }]);
    inputRef.current.value = null;
  }

  const handleToggleCheckbox = (id) => {
    let newToDo = [...todos];
    const checkedTodo = newToDo.find(todo => todo.id == id);
    checkedTodo.comp = !checkedTodo.comp;
    setToDo(newToDo);
  }

  const clearComp=()=>{
    let newTodo = [...todos];
    newTodo=newTodo.filter(todo=>!todo.comp);
    setToDo(newTodo);
  }

  return (
    <div className="App">
      <header className="App-header">
        To Do List APP
        <div className=''>
          <List todos={todos} handleToggleCheckbox={handleToggleCheckbox} />
        </div>

        <div className='d-flex justify-content'>

          <input ref={inputRef} type='text' className='rounded' />

          <button onClick={handleAddToDo} className='btn btn-info m-1'>Add</button>
          <button onClick={clearComp} className='btn btn-info m-1'>Clear completed tasks</button>

        </div>
        <div>
          {todos.filter(todo => !todo.comp).length} left to do.
        </div>



      </header>
    </div>
  );
}

export default App;
