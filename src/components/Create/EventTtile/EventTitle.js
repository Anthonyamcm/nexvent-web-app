import React, {Component} from "react";
import Input from "../../Input/Input";

class EventTitle extends Component{
    render(){
        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field pt-6">
                        <div className="control">
                            <Input
                            value={this.props.value}
                            type="text"
                            name="title" 
                            id="title"
                            placeholder='e.g Manic Monday' 
                            onChange={(e) => this.props.onChange(e)}/>
                        </div>
                    </div>
                </div>
                <div className="column is-1"/>
                <div className="column is-6 py-6 pl-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <h1 className="pt-6 is-pulled-right">Status:<span className={`tag ml-2 ${this.props.value !== '' ? 'is-success': 'is-danger'}`}>{this.props.value !== '' ? 'Complete' : 'Incomplete'}</span></h1>
                </div>
            </div>
        )
    }
}

export default EventTitle