import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'

import './styles.scss'

function PerformanceChart({ data }) {
  
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
    <div className='wrapper-perfChart'>
      <ResponsiveContainer className='radarChart' >
      <RadarChart padding={{
            top: 15,
            right: 15,
            bottom: 15,
            left: 15,
          }} data={formatData}>
        <PolarGrid 
          gridType="polygon" 
          radialLines={false}  />
        <PolarAngleAxis 
          tick={{ fill: '#FFFFFF', fontSize: 12 }} 
          radius='80%' fontSize={12} color={'#ffffff'} 
          dataKey="subject" />
        <Radar 
          legendType='none' 
          name="Performance" 
          dataKey="A" 
          stroke="#ffffff" 
          fill="#FF0101" 
          fillOpacity={0.7} />
      </RadarChart>
      </ResponsiveContainer>
    </div>
    );
}


export default PerformanceChart