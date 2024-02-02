import { useEffect, useState } from 'react';
function Todo() {
    const [Todos, setTodos] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
    }, [])
  
    return (
      <div className='wrapper'>
          <h1 className='head_line'>Todos</h1>

            <div className="wrap_card">
          {Todos.map((todo) => {
            return(
              
                <div className='card'>
                    <p className='Big_P'>userId : {todo.userId}</p>
                    <p className='Big_P'>ID : {todo.Id}</p>
                    <p className='Large_P'>Title : {todo.title}</p>
                    <p className='Big_P'>Completed : {todo.completed}</p>
                </div>
                
            )
          })}
        </div></div>
     
    );
}
export default Todo;