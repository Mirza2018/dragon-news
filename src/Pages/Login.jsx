import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const location=useLocation()
  const from=location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Container>
      <Form onSubmit={handleLogin} className='w-25'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text>
          Don't have an account? <Link to="/login/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;