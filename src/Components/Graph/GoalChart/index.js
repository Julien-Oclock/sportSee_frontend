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
      <ResponsiveContainer width={270} height={270}>
        <PieChart height={400} width={400}>
          <Pie
            height={230}
            width={230}
            data={dataGoal}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={80}
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