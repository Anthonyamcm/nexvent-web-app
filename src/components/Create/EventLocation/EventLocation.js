import React, {Component} from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './EventLocation.scss'

class EventLocation extends Component {

    

    render(){
        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field py-6 pb-5">
                        <div className="control">
                            <GooglePlacesAutocomplete 
                                apiKey="AIzaSyDB3m9IgLnTqEBC-GxuHeuAHjSkyyJZwKw"
                                selectProps={{
                                    onChange:(e) => this.props.onChange(e),
                                    isClearable: true
                                    }}
                                minLengthAutocomplete={3}
                                autocompletionRequest={{ componentRestrictions: { country:["UK"]}, types: ['geocode'],  }}/>
                        </div>
                    </div>
                </div>
                <div className="column is-1"/>
                <div className="column is-6 py-6 pl-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <h1 className="pt-6 is-pulled-right">Status:<span className={`tag ml-2 ${this.props.value.length > 0 ? 'is-success': 'is-danger'}`}>{this.props.value.length > 0 ? 'Complete' : 'Incomplete'}</span></h1>
                </div>
            </div>
            )
        }
    }

export default EventLocation