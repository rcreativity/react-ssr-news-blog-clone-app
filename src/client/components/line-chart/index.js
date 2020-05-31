import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { ChartContainer } from './styled';

export default function MyResponsiveLine({ data }) {
  return (
    <ChartContainer>
      <ResponsiveContainer height="40%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            // label="ID"
          />
          <YAxis
          // label="Vote Counts"
          />
          <Tooltip />
          <Line
            connectNulls={true}
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
