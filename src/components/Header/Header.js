import React from 'react';
import style from './Header.module.scss';
import classNames from 'classnames/bind';


export default function Header() {
	let bindTest = classNames.bind(style);
	let test = bindTest({
		'root': true,
	})
	return (
		<div className={test} >Todo List</div>
	)
}
