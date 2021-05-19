import React, { useState } from 'react'
import FormContainer from '../Components/FormContainer'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { axios } from "axios";

const RegisterScreen = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const register = (username, email, password) => async () => {
        try {

            const config = {
                headers: {
                    'Content-type': 'application/json',
                }
            }

            const { data } = await axios.post(
                'http://18.139.50.74:8080/register',
                { username, email, password },
                config
            )

            console.log(data)
            localStorage.setItem('userRegister', JSON.stringify(data))
        } catch (error) {
            console.log(error);
        }
    }


    const submitHandler = (e) => {
        e.preventDefault()


        register(username, email, password)

    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='username'>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        type='username'
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Register
                </Button>
            </Form>
        </FormContainer>
    )
}

export default RegisterScreen
