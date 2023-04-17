import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import './styles.scss'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="averageSessionsChart__customTooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

const AverageSessionsChart = ({ data }) => {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const formatData = () => {
    if (data && data.sessions && data.sessions.length > 0) {
      const formattedData = [];
      for (let i = 0; i < daysOfWeek.length; i++) {
        const sessionForDay = data.sessions[0].find(session => session.day === i + 1);
          formattedData.push({ day: daysOfWeek[i], sessionLength: sessionForDay.sessionLength });
      }
      return formattedData;
    }
    return [];
  };

  const chartData = formatData();

  return (
    <div className="averageSessionsChart">
      <h2>Durée des sessions</h2>
      <ResponsiveContainer height='95%' width="100%">
        <LineChart data={chartData}>
          <XAxis axisLine={false} tickLine={false} dataKey="day" stroke="#ffffff" />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;