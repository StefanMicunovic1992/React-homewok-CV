import React, { Component } from 'react'
import './CV.css';
import Header from './Header'
import Data from './data.json'
import School from './School.js'
import Projects from './Projects.js'
import HobbiesAndSkills from'./HobbiesAndSkills'


class CV extends Component{
    constructor(props){
        super(props)

         this.state = {
             data: [Data]    
         }
    }
    render(){
        console.log(this.state.data[0][0])
        return(
            <div className='okvirCV'>
                <Header dataInfo={this.state.data[0][0].info}></Header>
                <School dataInfoEducation={this.state.data[0][0].education}></School>
                <Projects dataInfoProjects={this.state.data[0][0].projects}></Projects>
                <HobbiesAndSkills>{this.state.data[0][0].skills}</HobbiesAndSkills>
                <HobbiesAndSkills>{this.state.data[0][0].hobbies}</HobbiesAndSkills>
            </div>
        )
    }
}



export default CV