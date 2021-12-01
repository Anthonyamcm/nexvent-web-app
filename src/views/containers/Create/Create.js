import React, {Component} from "react";
import EventCalendar from "../../../components/Create/EventCalendar/EventCalendar";
import EventDescription from "../../../components/Create/EventDescription/EventDescription";
import EventImage from "../../../components/Create/EventImage/EventImage";
import EventLocation from "../../../components/Create/EventLocation/EventLocation";
import EventTags from "../../../components/Create/EventTags/EventTags";
import EventTitle from "../../../components/Create/EventTtile/EventTitle";
import Review from "../../../components/Create/Review/Review";
import SideBar from "../../../components/SideBar/SideBar";
import { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { createEvent } from "../../../actions/thunks/userActions/userActions";
import './Create.scss'

class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            step: 7,
            imageURL: '',
            imageName: '',
            title: '',
            description: '',
            location: [],
            dates: [],
            times: [],
            tags: [],
            companyID: JSON.parse(localStorage.getItem('session')).id,
            submitting: false
        }

        this.create = this.create.bind(this);
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
    }

    setImage = (e) => {
        this.setState({
            imageURL: URL.createObjectURL(e.target.files[0]),
            imageName: e.target.files[0].name
        })
    }


    setLocation = (locationData) => {
        geocodeByPlaceId(locationData.value.place_id)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => this.setState({location: [locationData.label , lat , lng]}))
    }

    setDates = (dates) => {
        this.setState({
            dates: [dates]
        })
    }

    setTime = (times) => {
        this.setState({
            times
        })
    }

    setTags = (tags) => {
        this.setState({
            tags
        })
    }

    async create() {
        this.setState({
          submitting: true,
        });
        
        const { imageURL, title , description, location, dates, times, tags, companyID} = this.state;
        const eventInfo = {
            imageURL,
            title,
            description,
            location,
            dates,
            times,
            tags,
            companyID
        };
        await this.createEvent(eventInfo);
      }

    async createEvent(eventInfo) {
        const { dispatchCreation, history } = this.props;
        const result = await dispatchCreation(eventInfo);
        if (result) {
          history.push('/Dashboard');
        } else {
          this.setState({
            submitting: false,
            inValid: true,
            errorMessage: 'Nope'
          });
        }
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
                                                <EventImage
                                                    onChange={this.setImage}
                                                    imageURL={this.state.imageURL}
                                                    imageName={this.state.imageName}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 2 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Title</p>
                                                <p>Name of the event</p>
                                                <EventTitle
                                                    onChange={this.onChange}
                                                    value={this.state.title}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 4 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Description</p>
                                                <p>write a description</p>
                                                <EventDescription
                                                    onChange={this.onChange}
                                                    value={this.state.description}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 3 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Tags</p>
                                                <p>Choose the tags that best desctibe the event</p>
                                                <EventTags
                                                    onChange={this.setTags}
                                                    value={this.state.tags}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 5 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Location</p>
                                                <p>Pick the location</p>
                                                <EventLocation
                                                    value={this.state.location}
                                                    onChange={this.setLocation}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 6 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Date(s) & Time</p>
                                                <p>Pick the date(s) and time</p>
                                                <EventCalendar
                                                    dates={this.state.dates}
                                                    onChange={this.setDates}
                                                    times={this.state.times}
                                                    timeChange={this.setTime}/>
                                            </div>
                                        </li>
                                        <li className={`steps-segment ${this.state.step === 7 ? 'is-active': ''}`}>
                                            <span className="steps-marker"></span>
                                            <div className="steps-content">
                                                <p className="is-size-4">Review</p>
                                                <p>Review the event before uploading</p>
                                                <button className= {`button mt-5 ${this.state.submitting === true ? 'is-loading': ''}`} onClick={this.create}>Create</button>
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

const mapDispatchToProps = (dispatch) => ({
    dispatchCreation: (cb) => dispatch(createEvent(cb)),
  });

  Create.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    dispatchCreation: PropTypes.func.isRequired,
  };
  
  export default connect(null, mapDispatchToProps)(withRouter(Create));

  export { Create as TestComponent };
