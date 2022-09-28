import React, { useState } from 'react';
import style from './TodoList.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import classNames from 'classnames/bind';

export default function TodoList({ todo, setTodo }) {
	const [edit, setEdit] = useState(null);
	const [value, setValue] = useState('')

	function removeTodo(id) {
		let newTodo = [...todo].filter(item => item.id !== id);
		setTodo(newTodo)
	}
	function editTodo(id, title) {
		setEdit(id);
		setValue(title)
	}
	function statusTodo(id) {
		let newTodo = [...todo].filter(item => {
			if (item.id === id) {
				item.status = !item.status;
			}
			return item
		});
		setTodo(newTodo);
	}
	function saveTodo(id) {
		let newTodo = [...todo].map(item => {
			if (item.id === id) {
				item.title = value;
			}
			return item;
		})
		setTodo(newTodo);
		setEdit(null);
	}
	const bindClass = classNames.bind(style);
	const bindClassItem = bindClass({
		'todo-list__item': true,
		'edit': Boolean(edit)
	})
	return (
		<ul className={style['todo-list']}>
			{todo.map(item => (
				<li key={item.id} className={bindClassItem}>
					{
						edit === item.id ?
							<div className={style['todo-list-edit__input']}>
								<input
									value={value}
									onChange={event => setValue(event.target.value)}
								/>
							</div>
							:
							<div className={style['todo-list__title']}>{item.title}</div>
					}
					{
						edit === item.id ?
							<div className={style['todo-list-edit__button']}>
								<button onClick={() => saveTodo(item.id)}>Save</button>
							</div>
							:
							<div className={style['todo-list__actions']}>
								<div
									className={style['todo-list__action']}
									onClick={() => statusTodo(item.id)}
								>
									<AiOutlineCheckCircle />
								</div>
								<div
									onClick={() => editTodo(item.id, item.title)}
									className={style['todo-list__action']}
								>
									<AiOutlineEdit />
								</div>
								<div
									className={style['todo-list__action']}
									onClick={() => removeTodo(item.id)}
								>
									<IoCloseOutline />
								</div>
							</div>
					}
				</li>
			))}
		</ul>
	)
}
