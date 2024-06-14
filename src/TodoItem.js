import React from 'react';

const TodoItem = ({ task, deleteTodo, toggleCompletion }) => {
  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
        onClick={() => toggleCompletion(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTodo(task.id)}>消去</button>
    </li>
  );
};

export default TodoItem;
