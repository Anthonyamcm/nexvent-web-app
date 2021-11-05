import React, {Component} from "react";
import SignIn from "../../../components/SignIn/SignIn";
import SignUp from "../../../components/SignUp/SignUp";
import './Authentication.scss'

class Authentication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isVisible: false
        }
    }

    changeSide = () => {
        if(this.state.isVisible === true){
            this.setState({
                isVisible: false
            })
        } else {
            this.setState({
                isVisible: true
            })
        }
        
    }

    render(){
        return(
            <div className={`page-container ${this.state.isVisible === true ? 'right-panel-active': ''}`} id = "container">
               <SignIn/>
               <SignUp/>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1 className="pb-5 is-size-2">Welcome Back!</h1>
                                <p className="pb-5 is-size-6">To keep connected with us please login with your personal info</p>
                                    <button className="ghost" id="signIn" onClick={this.changeSide}>Sign Up</button>
                        </div>
                        <div className="overlay-panel overlay-left">
                            <h1 className="pb-5 is-size-2">Hello, There!</h1>
                                <p className="pb-5 is-size-6">Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp" onClick={this.changeSide}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Authentication