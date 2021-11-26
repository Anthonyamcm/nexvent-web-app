import React, {Component} from "react";
import Select from 'react-select'

class EventTags extends Component{
    render(){

        const options = [
            { value: 'festival', label: 'Festival' },
            { value: 'performance', label: 'Performance' },
            { value: 'fair', label: 'Fair' },
            { value: 'drag', label: 'Drag' },
            { value: 'show', label: 'Show' },
        ]

        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field py-6">
                        <div className="control">
                            <Select 
                                options={options}
                                name='tags' 
                                value={this.props.value} 
                                isMulti 
                                onChange={(e) => this.props.onChange(e)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventTags