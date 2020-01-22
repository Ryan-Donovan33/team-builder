import React, { useState } from 'react';

const Form = (props) => {
	const [ users, setUsers ] = useState([]);
	const [ name, setName ] = useState([]);
	const [ email, setEmail ] = useState([]);
	const [ role, setRole ] = useState([]);
	const [ cohort, setCohort ] = useState([]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const user = { name: name, cohort: cohort, email: email, role: role };
		setUsers([ ...users, user ]);
		localStorage.setItem({ users: users });
	};
	console.log(users, 'this is the state');

	// const onClickHandler = (e) => {
	// 	e.preventDefault();
	// 	const user = {name: name, cohort: cohort, email: email, role: role}
	// };
	return (
		<div>
			<form onSubmit={(e) => onSubmitHandler(e)}>
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

				<button type="submit"> Add Team Member</button>
			</form>
		</div>
	);
};

export default Form;
