import React, { useEffect, useState } from 'react';

import {  AreaChart, Area,CartesianGrid,BarChart, Bar,XAxis, YAxis,Tooltip,LineChart,Line,Legend,ResponsiveContainer,ComposedChart,Scatter} from 'recharts';

const Chart = () => {
    const axios = require('axios');
  const [data, setData] = useState([]);
  useEffect(() => { 
    axios.get('data.json')
      .then(data => setData(data.data));
  }, [data]);
  return (
    
    <>
      <ResponsiveContainer width="100%" height="100%">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-8 lg:p-10 ">
         <div className="grid-cols-1 mb-10">
           <BarChart width={400} height={400}data={data} className='h-screen w-screen'>
      <Bar dataKey="sell" fill="#8884d8" />
      <XAxis dataKey="month"></XAxis>
        <Tooltip></Tooltip>
        <Legend />
      <YAxis></YAxis>
    </BarChart>
          </div>
          <div className="grid-cols-1 mb-10 ">
<AreaChart
          width={400}
          height={400}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
        <Tooltip />
        <Legend />
          <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8"  />
        </AreaChart>
          </div>

          <div className="grid-cols-1 mb-10">
            <LineChart
          width={400}
          height={400}
          data={data}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
          </div>
          <div className="grid-cols-1">
                <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="investment" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          <Scatter dataKey="revenue" fill="red" />
        </ComposedChart>
          </div>
   

        
     </div>

      </ResponsiveContainer>
      
    </>
    
      
    
  
  );
};

export default Chart;