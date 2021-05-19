import React, { useEffect, useState } from 'react'
import { axios } from "axios";
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'

const ListScreen = () => {

    const [list, setList] = useState([])

    const userData = localStorage.getItem("userLogin");

    useEffect(() => {

        if (userData) {

        }

    }, [list])

    return <header>
        <Navbar
            bg="light"
            variant="success"
            expand="lg"
            // fixed="top"
            collapseOnSelect
        >

            <Container>
                <Row className="py-3">
                    <Col>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                {' '}Sign In
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <LinkContainer to="/register">
                            <Nav.Link>
                                {' '}Sign Up
                    </Nav.Link>
                        </LinkContainer>
                    </Col>
                </Row>


            </Container>
        </Navbar>
    </header>

}

export default ListScreen
