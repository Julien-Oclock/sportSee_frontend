import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

import './styles.scss'


function GoalChart({ data }) {
  const progression = data;
  const remainsToBeDone = 1 - progression;
  const dataGoal = [
    { name: 'progression', value: progression },
    { name: 'remainsToBeDone', value: remainsToBeDone },
  ];
  const COLORS = ['#FF0000', '#ffffff'];

  const CustomizedLegend = () => {
    return (
      <div className="goalChart__legend">
        <p>
          <span className="goalChart__percentage">{`${progression * 100}%`}</span>
          <br />
          de votre
          <br />
          objectif
        </p>
      </div>
    );
  };

  return (
    <div className="goalChart chart-item">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataGoal}
            dataKey="value"
            nameKey="name"
            innerRadius={90}
            outerRadius={105}
            fill="#8884d8"
            labelLine={false}
          >
            {dataGoal.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend 
            content={<CustomizedLegend />}
            align='center'
            verticalAlign='middle'
            layout='vertical'
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GoalChart;