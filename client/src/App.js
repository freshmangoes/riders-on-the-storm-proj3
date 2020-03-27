import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { Input } from './Components/Input';
import Mapv2 from './Components/Mapv2';
import { CurrentUserIdContext } from './Context/CurrentUserIdContext';
import { UserLoggedInContext } from './Context/UserLoggedInContext';
import { RouteContext } from './Context/RouteContext';

import SideCard from './Components/SideCard';
import { Row, Col } from 'reactstrap';

import { SearchInputContext } from './Context/SearchInputContext';

function App() {
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [currentUserId, setCurrentUserId] = useState('');
	const [route, setRoute] = useState({ coordinates: [] });
	const [searchInput, setSearchInput] = useState({
		startPoint: 'San Francisco, CA',
		endPoint: 'Santa Cruz, CA'
	});

	return (
		<UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
			<CurrentUserIdContext.Provider
				value={{ currentUserId, setCurrentUserId }}
			>
				<SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
					<RouteContext.Provider value={{ route, setRoute }}>
						<div>
							<Navbar />
							<Row>
								<Input />
							</Row>
							<Row className="no-gutters">
								<Col>
									<Mapv2 />
								</Col>
								<Col>
									<SideCard />
								</Col>
							</Row>
						</div>
					</RouteContext.Provider>
				</SearchInputContext.Provider>
			</CurrentUserIdContext.Provider>
		</UserLoggedInContext.Provider>
	);
}

export default App;
