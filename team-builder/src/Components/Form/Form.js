import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.js';
import './Form.scss';

const Form = () => {
	const [ users, setUsers ] = useState([]);
	const [ name, setName ] = useState([]);
	const [ email, setEmail ] = useState([]);
	const [ role, setRole ] = useState([]);
	const [ cohort, setCohort ] = useState([]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const user = { name: name, cohort: cohort, email: email, role: role };
		let updatedUsers = [ ...users, user ];
		let newUsers = JSON.stringify(updatedUsers);
		localStorage.setItem('users', newUsers);
		setUsers(updatedUsers);
	};
	console.log(users, 'this is the state');

	useEffect(() => {
		const users = localStorage.getItem('users');
		if (users) {
			setUsers(JSON.parse(users));
		}
	}, []);

	// const onClickHandler = (e) => {
	// 	e.preventDefault();
	// };

	return (
		<div className="wrapper">
			<form className="addForm" onSubmit={(e) => onSubmitHandler(e)}>
				<div className="inputs">
					<input
						placeholder="name"
						name="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						placeholder="cohort"
						name="cohort"
						type="text"
						value={cohort}
						onChange={(e) => setCohort(e.target.value)}
					/>
					<input
						placeholder="email"
						name="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="role"
						name="role"
						type="text"
						value={role}
						onChange={(e) => setRole(e.target.value)}
					/>
				</div>
				<button type="submit"> Add Team Member</button>
			</form>
			<div className="team-members">
				{users.map((el, idx) => {
					return <Card key={idx} el={el} />;
				})}
			</div>
			<button
				onClick={() => {
					window.localStorage.clear();
					setUsers([]);
				}}
			>
				Clear Data
			</button>
		</div>
	);
};

export default Form;
