import React, { Component } from 'react'
import ProjectManagerPage  from './ProjectManagerPage';
 import CreateEmployeeComponent from './CreateEmployeeComponent';
 import CreateTaskComponent from'./CreateTaskComponent';
 import Navbar from '../components/Navbar';
 import AppNavbar from './AppNavbar';

export default class Routing extends Component {
    render() {
        return (
            
                 <div>
        {/* <AppNavbar/>  */}
     
   
        <ProjectManagerPage/>
        {/* <CreateEmployeeComponent/>
        <CreateTaskComponent/> */}

        
        
    
        
            </div>
        )
    }
}


