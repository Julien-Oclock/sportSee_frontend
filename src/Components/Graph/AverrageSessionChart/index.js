import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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
      <LineChart width={250} height={250} data={chartData}>
        <XAxis dataKey="day" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <CartesianGrid stroke="#ffffff" strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
      </LineChart>
    </div>
  );
};

export default AverageSessionsChart;