import React, { Component } from 'react'
import OneElement from './OneElement'
import './HobbiesAndSkills.css';
class HobbiesAndSkills extends Component {

    render() {
        console.log(this.props.children[0]);
        function setName(x) {

            if (x.perc) {
                let name = 'SKILLS';
                return name
            } else {
                let name = 'HOBBIES';
                return name;
            }


        }


        return (
            <div className='hoobiesAndSkilsDiv'>
                <h2 id='name'>{setName(this.props.children[0])}</h2>
                <div className='wrapper'>
                    <OneElement>{this.props.children[0]}</OneElement>
                    <OneElement>{this.props.children[1]}</OneElement>
                    <OneElement>{this.props.children[2]}</OneElement>
                    <OneElement>{this.props.children[3]}</OneElement>
                </div>
                <hr />
            </div>
        )
    }
}


export default HobbiesAndSkills;