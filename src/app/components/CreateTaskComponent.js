import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Button,Input, Label} from "reactstrap";
import { Alert } from "reactstrap";
import BackendService from '../services/BackendService';

class  CreateTaskComponent extends Component {
  
  
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: "",
      
      projectid:"",
      empid:"",
      taskname:"",
      startdate:"",
      enddate:"",
      status:""
    }
    this.createTask=this.createTask.bind(this);
  }
  
  changeProjectIdHandler=(event) => {
    this.setState({projectid: event.target.value});
}

changeEmpIdHandler=(event)=>{
    this.setState({empid: event.target.value});
}
changeTaskNameHandler=(event)=>{
    this.setState({taskname: event.target.value});
}
changeStartDateHandler=(event)=>{
    this.setState({startdate: event.target.value});
}
changeEndDateHandler=(event)=>{
    this.setState({enddate: event.target.value});
}
changeStatusHandler=(event)=>{
    this.setState({status: event.target.value});
}
  createTask=(e)=>{
    e.preventDefault();
    let task={projectid: this.state.projectid,empid: this.state.empid,
        taskname: this.state.taskname,startdate: this.state.startdate,
        enddate: this.state.enddate,status: this.state.status};
    console.log('task =>'+JSON.stringify(task)); 
    BackendService.createTask(task,this.state.projectid,this.state.userid,this.state.taskname,
        this.state.startdate,this.state.enddate,this.state.status).then(res =>{
 
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
       
                <Label>Add Project Id</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Project Id"
                  value={this.state.projectid}
                  onChange={this.changeProjectIdHandler}
                />
                <br/>
                <Label>Add Emp Id</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Employee Id"
                  value={this.state.empid}
                  onChange={this.changeEmpIdHandler}
                />
                <br/>
                <Label>Add Task Name</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Task Id"
                  value={this.state.taskname}
                  onChange={this.changeTaskNameHandler}
                />
                <br/>
                <Label>Add Start Date</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Start Date"
                  value={this.state.startdate}
                  onChange={this.changeStartDateHandler}
                />
                <br/>
                <Label>Add End Date</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter End Date"
                  value={this.state.enddate}
                  onChange={this.changeEndDateHandler}
                />
                <br/>
                <Label>Add status</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Status"
                  value={this.state.status}
                  onChange={this.changeStatusHandler}
                />
                <br/>
                
              <Button variant="primary" onClick={this.createTask} type="submit" className="btn bg-primary">
                Add Task
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




export default CreateTaskComponent;