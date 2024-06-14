import React from 'react';
import TodoItem from './TodoItem'; // `TodoItem` コンポーネントが同じディレクトリにあると仮定

const TodoList = ({ tasks, deleteTodo, toggleCompletion }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          deleteTodo={deleteTodo} 
          toggleCompletion={toggleCompletion} 
        />
      ))}
    </ul>
  );
};

export default TodoList;



