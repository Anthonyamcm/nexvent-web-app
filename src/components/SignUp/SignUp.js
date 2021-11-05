import React, {Component} from "react";
import logo from '../../assets/nexvent-logo.png'

class SignUp extends Component {
    render(){
        return(
            <div className="form-container sign-up-container">
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="/">
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
                            </div>
                        </nav>
                    <form action="#">
                        <h1 className="pb-5 is-size-2">Create Account</h1>
                                <input className="input" type="text" placeholder="Name" />
                                <input className="input" type="email" placeholder="Email" />
                                <input className="input" type="password" placeholder="Password" />
                            <button className="button mt-5" >Sign Up</button>
                    </form>
                </div>
        )
    }
}

export default SignUp