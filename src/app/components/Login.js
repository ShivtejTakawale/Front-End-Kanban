import '../../App.css';
import React, { Component } from 'react';
//import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthenticationService from "../services/AuthenticationService";
import avatar from '../../avatar.png';
import AppHeader from "./common/header";
import AppFooter from "./common/footer";
import { Layout } from 'antd';
const { Header,Footer } = Layout;

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();

    AuthenticationService
        .signin(this.state.username, 
                  this.state.password)
      .then(
        () => {
          this.props.history.push('/profile');
        },
        error => {
          console.log("Login fail: error = { " + error.toString() + " }");
          this.setState({error: "Can not signin successfully ! Please check username/password again"});
        }
    );
  }

  render() {
    return ( 
      <div className="login-block" >
        {/*<AppNavbar/>*/}
        <Header>
      <AppHeader/>
      </Header>
        <Container fluid>
          <Row style={{marginTop:"100px"}}>
          <Col sm="12" md={{ size: 3, offset:5 }}>
            <div className=" d-flex justify-content-center align-items-center">
              <img src={avatar} alt="Avatar" className="avatar center" 
                style={{width: "50%", height: "auto"}}/>
            </div>
            <Form  onSubmit={this.doLogin} >
              <FormGroup>
                <Label for="username"><strong>Username</strong></Label>
                <Input autoFocus 
                  type="text"
                  name="username" id="username"
                  value={this.state.username}
                  placeholder="Enter Username"
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password"><strong>Password</strong></Label>
                <Input type="password" 
                  name="password" id="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <Button type="submit" variant="primary" size="lg" block>
                Sign In
              </Button>
              {
                this.state.error && (
                  <Alert color="danger">
                    {this.state.error}
                  </Alert>
                )
              }
            </Form>
            </Col>
          </Row>
        </Container>
        <Footer style={{marginTop:"150px",width:"100%"}}>
      <AppFooter/>
      </Footer>
      </div>);
  }
}

export default Login;