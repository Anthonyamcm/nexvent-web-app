import React ,{Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { authenticateUser } from "../../actions/thunks/userActions/userActions";
import logo from '../../assets/nexvent-logo.png'
import Input from "../Input/Input";
import './SignIn.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            submitting: false,
            inValid: false
        }
        this.login = this.login.bind(this);
    }
    

    static handleKeyPressEmail(e) {
        if (e.key === 'Enter') {
          document.getElementById('password').focus();
        }
      }


    async handleKeyPressPassword(e) {
        if (e.key === 'Enter') {
          await this.login();
        }
    }


    onChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
      }

      async login() {
        this.setState({
          submitting: true,
        });
        const isValid = this.validateForm();
        if (isValid) {
          const { email, password } = this.state;
          const userInfo = {
            email: email.trim(),
            password,
          };
          await this.authenticate(userInfo);
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
        const { email, password } = this.state;
        const fields = [email, password];
        if (fields.some((field) => field === undefined || field === '')) {
          this.setState({
              inValid: true,
              errorMessage: 'Please fill in all fields'
          })
          return false;
        }
        return true;
      }
    
      async authenticate(userInfo) {
        const { dispatchAuthentication, history } = this.props;
        const result = await dispatchAuthentication(userInfo);
        if (result) {
          history.push('/Dashboard');
        } else {
          this.setState({
            submitting: false,
            inValid: true,
            errorMessage: 'Inccorect Email or password'
          });
        }
      }
    
    render(){
        const {
            email,
            password,
            inValid,
            errorMessage
          } = this.state;
        return(
            <div className="form-container sign-in-container">
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
                    <div className="signin-form">        
                        <h1 className="py-5 is-size-2" >Sign in</h1>
                            <div className="field pt-5">
                                <label className="label">Email</label>
                                    <div className="control">
                                        <Input 
                                            value={email}
                                            type="email"
                                            name="email" 
                                            id="email"
                                            placeholder='name@comapny.com' 
                                            onChange={(event) => this.onChange(event)}
                                            onKeyPress={(e) => SignIn.handleKeyPressEmail(e)}
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
                                            id="password"
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
                                <a href="/" className="pt-5">Forgot your password?</a>
                            <button className= {`button mt-5 ${this.state.submitting === true ? 'is-loading': ''}`} onClick={this.login} >Sign In</button>
                    </div>
                </div>
        )
    }
}

  const mapDispatchToProps = (dispatch) => ({
    dispatchAuthentication: (cb) => dispatch(authenticateUser(cb)),
  });

SignIn.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    dispatchAuthentication: PropTypes.func.isRequired,
  };
  
  export default connect(null, mapDispatchToProps)(withRouter(SignIn));

  export { SignIn as TestComponent };