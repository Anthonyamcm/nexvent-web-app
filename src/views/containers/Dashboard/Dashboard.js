import React, {Component} from "react";
import SideBar from "../../../components/SideBar/SideBar";
import './Dashboard.scss'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard">
                <SideBar/>
                <div className="dashboard-main column is-three-fifth is-fullheight">
                </div>
            </div>
        )
    }
}

export default Dashboard;