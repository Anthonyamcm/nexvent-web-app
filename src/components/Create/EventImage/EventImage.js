import React, {Component} from "react";
import {FaUpload} from 'react-icons/fa'
import './EventImage.scss'

class EventImage extends Component{
    render(){
        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field py-6">
                        <div className="control">
                            <div className="file has-name is-boxed">
                            <label className="file-label">
                                <input className="file-input" type="file" onChange={(e) => this.props.onChange(e)} name="image"/>
                                <span className="file-cta">
                                <span className="file-icon">
                                    <FaUpload/>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                                </span>
                                <span className="file-name">
                                {this.props.imageName}
                                </span>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-1"/>
                <div className="column is-6 py-6 pl-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <h1 className="pt-6 is-pulled-right">Status:<span className={`tag ml-2 ${this.props.imageURL !== '' ? 'is-success': 'is-danger'}`}>{this.props.imageURL !== '' ? 'Complete' : 'Incomplete'}</span></h1>
                </div>
            </div>
        )
    }
}

export default EventImage