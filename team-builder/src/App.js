import React from 'react';
import Form from './Components/Form/Form.js';

import './App.scss';

function App() {
	// const [ member, setMember ] = useState([
	// 	{
	// 		id: 1,
	// 		name: 'Ryan',
	// 		email: 'rdonovan@yahoo.com',
	// 		role: 'Front-End Developer'
	// 	}
	// ]);

	return (
		<div className="App">
			<h2>This is the members list</h2>
			<Form />
		</div>
	);
}

export default App;
