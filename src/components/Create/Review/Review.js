import React, {Component} from "react";
import './Review.scss'

class Review extends Component{
    render(){
        return(
            <div className='columns'>
                <div className='column is-5 p-6'>
                    <div className=" image-container box is-centered" style={{height: '400px', borderRadius: '12px'}}/>
                </div>
                <div className='column is-2'/>
                <div className='column is-5 py-6 pr-6'>
                    <div className=" image-container box is-centered" style={{height: '400px', borderRadius: '12px'}}/>
                </div>
            </div>
        )
    }
}

export default Review