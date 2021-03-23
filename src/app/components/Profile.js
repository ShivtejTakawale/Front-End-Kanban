import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap";
import ProjectManagerPage  from './ProjectManagerPage';
 import CreateEmployeeComponent from './CreateEmployeeComponent';
 import CreateTaskComponent from'./CreateTaskComponent';
 import Navbar from '../components/Navbar';
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import Home from '../pages/Home';
 import Reports from '../pages/Reports';
 import Products from '../pages/Products';
 import Routing from './Routing';
 import Board from '../pages/Board';

import AuthenticationService from '../services/AuthenticationService';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {user: undefined};
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();
    this.setState({user: user});
  }

  render() {
    let userInfo = "";
    const user = this.state.user;

    // login
    if (user && user.accessToken) {

      let roles = "";

      user.authorities.forEach(authority => {
        roles = roles + " " + authority.authority
      });

      userInfo = (
                <div style={{marginTop:"20px"}}>
                  <Alert variant="info">
                    <h2>User Info</h2>
                    <ul>
                      <li>Username: {user.username}</li>
                      <li>Access Token: {user.accessToken}</li>
                      <li>Authorities: {roles}</li>
                    </ul>
                  </Alert>
                </div>
              );
    } else { // not login
      userInfo = <div style={{marginTop:"20px"}}>
                    <Alert variant="primary">
                      <h2>Profile Component</h2>
                      <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
                    </Alert>
                  </div>
    }

    return (
      <div>
        <AppNavbar/> 
        <>
      <Router>
        <div>
        
        <Navbar />
        <Switch>
          <Route exact path='/'component={Routing}/>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/Board' component={Board} />
          
        </Switch>
        </div>
      </Router>
    </>
   
        {/* <ProjectManagerPage/>
        <CreateEmployeeComponent/>
        <CreateTaskComponent/> */}

        <Container fluid>
        {userInfo}
        </Container>
        
    
      </div>
   
    );
  }
}

export default Profile;