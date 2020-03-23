
import React from "react";
import Navbar from "./Components/Navbar"
import Input from "./Components/Input"
import Mapv2 from './Components/Mapv2'
import { Row, Col} from 'reactstrap'
import Update from "./Components/CardUpdates/Update";
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <Row>
        <Input />
      </Row>
      <Row className="no-gutters">
        <Col >
          <Mapv2 />
        </Col>
        <Col>
          <Update />
        </Col>
      </Row>

    </div>
  );
}

export default App;
