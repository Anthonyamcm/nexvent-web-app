import React, {Component} from "react";

class DashboardList extends Component{
    render(){
        return(
            <div className="tile is-child box">
                <div className="is-flex pb-5">
                    <div style={{flex: 1}}>
                        <p className="title is-size-4">Your Events</p>
                    </div>
                    <div className="select">
                        <select>
                            <option>All</option>
                            <option>Ongoing</option>
                            <option>Finished</option>
                        </select>
                    </div>
                </div>
                <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '75%'}}>
                    <table class="table is-fullwidth is-hoverable">
                        
                        <tbody>
                            <tr>
                                <th>Placeholder</th>
                                <td>Manic Monday</td>
                                <td>90 Glassford St, Glasgow G1 1UR</td>
                                <td><span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span></td>
                                <td><span class="tag is-primary is-light">Ongoing</span></td>
                            </tr>
                            <tr>
                                <th>Placeholder</th>
                                <td>Manic Monday</td>
                                <td>90 Glassford St, Glasgow G1 1UR</td>
                                <td><span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span></td>
                                <td><span class="tag is-primary is-light">Ongoing</span></td>
                            </tr>
                            <tr>
                                <th>Placeholder</th>
                                <td>Manic Monday</td>
                                <td>90 Glassford St, Glasgow G1 1UR</td>
                                <td><span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span></td>
                                <td><span class="tag is-primary is-light">Ongoing</span></td>
                            </tr>
                            <tr>
                                <th>Placeholder</th>
                                <td>Manic Monday</td>
                                <td>90 Glassford St, Glasgow G1 1UR</td>
                                <td><span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span></td>
                                <td><span class="tag is-danger is-light">Finished</span></td>
                            </tr>
                            <tr>
                                <th>Placeholder</th>
                                <td>Manic Monday</td>
                                <td>90 Glassford St, Glasgow G1 1UR</td>
                                <td><span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span> <span class="tag is-dark">Tag</span></td>
                                <td><span class="tag is-danger is-light">Finished</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DashboardList