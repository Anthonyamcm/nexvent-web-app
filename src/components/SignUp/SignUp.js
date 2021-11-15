import React, {Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { registerUser } from "../../actions/thunks/userActions/userActions";
import logo from '../../assets/nexvent-logo.png'
import Input from "../Input/Input";
import './SignUp.scss'

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            company: '',
            password: '',
            errorMessage: '',
            submitting: false,
            inValid: false
        }
        this.register = this.register.bind(this);
    }

    static handleKeyPressCompany(e) {
        if (e.key === 'Enter') {
          document.getElementById('registerEmail').focus();
        }
      }

    static handleKeyPressEmail(e) {
        if (e.key === 'Enter') {
          document.getElementById('registerPassword').focus();
        }
      }


    async handleKeyPressPassword(e) {
        if (e.key === 'Enter') {
          await this.register();
        }
    }

    onChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
      }
    

      async register() {
        this.setState({
          submitting: true,
        });
        const isValid = this.validateForm();
        if (isValid) {
          const { email, password , company } = this.state;
          const userInfo = {
            email: email.trim(),
            password,
            company
          };
          await this.registerUser(userInfo);
        } else {
          this.setState({
            submitting: false,
          });
        }
      }

      update(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      validateForm() {
        const { email, password, company } = this.state;
        const fields = [email, password, company];
        if (fields.some((field) => field === undefined || field === '')) {
          this.setState({
              inValid: true,
              errorMessage: 'Please fill in all fields'
          })
          return false;
        }
        return true;
      }

      async registerUser(userInfo) {
        const { dispatchRegistration, history } = this.props;
        const result = await dispatchRegistration(userInfo);
        if (result) {
          history.push('/Dashboard');
        } else {
          this.setState({
            submitting: false,
            inValid: true,
            errorMessage: 'Details are aready in use'
          });
        }
      }

    render(){
        const {
            company,
            email,
            password,
            inValid,
            errorMessage
          } = this.state;
        return(
            <div className="form-container sign-up-container">
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="/">
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
                    <div className="signup-form">
                        <h1 className="pb-5 is-size-2">Create Account</h1>
                        <div className="field pt-5">
                                <label className="label">Company</label>
                                    <div className="control">
                                        <Input 
                                            value={company}
                                            type="text"
                                            name="company" 
                                            id="company"
                                            placeholder='e.g Nexure' 
                                            onChange={(event) => this.onChange(event)}
                                            onKeyPress={(e) => SignUp.handleKeyPressCompany(e)}
                                            onFocus={() => this.setState({inValid: false})}
                                            invalid={inValid}
                                            />
                                    </div>
                            </div>
                            <div className="field pt-5">
                                <label className="label">Email</label>
                                    <div className="control">
                                        <Input 
                                            value={email}
                                            type="email"
                                            name="email" 
                                            id="registerEmail"
                                            placeholder='name@comapny.com' 
                                            onChange={(event) => this.onChange(event)}
                                            onKeyPress={(e) => SignUp.handleKeyPressEmail(e)}
                                            onFocus={() => this.setState({inValid: false})}
                                            invalid={inValid}
                                            />
                                    </div>
                            </div>
                            <div className="field pt-5">
                                <label className="label">Password</label>
                                    <div className="control">
                                        <Input 
                                            value={password}
                                            type="password"
                                            name="password"
                                            id="registerPassword"
                                            placeholder='Password' 
                                            onChange={(event) => this.onChange(event)}
                                            onKeyPress={(e) => this.handleKeyPressPassword(e)}
                                            onFocus={() => this.setState({inValid: false})}
                                            invalid={inValid}
                                        />
                                    </div>
                                    {inValid && (
                                        <p className="mt-5 has-text-danger">{errorMessage}</p>
                                    )}
                            </div>
                            <button className= {`button mt-5 ${this.state.submitting === true ? 'is-loading': ''}`} onClick={this.register} >Sign Up</button>
                    </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchRegistration: (cb) => dispatch(registerUser(cb)),
  });

  SignUp.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    dispatchRegistration: PropTypes.func.isRequired,
  };
  
  export default connect(null, mapDispatchToProps)(withRouter(SignUp));

  export { SignUp as TestComponent };