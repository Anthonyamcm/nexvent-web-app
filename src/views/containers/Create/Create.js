import {Component} from "react";
import SideBar from "../../../components/SideBar/SideBar";
import Input from "../../../components/Input/Input";
import TextArea from "../../../components/TextArea/TextArea";
import GooglePlacesAutocomplete , { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import Select from 'react-select'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { DropdownDate, DropdownComponent } from 'react-dropdown-date';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { createEvent } from "../../../actions/thunks/userActions/userActions";
import {FaUpload} from 'react-icons/fa'
import {IoLocationOutline} from 'react-icons/io5'
import './Create.scss'
import Steper from "../../../components/Steper/Steper";
import moment from "moment";

class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            step: 1,

            imageURL: null,
            imageName: '',
            title: '',
            description: '',
            locationData: '',
            address: '',
            
            loc: {},
            
            times: ["00:00", "00:00"],
            date: null,
            selectedDate: moment(new Date).format('yyyy-MM-DD'),
            tags: [],

            companyID: JSON.parse(localStorage.getItem('session')).id,
            submitting: false
        }

        this.create = this.create.bind(this);
    }

    back = () => {
        const{step} = this.state
        this.setState({
            step: step - 1
        })
    }

    next = () => {
        const{step} = this.state
        this.setState({
            step: step + 1
        })
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
        .then(({ lat, lng }) => this.setState({loc: [lng, lat], address: locationData.label}))
        .then(this.setState({locationData}))
    }

    formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
        var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
      
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
      
        return [year, month, day].join('-');
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

        const { imageURL, title , address, description, loc, date, times, tags, companyID} = this.state;

        console.log(loc)

        const eventInfo = {
            imageURL,
            title,
            address,
            description,
            loc,
            date,
            times,
            tags,
            companyID,
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
            step,
            title,
            description,
            imageName,
            imageURL,
            tags,
            locationData,
            times,
            selectedDate,
            submitting,
        } = this.state

        const options = [
            { value: 'Festival', label: 'Festival' },
            { value: 'Performance', label: 'Performance' },
            { value: 'Fair', label: 'Fair' },
            { value: 'Drag', label: 'Drag' },
            { value: 'Show', label: 'Show' },
            { value: '18+', label: '18+' },
        ]

        return(
            <div className="create">
                <SideBar/>
                <div className="create-main column is-three-fifth is-fullheight">
                    <div className="tile is-ancestor" style={{overflow: 'hidden'}}>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <div className="columns" style={{margin: 0, minHeight: '100%'}}>
                                    <div className ="column is-6 px-6 is-fullheight">
                                        <div className='form'>
                                            <Steper/>
                                            {step === 1 && (
                                                <div className="details-form" >
                                                <h1 className="py-2 is-size-3" >A little bit about it</h1>
                                                <p className="is-size-6 has-text-grey-light">Please fill in some of the basic details to get started</p>
                                                <div className="field pt-6">
                                                    <div className="control">
                                                    <div className="file is-normal has-name">
                                                        <label className="file-label">
                                                            <input className="file-input" type="file" name="image" onChange={(e) => this.setImage(e)}/>
                                                                <span className="file-cta">
                                                                <span className="file-icon">
                                                                    <FaUpload/>
                                                                </span>
                                                                <span className="file-label">
                                                                   Image
                                                                </span>
                                                                </span>
                                                                <span className="file-name">
                                                                    {imageName}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="field pt-5">
                                                    <div className="control">
                                                        <Input 
                                                            value={title}
                                                            type="text"
                                                            name="title" 
                                                            id="title"
                                                            placeholder='Title' 
                                                            onChange={(e) => this.onChange(e)}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="field pt-5">
                                                    <div className="control">
                                                            <GooglePlacesAutocomplete 
                                                                apiKey="AIzaSyDB3m9IgLnTqEBC-GxuHeuAHjSkyyJZwKw"
                                                                textInputProps={{
                                                                    placeholderTextColor: 'lightgray',
                                                                }}
                                                                selectProps={{
                                                                    value: locationData,
                                                                    onChange:(e) => this.setLocation(e),
                                                                    isClearable: true,
                                                                    placeholder: 'Location',
                                                                    styles: {
                                                                        control: (provided) => ({
                                                                            ...provided,
                                                                            alignItems: 'center',
                                                                            cursor: 'default',
                                                                            borderRadius: 8,
                                                                            padding: '0 0 0 0.5rem',
                                                                            backgroundColor: 'whitesmoke',
                                                                            flexWrap: 'wrap',
                                                                            justifyContent: 'space-between',
                                                                            minHeight: '48px',
                                                                            outline: '0',
                                                                            position: 'relative',
                                                                            display: 'flex',
                                                                            border: 'none',
                                                                            boxShadow: 'none',
                                                                            boxSiazing: 'border-box',
                                                                            width: '100%',
                                                                            fontWeight: 700,
                                                                        }),
                                                                        placeholder: (provided) => ({
                                                                            ...provided,
                                                                            fontWeight: 700,
                                                                            color: '#bbbbbb',
                                                                        }),
                                                                        menu: (provided) => ({
                                                                            ...provided,
                                                                            backgroundColor: 'whitesmoke',
                                                                            fontWeight: 700
                                                                        }),
                                                                    },
                                                                    }}
                                                                minLengthAutocomplete={3}
                                                                autocompletionRequest={{ componentRestrictions: { country:["UK"]}, types: ['geocode'],  }}/>
                                                    </div>
                                                </div>
                                                <div className="field pt-5" style={{flex: 1}}>
                                                    <div className="control">
                                                            <Select 
                                                                options={options}
                                                                name='tags' 
                                                                value={tags} 
                                                                isMulti 
                                                                onChange={(e) => this.setTags(e)}
                                                                placeholder={'Tags'}
                                                                styles = {{control: (provided) => ({
                                                                    ...provided,
                                                                    alignItems: 'center',
                                                                    cursor: 'default',
                                                                    borderRadius: 8,
                                                                    padding: '0 0 0 0.5rem',
                                                                    backgroundColor: 'whitesmoke',
                                                                    flexWrap: 'wrap',
                                                                    justifyContent: 'space-between',
                                                                    minHeight: '48px',
                                                                    outline: '0',
                                                                    position: 'relative',
                                                                    display: 'flex',
                                                                    border: 'none',
                                                                    boxShadow: 'none',
                                                                    boxSiazing: 'border-box',
                                                                    width: '100%',
                                                                    fontWeight: 700,
                                                                }),
                                                                placeholder: (provided) => ({
                                                                    ...provided,
                                                                    fontWeight: 700,
                                                                    color: '#bbbbbb',
                                                                }),
                                                                menu: (provided) => ({
                                                                    ...provided,
                                                                    backgroundColor: 'whitesmoke',
                                                                    fontWeight: 700
                                                                })}}/>
                                                    </div>
                                                </div>
                                                <button className='button is-next has-text-white' style={{alignSelf: 'flex-end'}} onClick={this.next}>Next Step</button>
                                            </div>
                                            )}
                                            {step === 2 && (
                                                <div className="details-form">
                                                    <div className="field pt-5">
                                                        <div className="control">
                                                            <DropdownDate
                                                                startDate={                      
                                                                    moment(new Date).format('yyyy-MM-DD')                 
                                                                  }
                                                                  endDate={                         
                                                                    '2030-12-31'                    
                                                                  }
                                                                selectedDate={                    
                                                                    selectedDate         
                                                                }
                                                                onDateChange={(date) => {
                                                                    console.log(date);
                                                                    this.setState({ date: date, selectedDate: this.formatDate(date)});
                                                                }}
                                                                order={[                          
                                                                    DropdownComponent.day,         
                                                                    DropdownComponent.month,
                                                                    DropdownComponent.year
                                                                  ]}
                                                                classes={                         
                                                                    {
                                                                      dateContainer: 'date-container',
                                                                      yearContainer: 'select',
                                                                      monthContainer: 'select',
                                                                      dayContainer: 'select',
                                                                    }
                                                                }
                                                                defaultValues={
                                                                    {
                                                                      day: "Day",
                                                                      month: "Month",
                                                                      year: "Year"
                                                                    }
                                                                }
                                                                options={                        
                                                                    {
                                                                      monthShort: true
                                                                    }
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="field pt-5">
                                                        <div className="control">
                                                            <TimeRangePicker
                                                                    format="hh:mm a"
                                                                    clearIcon={null}
                                                                    clockIcon={null}
                                                                    disableClock={true}
                                                                    value={times}
                                                                    onChange={(e) => this.setTime(e)}/>
                                                        </div>
                                                    </div>
                                                    <div className="field pt-5" style={{flex: 1}}>
                                                        <div className="control">
                                                            <TextArea 
                                                                value={description}
                                                                type="text"
                                                                name="description" 
                                                                id="description"
                                                                placeholder='Description' 
                                                                onChange={(e) => this.onChange(e)}
                                                                />
                                                        </div>
                                                    </div>
                                                    <div className="form-footer">
                                                        <button className='button is-previous' style={{alignSelf: 'flex-start'}} onClick={this.back}>Previous Step</button>
                                                        <button className={`button is-next has-text-white ${submitting === true ? 'is-loading': ''}`} style={{alignSelf: 'flex-start'}} onClick={this.create}>Submit</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className ="column is-6">
                                    {step === 1 && (
                                        <div className="right-panel" style={{backgroundImage: `url(${imageURL})`}}>
                                            <div className='footer'>
                                                <p className="pb-4 is-size-3" style={{flex: 1}}>{title === '' ? 'Placeholder' : title}</p>
                                                {locationData === '' ? (
                                                    <p className="pb-4 is-size-5" style={{display: 'flex', alignItems: 'center'}}><IoLocationOutline size={28}/>{'Street, City, Country'}</p>
                                                ) : (
                                                    <p className="pb-4 is-size-5" style={{display: 'flex', alignItems: 'center'}}><IoLocationOutline size={28}/> {locationData.label}</p>
                                                )}
                                                <div className="tag-continaer">
                                                    {tags.length < 1 ? (
                                                            <span className="footer-tag ml-1 mr-1 mt-2">Placeholder</span>
                                                    ) : tags.map(({label}, index) =>  
                                                        <span className="footer-tag ml-1 mr-1 mt-2" key={index}>{label}</span>
                                                    )}
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    )}
                                    {step === 2 && (
                                    <div className="right-panel">
                                        <div className="image-head" style={{backgroundImage: `url(${imageURL})`}}/>
                                        <div className="info-container">
                                        </div>
                                    </div>
                                    )}
                                        
                                    </div>
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
