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
            </div>
            )
        }
    }

export default EventCalendar