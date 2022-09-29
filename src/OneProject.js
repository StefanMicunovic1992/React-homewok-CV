import React, { Component } from 'react'
import './OneProject.css';

class OneProject extends Component{

    render(){

        function setYear(x){
            if(x.from){
                let year = x.from.year
                return year
            }else{
                let year = x.year;
                let month = x.month;
                let time = month + '.' + year
                return time
            }
        }
        function setYear2(x){
            if(x.to){
                let write = '-' + x.to.year
                return write
            }
        }
        return(
            <div className='oneProject'>
                <div className='time'>
                    <p>{setYear(this.props.children.time)}{setYear2(this.props.children.time)}</p>
                </div>
                <div className='nameDesc'>
                    <h3>{this.props.children.title}</h3>
                    <p>{this.props.children.desc}</p>
                </div>
            </div>
        )
    }
}


export default OneProject;