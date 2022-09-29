import React, { Component } from 'react'
import { FaHome } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import './Header.css';

class Header extends Component {
    render() {
        
        return (
            <div className='headerDiv'>
                <img src={this.props.dataInfo.img} alt={this.props.dataInfo.name} />
                <h1>{this.props.dataInfo.name} {this.props.dataInfo.surname}</h1>
                <div>
                    <FaHome className='icon' /><p>{this.props.dataInfo.adress.street},{this.props.dataInfo.adress.number}</p>
                </div>
                <div>
                    <FaFlag className='icon' /><p>{this.props.dataInfo.adress.city}, {this.props.dataInfo.adress.country}</p>
                </div>
                <div>
                    <FaMobileAlt className='icon' /><p>{this.props.dataInfo.phone}</p>
                </div>
                <hr />
            </div>
        )
    }
}



export default Header