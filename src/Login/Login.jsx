import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = ({onSubmit, onToggleForm}) => {
  return (
    <>
    

<Form  onSubmit={onSubmit}>
    <h1>Login</h1><br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter Username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <a onClick={onToggleForm} href="#">Create an account?</a>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>


    
    </>
  )
}

export default Login
