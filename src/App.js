
//  import TodoForm from "./TodoForm";
// 　import TodoList from "./TodoList";

// function App() {

// /*　tasks その時のタスクリストを保持するための状態変数（管理したいデータを保持）。初めは空*/
// // /setTasks asks の状態を更新するための関数 追加とか消すのも/
// /* useState　状態変数が変更されると変わる*/

//  const addTask = (task) => {
//  setTasks([...tasks, task]);
//  };
// /*ここでタスクが追加されていく*/

//  const removeTask = (index) => {
//  const newTasks = [...tasks];
//  newTasks.splice(index, 1);
//  setTasks(newTasks);
//  };
// // /ここで消したりしていく

// return (
//   <React.Fragment>
//     <div className="App">
//       <h1>ToDoリスト</h1>
//       <h2>自分のタスクを書いてみよう</h2>
//        <TodoForm addTask={addTask} />
//       <TodoList tasks={tasks} removeTask={removeTask} /> 
//     </div>
//   </React.Fragment>
// );
// };

// export default App;


import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>ToDo List（やることリスト）</h1>
      <TodoForm addTodo={addTask} />
      <TodoList 
        tasks={tasks} 
        deleteTodo={deleteTask} 
        toggleCompletion={toggleCompletion} 
      />
    </div>
  );
}

export default App;
