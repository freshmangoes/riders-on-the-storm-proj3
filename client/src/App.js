import MapboxMap from './Components/MapboxMap';
import React from "react";
import { UserLogin } from "./Components/UserLogin"

function App() {
  return (
    <div>


      < p > Riders on the storm </p >
      <UserLogin className='col-3' />
      <MapboxMap />

    </div >
  );
}

export default App;
