// TodoList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI, selectToDos } from './todoSlice.jsx';
// import { useGetAllProducts } from './apiSlice.jsx';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectToDos);
//   const data = useGetAllProducts();
//   console.log(data);

  useEffect(() => {
    dispatch(getAPI());
  }, [dispatch]);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.status === 'loading' && <p>Loading...</p>}
      {todos.status === 'failed' && <p>Error: {todos.error}</p>}
      {todos.status === 'succeeded' && (
        <ul>
          {todos.items.map(todo => (
            <li key={todo.id}>{todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
