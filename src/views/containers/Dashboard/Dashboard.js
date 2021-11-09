import React, {Component} from "react";
import SideBar from "../../../components/SideBar/SideBar";
import DashboardGraph from "../../../components/Dashboard/DashboardGraph/DashboardGraph";
import DashboardTagsList from "../../../components/Dashboard/DashboardTagsList/DashboardTagsList";
import DashboardList from "../../../components/Dashboard/DashboardTable/DashboardTable";
import './Dashboard.scss'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard">
                <SideBar/>
                <div className="dashboard-main column is-three-fifth is-fullheight">
                            <div className="tile is-ancestor" style={{flex:0}}>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <div className="is-flex">
                                            <div style={{flex: 1}}>
                                                <p className="title is-size-4">Dashboard</p>
                                                <p className="subtitle is-size-5">Nexure</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                    <div class="tile is-ancestor">
                        <div className="tile is-parent is-8">
                            <DashboardGraph/>
                        </div>
                        <div className="tile is-parent is-4">
                            <DashboardTagsList/>                           
                        </div>
                    </div>
                    <div className="tile is-ancestor" style={{overflow: 'hidden'}}>
                        <div className="tile is-parent">
                            <DashboardList/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;