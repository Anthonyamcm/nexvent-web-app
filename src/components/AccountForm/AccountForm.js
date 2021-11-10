import React, {Component} from "react";

class AccountForm extends Component{
    render(){
        return(
            <form>
                <div class="level pt-5">
                    <div class="level-item">
                    <div class="field">
                        <label class="label">Company</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                    <div class="level-item">
                    <div class="field">
                        <label class="label">Company ID</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="level pt-5">
                    <div class="level-item">
                    <div class="field">
                        <label class="label">Location</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                    <div class="level-item">
                    <div class="field">
                        <label class="label">Post code</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="level pt-5">
                    <div class="level-item">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Text"/>
                        </div>
                    </div>
                    </div>
                    <div class="level-item">
                    <div class="field">
                        <label class="label">Phone Number</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Text"/>
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