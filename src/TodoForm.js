// import React, { useState } from 'react';

//  const TodoForm = ({ addTask }) => {
//    const [input, setInput] = useState('');

//    const handleInputChange = (e) => {
//      setInput(e.target.value);
//    };

//    const handleSubmit = (e) => {
//      e.preventDefault();
//     if (input.trim()) {
//        addTask(input);
//        setInput('');
//      }
//    };

//    return (
//      <form onSubmit={handleSubmit}>
//        <input
//          type="text"
//          value={input}
//          aria-label="タスク名"
//          placeholder="タスクを入力"
//          onChange={handleInputChange}
//        />
//        <button type="submit">追加</button>
//      </form>
//    );
//  };

// export default TodoForm;


import React, { useState } from 'react';
// Reactのコンポーネントを作成してそのコンポーネントに状態を持たせるための準備


const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (inputValue.trim() === '') return;
    const trimmedInput = inputValue.trim();
    if (trimmedInput === '') {
        alert('空白では追加できません');
        return;
      }
      const myTasks = addTask('Buy groceries');
      console.log(myTasks);  // 出力: ['Buy groceries']
            
    addTodo(inputValue);  
    setInputValue('');
  };
// 新しくリストを追加する

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="タスク記入" 
      />
      <button type="submit">追加</button>
    </form>
  );
};
// こっちで表示させる

export default TodoForm;
