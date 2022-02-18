import {Component} from "react";
import './Steper.scss'

class Steper extends Component {
    render(){
        return(
            <nav className="level has-background-light" style={{borderRadius: 8}}>
                <div className="level-item py-2 pl-4 is-active" style={{borderRadius: '8px 0 0 8px', display: 'block'}}>
                    <div>
                    <p className="heading has-text-grey">Step 01</p>
                    <p className="heading has-text-weight-bold">Basic Details</p>
                    </div>
                </div>
                <div className="level-item py-2 pl-4" style={{borderRadius: '0 8px 8px 0', display: 'block'}}>
                    <div>
                    <p className="heading has-text-grey">Step 02</p>
                    <p className="heading has-text-weight-bold">Advanced Details</p>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Steper