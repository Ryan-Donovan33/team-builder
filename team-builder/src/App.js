import React, { useState } from 'react';
import Form from './Components/Form';

import './App.css';

function App() {
	const [ member, setMember ] = useState([]);

	const addNewMember = (info) => {
		const newMember = {
			name: info.name,
			email: info.email,
			role: info.role
		};

		const memberCollection = [ ...member, newMember ];

		setMember(memberCollection);
	};

	return (
		<div className="App">
			<h2>This is the members list</h2>
			<Form />
		</div>
	);
}

export default App;
