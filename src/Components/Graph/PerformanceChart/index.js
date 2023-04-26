import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

import PropTypes from "prop-types";

import "./styles.scss";

/**
 * Component used to display the radar chart of the performance data
 * @component
 * @param {data} data - the data of the chart (performance data for one user : cardio, strength, speed, endurance, energy, intensity)
 * @returns {JSX} - the JSX of the RadarChart component
 */
function PerformanceChart({ data }) {
  console.log(data);
  const formatData = [
    {
      subject: "Intensité",
      A: data.intensity,
    },
    {
      subject: "Cardio",
      A: data.cardio,
    },
    {
      subject: "Energie",
      A: data.energy,
    },
    {
      subject: "Endurance",
      A: data.endurance,
    },
    {
      subject: "Force",
      A: data.strength,
    },
    {
      subject: "Vitesse",
      A: data.speed,
    },
  ];
  return (
    <div className="wrapper-perfChart">
      <ResponsiveContainer className="radarChart">
        <RadarChart
          padding={{
            top: 15,
            right: 15,
            bottom: 15,
            left: 15,
          }}
          data={formatData}
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            tick={{ fill: "#FFFFFF", fontSize: 10 }}
            radius="60%"
            fontSize={12}
            color={"#ffffff"}
            dataKey="subject"
          />
          <Radar
            legendType="none"
            name="Performance"
            dataKey="A"
            stroke="#ffffff"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;

PerformanceChart.propTypes = {
  data: PropTypes.shape({
    intensity: PropTypes.number.isRequired,
    cardio: PropTypes.number.isRequired,
    energy: PropTypes.number.isRequired,
    endurance: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
  }).isRequired,
};

PerformanceChart.defaultProps = {
  data: {
    intensity: 0,
    cardio: 0,
    energy: 0,
    endurance: 0,
    strength: 0,
    speed: 0,
  },
};
