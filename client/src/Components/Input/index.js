import React,{ useState } from "react";
import API from "../../utils/API";
import "./style.css";


export const Input = (props) => {
  const [inputData, setInputData] = useState({
    startPoint: "",
    endPoint: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setInputData({
        ...inputData,
        [name]: value
    });
  }


  
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(inputData)
    API.userInput(inputData).then((data) => {
      if (data.data.message === "Success") {
          alert(`Added to search history`);
      } else {
          alert(data.data.message);
      }
      console.log(data.data.message)

  }).catch(err => console.log(err));
  }

  
  return (
      <div {...props}>
    <div className = "input-group mb-3">
        <div className = "input-group-prepend">
        <span className="input-group-text" id="basic-addon1">Start</span>
        </div>
        <input type="text" className="form-control col-4"  aria-label="Start" aria-describedby="basic-addon1" name= "startPoint" defaultValue= "San Francisco,CA" onChange={handleInputChange}></input>
        <div className = "input-group-prepend">
        <span className="input-group-text" id="basic-addon1">End</span>
        </div>
        <input type="text" className="form-control col-4"  aria-label="End" aria-describedby="basic-addon1" name= "endPoint" defaultValue= "Santa Cruz,CA" onChange={handleInputChange}></input>
        <button type="button" className="btn btn-secondary text-body" onClick={handleSearch}>Search</button>
    </div>
      </div>
  );
}

