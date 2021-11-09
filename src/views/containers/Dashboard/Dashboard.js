import React, {Component} from "react";
import SideBar from "../../../components/SideBar/SideBar";
import{FaRegBell} from 'react-icons/fa'
import DashboardGraph from "../../../components/Dashboard/DashboardGraph/DashboardGraph";
import './Dashboard.scss'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard">
                <SideBar/>
                <div className="dashboard-main column is-three-fifth is-fullheight">
                    <div className="columns">
                        <div className="column pr-5 pt-5 pb-5 is-11">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <article className="tile is-child">
                                        <p className="title">Dashboard</p>
                                        <p className="subtitle">Nexure</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="column pt-5 pb-5 is-1">
                            <a href='/'>
                            <FaRegBell size={32}/>
                            </a>
                        </div>
                    </div>
                    <div className="tile is-vertical is-8">
                        <DashboardGraph/>
                    </div>
                    <div className="tile is-vertical is-4">
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;