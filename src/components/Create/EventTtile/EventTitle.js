import React, {Component} from "react";
import Input from "../../Input/Input";

class EventTitle extends Component{
    render(){
        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field py-6">
                        <div className="control">
                            <Input
                            value={this.props.value}
                            type="text"
                            name="title" 
                            id="title"
                            placeholder='e.g Manic Mondays' 
                            onChange={(e) => this.props.onChange(e)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventTitle