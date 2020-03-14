// import MapboxMap from './Components/MapboxMap';
import Mapv2 from './Components/Mapv2';
import { UserLogin } from './Components/UserLogin';
import React from 'react';

import Navbar from './Components/Navbar';
import Input from './Components/Input';
function App() {
	return (
		<div>
			<Navbar />
			<Input />

			<p> Riders on the storm </p>
			<UserLogin className='col-3' />
			{/* <MapboxMap /> */}
			<Mapv2 />
		</div>
	);
}

export default App;
