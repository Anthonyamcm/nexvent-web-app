import React, {Component} from "react";
import logo from '../../assets/nexvent-logo.png'
import {FaRegUser} from 'react-icons/fa'
import {FiSliders} from 'react-icons/fi'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import './SideBar.scss'

class SideBar extends Component {
    render(){
        return(
            <div className="box hero column is-one-fifth is-fullheight ">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="https://bulma.io">
                                <a className="brand" href="/"> 
                                    <div className="brand-icon"> 
                                        <img alt="Nexvent logo" role="presentation" src={logo}/> 
                                    </div> 
                                    <div className="brand-content"> 
                                        <div className="brand-title"> Nexvent</div>
                                    </div> 
                                </a>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="upper">
                <a href="/Create" className="button mt-6">Create event</a>
                <div className="columns is-multiline mt-6 pb-0">
                    <div className="column is-full navigation">
                        <a href="/Dashboard" className="is-size-6 pl-5 is-active">
                            <span className="icon-text">
                                <span className="icon">
                                    <MdOutlineSpaceDashboard/>
                                </span>
                                <span className="pl-1">Dashboard</span>
                            </span>
                        </a>
                    </div>
                    <div className="column is-full navigation ">
                        <a href="/Account" className="is-size-6 pl-5 is-active">
                            <span className="icon-text">
                                <span className="icon">
                                    <FaRegUser/>
                                </span>
                                <span className="pl-1">Account</span>
                            </span>
                        </a>
                    </div>
                    <div className="column is-full navigation">
                        <a href="/Dashboard" className="is-size-6 pl-5 is-active">
                            <span className="icon-text">
                                <span className="icon">
                                    <FiSliders/>
                                </span>
                                <span className="pl-1">Settings</span>
                            </span>
                        </a>
                    </div>
                </div>
                </div>
                    <a href="/" className="button logout mt-6">Log out</a>
            </div>
        )
    }
}

export default SideBar;