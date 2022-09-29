import React, { useState } from 'react';
import { v4 } from 'uuid';
import style from './AddTodo.module.scss';

export default function AddTodo({ todo, setTodo }) {
	const [input, setInput] = useState('');
	function saveTodo() {
		setTodo([...todo, {
			id: v4(),
			title: input,
			status: true
		}])
		setInput('')
	}
	function handerOnChange(event) {
		setInput(event.target.value);
	}
	return (
		<div className={style['add-todo']}>
			<input
				placeholder='Add todo'
				value={input}
				onChange={handerOnChange}
				className={style['add-todo__input']}
			/>
			<button onClick={saveTodo} className={style['add-todo__button']}>Add todo</button>
		</div>
	)
}
