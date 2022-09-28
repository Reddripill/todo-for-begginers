import './App.scss';
import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
	const [todo, setTodo] = useState([])

	return (
		<div className="todo-app">
			<Header />
			<div className='todo-app__container'>
				<AddTodo todo={todo} setTodo={setTodo} />
				<TodoList todo={todo} setTodo={setTodo} />
			</div>
		</div>
	);
}

export default App;
