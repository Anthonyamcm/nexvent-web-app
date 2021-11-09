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
                <div style={{overflowY: 'scroll', overflowX: 'hidden', height: "200px"}}>
                    <div className="columns">
                        <div className="column is-full">
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="55" max="100">55%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>99.9%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress" value="35" max="100">35%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>99%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="80" max="100">55%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>99%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="35" max="100">55%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>99%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="49" max="100">55%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>99%</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-2">
                                    <p>Tags</p>
                                </div>
                                <div className="column is-7">
                                    <progress class="progress"value="73" max="100">55%</progress>
                                </div>
                                <div className="column is-2">
                                    <p>99%</p>
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