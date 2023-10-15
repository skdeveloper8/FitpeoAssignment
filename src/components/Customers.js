import React, { PureComponent } from 'react';
import { PieChart, Pie,  Cell,  } from 'recharts';

const data = [
  { name: 'Group A', value: 350 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 450 },

];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Customers extends PureComponent {
  

  render() {
    return (
    <div className='pieChart'>
      <PieChart width={280} height={300} onMouseEnter={this.onPieEnter}>
        <Pie className='Pie'
          data={data}
          cx={87}
          cy={90}
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
         
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       
      </PieChart>
      </div>
    );
  }
}
