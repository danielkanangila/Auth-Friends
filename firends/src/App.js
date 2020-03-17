import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Friends from './components/friends/Friends';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Container} from './components/styled-components';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Container>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <PrivateRoute path="/friends" component={Friends} />
        </Container>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
