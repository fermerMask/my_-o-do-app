import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
