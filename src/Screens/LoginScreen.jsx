import React, { useState, useEffect } from 'react'
import FormContainer from '../Components/FormContainer'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { axios } from "axios";


const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (email, password) => async () => {
        try {

            const config = {
                headers: {
                    'Content-type': 'application/json',
                }
            }

            const { data } = await axios.post(
                'http://18.139.50.74:8080/login',
                { email, password },
                config
            )



            console.log(data)
            localStorage.setItem('userLogin', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()

        // login(email, password)
    }


    return <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
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
                Sign In
            </Button>
        </Form>

    </FormContainer>
}

export default LoginScreen
