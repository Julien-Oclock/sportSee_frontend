import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import PropTypes from "prop-types";

import "./styles.scss";

/**
 * This component is used to display a custom tooltip for the WeightGraph component
 * @param {boolean} active - true if the tooltip is active
 * @param {object} payload - the data of the tooltip
 * @returns {JSX} - the JSX of the CustomTooltip component
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0].value}Kg`}</p>
        <p className="label">{` ${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

/**
 * Component used to display the bar chart of the weight/spending calories for one week
 * @component
 * @param {session} sessions - the data of the chart
 * @returns {JSX} - the JSX of the WeightGraph component
 */
const WeightGraph = ({ sessions }) => {
  return (
    <div className="weight-wrapper">
      <h3 className="weight-title">Activité quotidienne</h3>
      <ResponsiveContainer className="weight-graph" width={"100%"} height={350}>
        <BarChart
          barGap={10}
          data={sessions}
          margin={{
            top: 100,
            bottom: 0,
            left: 50,
          }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            tickLine={false}
            tickMargin={15}
            dataKey="day"
            tickFormatter={(date) => new Date(date).getDate()}
            stroke="#9B9EAC"
          />
          <YAxis
            yAxisId={"kilogramAxisId"}
            axisLine={false}
            tickLine={false}
            tickCount={3}
            dataKey="kilogram"
            type="number"
            orientation="right"
            tickMargin={15}
            stroke="#9B9EAC"
          />
          <YAxis
            tick={false}
            yAxisId={"caloriesAxisId"}
            axisLine={false}
            dataKey="calories"
            orientation="right"
          />
          <Tooltip
            allowEscapeViewBox={{
              x: true,
              y: true,
            }}
            position={{ y: -50 }}
            wrapperStyle={{
              background: "#E60000",
              border: "none",
              outline: "none",
              position: "absolute",
              top: "50%",
              left: "0",
              fontSize: "9px",
            }}
            content={<CustomTooltip />}
          />
          <Bar
            yAxisId={"kilogramAxisId"}
            dataKey="kilogram"
            barSize={10}
            radius={[50, 50, 0, 0]}
            fill="#282D30"
          />
          <Bar
            yAxisId={"caloriesAxisId"}
            dataKey="calories"
            barSize={10}
            radius={[50, 50, 0, 0]}
            fill="#E60000"
          />
          <Legend
            width={250}
            wrapperStyle={{ top: 30, left: "60%" }}
            iconType="circle"
            content={(props) => {
              const { payload } = props;
              return (
                <div className="legend">
                  {payload.map((entry, index) => (
                    <p key={`item-${index}`} className="legend-item">
                      <div
                        className={
                          entry.value === "calories" ? "dot-red" : "dot-black"
                        }
                      >
                        {" "}
                      </div>
                      {entry.value === "calories"
                        ? "Calories brûlées (Kcal)"
                        : "Poids (Kg)"}
                    </p>
                  ))}
                </div>
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightGraph;

WeightGraph.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

WeightGraph.defaultProps = {
  sessions: [
    {
      day: "",
      kilogram: 0,
      calories: 0,
    },
  ],
};
