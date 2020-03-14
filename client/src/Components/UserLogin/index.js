import React, { useState } from 'react';
import API from '../../utils/API';
import { Collapse, Button, Form, Input, Card } from 'reactstrap';

export const UserLogin = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
        <Button className="m-2 p-2" color="dark" onClick={toggle}>Login/Register</Button>
        <Card className="bg-dark">
            <Collapse isOpen={isOpen}>

                <Form className="form">

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input type="text" className="form-control rounded-0 " id="username" aria-describedby="username" name="username" value={formData.username} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input type="password" className="form-control rounded-0" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                    </div>


                </Form>
                <Button type="submitLogin" className="btn btn-primary m-2 bg-dark border-0" onClick={handleFormSubmitLogin}>Login</Button>
                <Button type="submitRegister" className="btn btn-primary m-2 bg-dark border-0" onClick={handleFormSubmitRegister}>Register</Button>
            </Collapse>
        </Card>


    </div >

};