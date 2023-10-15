import React from 'react'
import Card from './Card'
import cardData from '../cardData'
import { FaSistrix, FaAngleDown } from 'react-icons/fa'

function Cards() {
  // console.log(cardData);
  return (
    <div className='flex flex-col gap-4 mt-[-10px]' >
      <div className='heading-card flex justify-between mb-[10px]'>
        <div>
          <h3 className='font-bold'>Hello Shahrukh</h3>

        </div>
        <div className=' card-search-icon flex'>

          <span className='searchicon pt-[3px]  bg-white '> <FaSistrix /></span><span className=''><input className='input bg-white rounded-sm w-[110px]' type="text" placeholder='Search Here' /></span>
        </div>
      </div>

      <div className='cards'>
        {
          cardData.map((data) =>
            (<Card {...data} />)
          )
        }
      </div>
    </div>
  )
}

export default Cards

