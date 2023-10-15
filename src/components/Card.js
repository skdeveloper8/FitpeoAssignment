import React from 'react'
import { MdAttachMoney } from "react-icons/fa";

function Card(data) {
    // 
    console.log(data);
  return (
    <div className='card'>
        <div className='cardIcon'style={{ background: `${data.bgcolor}`,color:`${data.color}` }}>
        
            {data.icon}
           
        </div>
        <div className='carddata mt-[12px] mr-[12px]'>
            <p className='font-light text-[15px] '>{data.type}</p>
            <p className='font-bold '>{data.money}</p>
            <div className='text-[15px] flex gap-1'>
                <div style={{ color: `${data.color}` }}>{data.increment}</div>
                <div>this month</div> 
                 </div>
        </div>
    </div>
  )
}

export default Card