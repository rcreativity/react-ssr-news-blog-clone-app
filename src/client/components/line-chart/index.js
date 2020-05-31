import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function MyResponsiveLine({ data }) {
  return (
    <div>
      <LineChart
        width={600}
        height={200}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line connectNulls={true} type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </div>
  );
}
