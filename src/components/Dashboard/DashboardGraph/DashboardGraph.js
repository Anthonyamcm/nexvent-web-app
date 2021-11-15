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



class DashboardGraph extends Component{
    render(){
        return(
                    <article className="tile is-child box" >
                      <div className="is-flex pb-5">
                        <div style={{flex: 1}}>
                            <p className="title is-size-4">Your Activity</p>
                            <p className="subtitle is-size-6">8 Nov 2020 - 14 Nov 2020</p>
                        </div>
                        <div className="select">
                            <select>
                                <option>Last Week</option>
                            </select>
                        </div>
                        </div>
                        <div style={{padding: 5}}>
                        <ResponsiveContainer width={'99%'} aspect={2.5}>           
                          <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#0072FF" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="#00c6ff" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                                <XAxis dataKey="name" interval="preserveStartEnd" axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{borderRadius: 12}} cursor={{ strokeWidth: 2}}/>
                                <Area type="monotone" dataKey="posts" stroke="#0072FF" strokeWidth={4} isAnimationActive={false} fillOpacity={1} fill="url(#colorUv)"/>
                         </AreaChart>
                         </ResponsiveContainer>
                         </div>
                    </article>
            )
        }
}

export default DashboardGraph;