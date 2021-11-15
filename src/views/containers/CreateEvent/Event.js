import React, {Component} from "react";
import SideBar from "../../../components/SideBar/SideBar";
import './Event.scss'

class Event extends Component {
    render() {
        return(
            <div className="event">
                <SideBar/>
            </div>
        )
    }
}

export default Event