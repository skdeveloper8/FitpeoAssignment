import React from 'react'
import productData from '../productData'
import Product from './Product'
import { FaSistrix,FaAngleDown } from 'react-icons/fa'

function Products() {
  return (
    <div className=' Productpage'>
      <div className='products flex justify-between mt-[-15px] font-bold m-[0px]'>
        <div>
          <h3>Product Sell</h3>

        </div>
        <div className='flex '>
         <span className='searchicon pt-[3px]  bg-white '> <FaSistrix /></span><span className=''><input  className='inputSearch bg-white rounded-sm w-[130px]' type="text" placeholder='Search Here' /></span><span className='text-[14px] ml-[10px] rounded-sm mr-[10px] bg-white font-light'>Last 30 days </span><span className='mr-[10px] m-auto'><FaAngleDown/></span>
        </div>

      </div>
      <div className='product-na flex justify-between m-[10px]'>
        <p>Product Name</p>
        <div className='sales'>
          <p>Stock</p>
          <p>Price</p>
          <p>Total Sales</p>
        </div>
      </div>
      <hr className='bg-black  w-[95vw] h-[2px] '/>


      <div>
        {
          productData.map((data) => {
            return <Product {...data} />
          })
        }
      </div>

    </div>
  )
}

export default Products