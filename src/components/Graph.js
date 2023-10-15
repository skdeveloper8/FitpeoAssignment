import React from 'react'
import Overview from './Overview'
import Customers from './Customers'

function Graph() {
  return (
    <div className='graph' >
      <div className=' overview '>
        <Overview />
      </div>

      <div className='Customers'>
        <div className=' '>
          <h3 className='font-bold'>Customers</h3>
          <p className='text-[12px]'>Customers That buy Products</p>
        </div>
        <div className='customersMedia' >
          <Customers />
        </div>

      </div>
    </div>
  )
}

export default Graph