import React, { Component } from 'react'
import OneProject from './OneProject'
import './Projects.css';

class Projects extends Component{

    render(){
        
        return(
            <div className='divProjects'>
                <h2>Projekti</h2>
                <OneProject>{this.props.dataInfoProjects[0]}</OneProject>
                <OneProject>{this.props.dataInfoProjects[1]}</OneProject>
                <hr />
            </div>
        )
    }
}


export default Projects;