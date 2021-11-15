import React, { Component } from "react";
import './NavBar.scss'
import logo from '../../assets/nexvent-logo.png'

class NavBar extends Component {
    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <a class="brand" href="/"> 
                    <div class="brand-icon"> 
                      <img alt="Nexvent logo" role="presentation" src={logo}/> 
                    </div> 
                    <div class="brand-content"> 
                      <div class="brand-title"> Nexvent</div>
                    </div> 
                  </a>
                </a>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active" href="/">Home</a>
                  <a className="navbar-item" href="https://bulma.io/">Features</a>
                  <a className="navbar-item" href="https://bulma.io/">Pricing</a>
                  <a className="navbar-item" href="https://bulma.io/">Contact Us</a>
                  <a className="navbar-item button" href="/signup">Sign Up</a>
                </div>
              </div>
              </div>
            </nav>
        )
    }
}

export default NavBar