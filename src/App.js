import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ListScreen from './Screens/ListScreen'
import RegisterScreen from './Screens/RegisterScreen'
import LoginScreen from './Screens/LoginScreen'

const App = () => {
  return (
    <Router>
    <Container>
      <main>
        <h1>Welcome to checklistapp</h1>
        <Route
            path='/register'
            component={RegisterScreen}
          />
          <Route
            path='/login'
            component={LoginScreen}
          />
        <Route
          path='/'
          component={ListScreen} exact
        />
      </main>
    </Container>
    </Router>
  )
}

export default App
