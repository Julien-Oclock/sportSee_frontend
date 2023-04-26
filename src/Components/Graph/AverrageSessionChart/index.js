import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import "./styles.scss";

/**
 * This component is used to display a custom tooltip for the AverageSessionsChart component
 * @component
 * @param {boolean} active - true if the tooltip is active
 * @param {object} payload - the data of the tooltip
 * @returns {JSX} - the JSX of the CustomTooltip component
 */
const CustomTooltip = ({ active, payload }) => {
  console.log(active);
  if (active && payload && payload.length) {
    return (
      <div className="averageSessionsChart__customTooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Component used to display the line chart of the average sessions
 * @component
 * @param {data} data - the data of the chart
 * @returns {JSX} - the JSX of the AverageSessionsChart component
 */
const AverageSessionsChart = ({ data }) => {
  console.log(data.sessions);
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  /**
   * Function used to format the data of the chart
   * @returns {array} - the formatted data of the chart
   */
  const formatData = () => {
    if (data && data.sessions && data.sessions.length > 0) {
      const formattedData = [];
      for (let i = 0; i < daysOfWeek.length; i++) {
        const sessionForDay = data.sessions.find(
          (session) => session.day === i + 1
        );
        formattedData.push({
          day: daysOfWeek[i],
          sessionLength: sessionForDay.sessionLength,
        });
      }
      return formattedData;
    }
    return [];
  };

  const chartData = formatData();

  return (
    <div className="averageSessionsChart">
      <h2>Durée des sessions</h2>
      <ResponsiveContainer height="95%" width="100%">
        <LineChart data={chartData}>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="day"
            stroke="#ffffff"
          />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;

AverageSessionsChart.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

AverageSessionsChart.defaultProps = {
  data: {
    sessions: [],
  },
};
