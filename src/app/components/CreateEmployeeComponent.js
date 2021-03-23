import React, { Component } from 'react';
import { Alert } from "reactstrap";
import BackendService from '../services/BackendService';
import { Container } from 'reactstrap';
import { Button,Input, Label} from "reactstrap";






class  CreateEmployeeComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: "",
      projectid:"",
      userid:""
    }
    this.createEmployee=this.createEmployee.bind(this);
  }

  changeProjectIdHandler=(event) => {
    this.setState({projectid: event.target.value});
}

changeUserIdHandler=(event)=>{
    this.setState({userid: event.target.value});
}

  createEmployee=(e)=>{
    e.preventDefault();
    let employee={projectid: this.state.projectid,userid: this.state.userid};
    console.log('employee =>'+JSON.stringify(employee)); 
    BackendService.createEmployee(employee,this.state.projectid,this.state.userid).then(res =>{
 
  }
  );}

  componentDidMount() {
    BackendService.getPmBoard()
    .then( response => {
      this.setState({
        content: response.data
      })
    } , error => {
      console.log(error);
      this.setState({
        error: error.toString()
      }); 
    });
  }

  /*createProject(){
    this.props.history.push();
}*/


  render() {
    return (
      <div>
        
        {/* <Container fluid>
          {
            this.state.content ? (
              <div style={{marginTop: "20px"}}>
                <Alert color="info">
                  <h2>{this.state.content}</h2>
                </Alert>
              </div>
            ) : (
              <div style={{marginTop: "20px"}}>
                <Alert color="danger">
                  {this.state.error}
                </Alert>
              </div>
            )
          }
        </Container> */}
        <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                              
                                <div className = "card-body">
        <form>
                <Label>Add ProjectId</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Project Id"
                  value={this.state.projectid}
                  onChange={this.changeProjectIdHandler}
                />
                <br/>
                <Label>Add UserId</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter User Id"
                  value={this.state.userid}
                  onChange={this.changeUserIdHandler}
                />
                <br/>
              <Button variant="primary" onClick={this.createEmployee} type="submit" className="btn bg-primary">
                Add Employee
              </Button>
        </form>
        </div>
        </div>
    </div>

    </div>
      </div>
    );
  }
}




export default CreateEmployeeComponent;