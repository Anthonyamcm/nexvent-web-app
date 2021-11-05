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
                        <div class="field pt-5">
                                <label class="label">Company</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Nexure"/>
                                    </div>
                            </div>
                            <div class="field pt-5">
                                <label class="label">Email</label>
                                    <div class="control">
                                        <input class="input" type="email" placeholder="someone@company.com"/>
                                    </div>
                            </div>
                            <div class="field pt-5">
                                <label class="label">Password</label>
                                    <div class="control">
                                        <input class="input" type="password" placeholder="Password"/>
                                    </div>
                            </div>
                            <button className="button mt-5" >Sign Up</button>
                    </form>
                </div>
        )
    }
}

export default SignUp