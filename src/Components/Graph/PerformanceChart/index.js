import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'

import './styles.scss'

function PerformanceChart({ data }) {
  
  const formatData = [
    {
      subject: "cardio",
      A: data.cardio,
    },
    {
      subject: "energy",
      A: data.energy,
    },
    {
      subject: "endurance",
      A: data.endurance,
    },
    {
      subject: "strength",
      A: data.strength,
    },
    {
      subject: "speed",
      A: data.speed,
    },
    {
      subject: "intensity",
      A: data.intensity,
    },
  ];
  return (
    <div className='wrapper-perfChart'>
      <ResponsiveContainer width="90%" height="90%" className='radarChart' >
      <RadarChart data={formatData}>
        <PolarGrid gridType="polygon" radialLines={false}  />
        <PolarAngleAxis radius='80%' fontSize={12} color={'#ffffff'} dataKey="subject" />
        <Radar legendType='none' name="Performance" dataKey="A" stroke="#ffffff" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
      </ResponsiveContainer>
    </div>
    );
}


export default PerformanceChart