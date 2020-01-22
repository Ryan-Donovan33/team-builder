import React, { useState } from 'react';
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
			<header className="App-header" />
			<h2>This is the members list</h2>
		</div>
	);
}

export default App;
