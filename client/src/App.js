
import React, { useState } from "react";
import Navbar from "./Components/Navbar"
import Input from "./Components/Input"
import Mapv2 from './Components/Mapv2'
import { CurrentUserIdContext } from './Context/CurrentUserIdContext';
import { UserLoggedInContext } from './Context/UserLoggedInContext';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');

  return (
    <UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      <CurrentUserIdContext.Provider value={{ currentUserId, setCurrentUserId }}>
        <div>
          <Navbar />
          <Input />

          <Mapv2 />
        </div>
      </CurrentUserIdContext.Provider >
    </UserLoggedInContext.Provider >
  );
}

export default App;
