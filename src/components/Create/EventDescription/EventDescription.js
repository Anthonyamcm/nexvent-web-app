import React, {Component} from "react";
import TextArea from "../../TextArea/TextArea";


class EventDescription extends Component {
    render(){
        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field py-6 pb-5">
                        <div className="control">
                            <TextArea/>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }

export default EventDescription