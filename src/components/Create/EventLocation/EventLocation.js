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
            </div>
            )
        }
    }

export default EventLocation