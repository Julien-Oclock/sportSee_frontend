import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";

/**
 * Renders a radial bar graph that displays the user's activity score.
 * @param {array} data user's score
 * @returns
 */
function GoalChart({ data }) {

  console.log(data);
  return (
    <RadialBarChart
      width={343}
      height={343}
      data={data}
      cx={160}
      cy={160}
      innerRadius={100}
      //outerRadius={18}
      barSize={15}
      startAngle={210}
      endAngle={-30}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 1]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        fill="#E60000"
        background
        dataKey="value"
        cornerRadius={30 / 2}
      />
      <text
        x={39}
        y={38}
        dominantBaseline="middle"
        fontWeight={500}
        fontSize={15}
        fill="#20253A"
      >
        Score
      </text>
      <text x={135} y={150} fontWeight={700} fontSize={26} fill="#282D30">
        {data * 100 + "%"}
      </text>

      <text
        x={130}
        y={170}
        fontWeight={500}
        fontSize={16}
        fill="#74798C"
        dominantBaseline="middle"
      >
        de votre
      </text>

      <text
        x={130}
        y={195}
        fontWeight={500}
        fontSize={16}
        fill="#74798C"
        dominantBaseline="middle"
      >
        objectif
      </text>
    </RadialBarChart>
  );
}

GoalChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GoalChart;

