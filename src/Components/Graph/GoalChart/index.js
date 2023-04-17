import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

import './styles.scss'


function GoalChart({ data }) {
  const progression = data;
  const remainsToBeDone = 1 - progression;
  const dataGoal = [
    { name: 'remainsToBeDone', value: remainsToBeDone },
    { name: 'progression', value: progression },

  ];
  const COLORS = ['#ffffff','#FF0000'];

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
           
        <PieChart
          style={{ transform: 'rotate(-90deg)' }}>
          <Pie className='goalChart__pie'
            data={dataGoal}
            dataKey="value"
            nameKey="name"
            innerRadius={88}
            outerRadius={100}
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