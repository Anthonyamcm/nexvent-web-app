import React, {Component} from "react";
import Calendar from 'react-calendar';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import './EventCalendar.scss'


class EventCalendar extends Component {
    render(){
        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field py-6 pb-5">
                        <div className="control">
                        <TimeRangePicker
                                    format="hh:mm a"
                                    clearIcon={null}
                                    clockIcon={null}
                                    disableClock={true}
                                    value={this.props.times}
                                    onChange={(e) => this.props.timeChange(e)}/>
                                    
                            <Calendar
                                onChange={(e) => this.props.onChange(e)}
                                onClickDay={(e) => this.props.onChange(e)}
                                value={this.props.date}
                                selectRange={true}
                                minDate={new Date()}
                                maxDate={new Date('30-11-2022')}
                                minDetail="month"
                                maxDetail="month"
                                defaultView="month"
                                next2Label={null}
                            />
                        </div>
                    </div>
                </div>
                <div className="column is-1"/>
                <div className="column is-6 py-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <h1 className="pt-6 is-pulled-right">Status:<span className={`tag ml-2 ${this.props.dates.length > 0 && ((this.props.times[0] !== undefined && this.props.times[0] !== null) && (this.props.times[1] !== undefined && this.props.times[1] !== null)) ? 'is-success': 'is-danger'}`}>{this.props.dates.length > 0 && ((this.props.times[0] !== undefined && this.props.times[0] !== null) && (this.props.times[1] !== undefined && this.props.times[1] !== null)) ? 'Complete' : 'Incomplete'}</span></h1>
                </div>
            </div>
            )
        }
    }

export default EventCalendar