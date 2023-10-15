import React, { useState } from 'react'
import Bar from './Bar'
import data from '../data'
import { FaAngleDown } from "react-icons/fa";

function Overview() {
  //  const [datausing,setDataUsing]=useState(data)
  // console.log(datausing);

  return (
    <div className='main'>
      <div className="sub-main-overview ">

        <div>
          <h3 className='text-xl font-bold ml-[15px]'>Overview</h3>
          <p className='ml-[15px]'>Monthly Earnings</p>
        </div>

        <div className='Quants '>
          <p className='quant'>Quantity </p> <div className='quant2'><FaAngleDown />
          </div>
        </div>

      </div>


      <div className='bars'>
        {

          data.map((datum) =>
            (<Bar {...datum} />)
          )

        }
      </div>
      {/* <Bar data={data}></Bar> */}




    </div>
  )
}

export default Overview