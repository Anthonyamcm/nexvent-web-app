import React, {Component} from "react";
import Files from 'react-files';

class EventImage extends Component{
    render(){
        return(
            <div className='columns'>
                <div className='column is-5'>
                    <div className="field py-6">
                        <div className="control">
                            <Files
                                className="files-dropzone is-flex"
                                onChange={this.onFilesChange}
                                onError={this.onFilesError}
                                accepts={['image/*']}
                                multiple={false}
                                clickable>
                                Drop files here or click to upload
                            </Files>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventImage