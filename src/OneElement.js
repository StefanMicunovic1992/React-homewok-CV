import React, { Component } from 'react'
import { FaHtml5 } from 'react-icons/fa';
import './OneElement.css';

class OneElement extends Component{


    render(){
        function setPercent(x){
            if(x){
                let value = <p>{x}%</p>
                return value
            }else{
                return
            }
        }

        return(
            <div className='divForWriteOneElement'>
                <h3>{this.props.children.title}</h3>
                <h3>{setPercent(this.props.children.perc)}</h3>
                
            </div>
        )
    }
}

export default OneElement;