import React,{Component} from "react";
import { AreaChart, Area, XAxis,Tooltip ,ResponsiveContainer} from 'recharts';

const data = [
  {
    name: 'Mon',
    posts: 10,
  },
  {
    name: 'Tue',
    posts: 6,
  },
  {
    name: 'Wed',
    posts: 10,
  },
  {
    name: 'Thu',
    posts: 3,
  },
  {
    name: 'Fri',
    posts: 6,
  },
  {
    name: 'Sat',
    posts: 2,
  },
  {
    name: 'Sun',
    posts: 6,
  },
];

const tooltipStyle = {
  borderRadius: '12px',
  border: 'none',
}

class DashboardGraph extends Component{
    render(){
        return(
            <div className="tile">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                      <div className="is-flex">
                        <div style={{flex: 1}}>
                            <p className="title is-size-4">Your Activity</p>
                            <p className="subtitle is-size-6">8 Nov 2020 - 14 Nov 2020</p>
                        </div>
                        <div class="select">
                            <select>
                                <option>Last Week</option>
                            </select>
                        </div>
                        </div>
                        <ResponsiveContainer width={'99%'} aspect={3}>           
                          <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#0072FF" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="#00c6ff" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                                <XAxis dataKey="name" interval="preserveStartEnd" axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={tooltipStyle} cursor={{ strokeWidth: 2 }}/>
                                <Area type="monotone" dataKey="posts" stroke="#0072FF" strokeWidth={4} isAnimationActive={false} fillOpacity={1} fill="url(#colorUv)"/>
                         </AreaChart>
                         </ResponsiveContainer>
                    </article>
                </div>
            </div>
        )
    }
}

export default DashboardGraph;