import React ,{Component} from "react";
import logo from '../../assets/nexvent-logo.png'
import './SignIn.scss'

class SignIn extends Component {
    render(){
        return(
            <div className="form-container sign-in-container">
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
                        <h1 className="py-5 is-size-2" >Sign in</h1>
                            <div class="field pt-5">
                                <label class="label">Email</label>
                                    <div class="control">
                                        <input class="input" type="email" placeholder="someone@email.com"/>
                                    </div>
                            </div>
                            <div class="field pt-5">
                                <label class="label">Password</label>
                                    <div class="control">
                                        <input class="input" type="email" placeholder="Password"/>
                                    </div>
                            </div>
                                <a href="#" className="pt-5">Forgot your password?</a>
                            <button className="button mt-5" >Sign In</button>
                    </form>
                </div>
        )
    }
}

export default SignIn