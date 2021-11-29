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
                            <Calendar
                                onChange={(e) => this.props.onChange(e)}
                                value={this.props.date}
                                selectRange={true}
                                minDate={new Date()}
                                next2Label={<TimeRangePicker
                                    format="hh:mm a"
                                    clearIcon={null}
                                    clockIcon={null}
                                    disableClock={true}
                                    value={["9:00", "15:00"]}/>}
                            />
                            
                        </div>
                    </div>
                </div>
                <div className="column is-1"/>
                <div className="column is-6 py-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <h1 className="pt-6 is-pulled-right">Status:<span className="tag is-danger ml-2 is-align-self-flex-end">Incomplete</span></h1>
                </div>
            </div>
            )
        }
    }

export default EventCalendar