import { Date } from "core-js";
import React, {Component} from "react";
import EventCalendar from "../../../components/Create/EventCalendar/EventCalendar";
import EventDescription from "../../../components/Create/EventDescription/EventDescription";
import EventImage from "../../../components/Create/EventImage/EventImage";
import EventLocation from "../../../components/Create/EventLocation/EventLocation";
import EventTags from "../../../components/Create/EventTags/EventTags";
import EventTitle from "../../../components/Create/EventTtile/EventTitle";
import Review from "../../../components/Create/Review/Review";
import SideBar from "../../../components/SideBar/SideBar";
import './Create.scss'

class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            step: 1,
            title: '',
            location: '',
            date: null,
            tags: []
        }
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
    }


    setlocation = (e) => {
        this.setState({
            location: e.label
        })
    }

    setDate = (date) => {
        this.setState({
            date
        })
    }

    setTags = (e) => {
        this.setState({
            tags: e.label
        })
    }

    
    render() {

        const{
            step
        } = this.state
        return(
            <div className="create">
                <SideBar/>
                <div className="create-main column is-three-fifth">
                    <div className="tile is-ancestor" style={{overflow: 'hidden'}}>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '100%' }}>
                                    <ul className="steps has-gaps is-vertical is-hollow p-5">
                                        <li className={`steps-segment ${this.state.step === 1 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Image</p>
                                                <p>Upload an image</p>
                                                <EventImage/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 1 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Title</p>
                                                <p>Choose a title</p>
                                                <EventTitle
                                                    onChange={this.onChange}
                                                    value={this.state.title}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 1 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Tags</p>
                                                <p>Choose the tags that best desctibe the event</p>
                                                <EventTags
                                                    onChange={this.setTags}
                                                    value={this.state.tags}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 1 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Description</p>
                                                <p>write a description</p>
                                                <EventDescription/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 2 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Location</p>
                                                <p>Pick the location</p>
                                                <EventLocation
                                                    onChange={this.setlocation}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 2 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Date(s) & Time</p>
                                                <p>Pick the date(s) and time</p>
                                                <EventCalendar
                                                    date={this.state.date}
                                                    onChange={this.setState}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 2 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Review</p>
                                                <p>Review the event before uploading</p>
                                                <Review/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create
