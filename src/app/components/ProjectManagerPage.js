import AppNavbar from './AppNavbar';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Button,Input, Label} from "reactstrap";
import { Alert } from "reactstrap";
import BackendService from '../services/BackendService';

class ProjectManagerPage extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: "",
      projectName:""
    }
    this.createProject=this.createProject.bind(this);
  }

  changeProjectNameHandler=(event) => {
    this.setState({projectName: event.target.value});
}

  
  createProject=(e)=>{
    e.preventDefault();
    let project={projectName: this.state.projectName};
console.log('employee =>'+JSON.stringify(project)); 
BackendService.createProject(project,this.state.projectName).then(res =>{
 
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
        
      
        <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                              
                                <div className = "card-body">
        <form>
                <Label>Add Project</Label>
                <Input autoFocus
                  type="text" 
                  placeholder="Enter Project Name"
                  value={this.state.projectName}
                  onChange={this.changeProjectNameHandler}
                />
                <br/>
             
              <Button variant="primary" onClick={this.createProject} type="submit" className="btn bg-primary">
                Add Project
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

export default ProjectManagerPage;