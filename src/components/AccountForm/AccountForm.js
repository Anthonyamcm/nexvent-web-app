import React, {Component} from "react";

class AccountForm extends Component{
    render(){
        return(
            <form>
                <div className="level pt-5">
                    <div className="level-item">
                    <div className="field">
                        <label className="label">Company</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                    <div className="level-item">
                    <div className="field">
                        <label className="label">Company ID</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="level pt-5">
                    <div className="level-item">
                    <div className="field">
                        <label className="label">Location</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                    <div className="level-item">
                    <div className="field">
                        <label className="label">Post code</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="level pt-5">
                    <div className="level-item">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                    <div className="level-item">
                    <div className="field">
                        <label className="label">Phone Number</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                </div>
                <a href="/" className="button mt-6">Save Changes</a>
            </form>
        )
    }
}

export default AccountForm