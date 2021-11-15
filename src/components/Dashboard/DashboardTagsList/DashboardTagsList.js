import React, {Component} from "react";



class DashboardTagsList extends Component {
    render(){
        return(
            <article className="tile is-child box">
                <div className="is-flex pb-5">
                    <div style={{flex: 1}}>
                        <p className="title is-size-4">Tags</p>
                        <p className="subtitle is-size-6">Popularity</p>
                    </div>
                    <div className="select">
                        <select>
                            <option>High</option>
                            <option>Low</option>
                        </select>
                    </div>
                </div>
                <div style={{overflowY: 'scroll', overflowX: 'hidden', height: "80%", padding: 20 }}>
                    <div className="columns">
                        <div className="column is-full">
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="69" max="100">69%</progress>
                                </div>
                                <div className="column is-3">
                                    <p>69%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress" value="60" max="100">60%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>60%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="55" max="100">55%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>55%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="43" max="100">43%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>43%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="30" max="100">30%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>30%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="19" max="100">19%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>19%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default DashboardTagsList