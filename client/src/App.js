import MapboxMap from './Components/MapboxMap';
import Mapboxv2 from './Components/MapboxMap-v2';

import React from "react";
import { UserLogin } from "./Components/UserLogin"
import Navbar from "./Components/Navbar"
import Input from "./Components/Input"
function App() {
  return (
    <div>
      <Navbar />
      <Input />

      < p > Riders on the storm </p >
      <UserLogin className='col-3' />
      {/* <MapboxMap /> */}
      <Mapboxv2/>

    </div >
  );
}

export default App;
