
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Input } from "./Components/Input";
import Mapv2 from './Components/Mapv2';
import { CurrentUserIdContext } from './Context/CurrentUserIdContext';
import { UserLoggedInContext } from './Context/UserLoggedInContext';
import { RouteContext } from './Context/RouteContext';
import SideCard from './Components/SideCard';
import { Row, Col} from 'reactstrap'
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');
  const [route, setRoute] = useState({});

  return (
    <UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      <CurrentUserIdContext.Provider value={{ currentUserId, setCurrentUserId }}>
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
      </CurrentUserIdContext.Provider >
    </UserLoggedInContext.Provider >

  );
}

export default App;
