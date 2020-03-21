import React from 'react';
import Navbar from './Components/Navbar';
import { Input, RouteContext } from './Components/Input';
import Mapv2 from './Components/Mapv2';

function App() {
	return (
		<RouteContext.Provider value={null}>
			<div>
				<Navbar />
				<Input />
				<Mapv2 />
			</div>
		</RouteContext.Provider>
	);
}

export default App;
