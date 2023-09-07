import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accept,setAccept]=useState(false);

    const handleCheckBox=(e)=>{
        setAccept(e.target.checked)
        console.log(e.target.checked);
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, photo, name);
        createUser(email, password)
    }
    return (
        <Container>
            <Form onSubmit={handleRegister} className='w-25'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="your photo" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheckBox}
                        name='accept'
                        type="checkbox"
                        label={<>Accept <Link to='/login/register/trems'>terms and condition</Link></>} />
                </Form.Group>

                <Button disabled={!accept} variant="primary" type="submit">
                    Register
                </Button>

                <br />
                <Form.Text>
                    Already have an account? <Link to="/login">Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;