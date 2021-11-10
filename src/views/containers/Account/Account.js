import React, {Component} from "react";
import AccountForm from "../../../components/AccountForm/AccountForm";
import SideBar from "../../../components/SideBar/SideBar";
import './Account.scss'

class Account extends Component {

    render(){
        return(
            <div className="account">
                <SideBar/>
                <div className="account-main column is-three-fifth is-fullheight">
                    <div className="tile is-ancestor" style={{flex:1, overflow: 'hidden'}}>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <div className="form">
                                    <div className="image-container">
                                        <figure class="image is-128x128 mr-5">
                                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                                        </figure>
                                        <div className="pt-6">
                                        <p className="title">Nexure</p>
                                        <p className="subtitle">1 Place, Glasgow, G11JJ</p>
                                        </div>
                                    </div>
                                    <AccountForm/>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Account