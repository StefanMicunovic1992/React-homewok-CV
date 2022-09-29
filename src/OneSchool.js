import React, { Component } from 'react'
import './OneSchool.css';


class OneSchool extends Component{


    render(){
        function setYear(x){
            if(x.to){
                return x.to.year
            }else{
                let now = 'now';
                return now;
            }
        }

        return(
            <div className='oneSchoole'>
                <div className='time'>
                    <p>{this.props.children.time.from.year} - {setYear(this.props.children.time)}</p>
                </div>
                <div className='nameDesc'>
                    <h3>{this.props.children.title}</h3>
                    <p>{this.props.children.desc}</p>
                </div>
            </div>
        )
    }
}


export default OneSchool;


