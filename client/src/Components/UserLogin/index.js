import React, { useState } from 'react';
import API from '../../utils/API';

export const UserLogin = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmitLogin = (event) => {
        event.preventDefault();
        console.log(formData);
        API.userLogin(formData).then((data) => {
            if (data.data.message === "Success") {
                alert(`You are logged in!`);
            } else {
                alert(data.data.message);
            }
            console.log(data.data.message)

        }).catch(err => console.log(err));

    }
    const handleFormSubmitRegister = (event) => {
        event.preventDefault();
        console.log(formData);
        API.userRegister(formData).then((data) => {
            console.log(data.data.message)

            alert(JSON.stringify(data.data.message));
        }).catch(err => console.log(err));
    }

    return <div {...props}>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" aria-describedby="username" name="username" value={formData.username} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} />
            </div>

            <button type="submitLogin" className="btn btn-primary" onClick={handleFormSubmitLogin}>Login</button>
            <button type="submitRegister" className="btn btn-primary" onClick={handleFormSubmitRegister}>Register</button>
        </form>
    </div>

};