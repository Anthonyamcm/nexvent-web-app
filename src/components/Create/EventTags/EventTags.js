import React, {Component} from "react";
import Select from 'react-select'

class EventTags extends Component{
    render(){

        const options = [
            { value: 'Festival', label: 'Festival' },
            { value: 'Performance', label: 'Performance' },
            { value: 'Fair', label: 'Fair' },
            { value: 'Drag', label: 'Drag' },
            { value: 'Show', label: 'Show' },
            { value: '18+', label: '18+' },
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
                <div className="column is-1"/>
                <div className="column is-6 py-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <h1 className="pt-6 is-pulled-right">Status:<span className={`tag ml-2 ${this.props.value.length > 0 ? 'is-success': 'is-danger'}`}>{this.props.value.length > 0 ? 'Complete' : 'Incomplete'}</span></h1>
                </div>
            </div>
        )
    }
}

export default EventTags