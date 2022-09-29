import React, { Component } from 'react'
import './School.css';
import OneSchool from './OneSchool'

class School extends Component{


    render(){
        
        return(
            <div className='divSchool'>
                <h2>OBRAZOVANJE</h2>
                <OneSchool>{this.props.dataInfoEducation[0]}</OneSchool>
                <OneSchool>{this.props.dataInfoEducation[1]}</OneSchool>
                <hr />
            </div>
        )
    }
}


export default School;