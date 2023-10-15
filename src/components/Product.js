import React from 'react'

function Product(data) {

    return (
        <div>
            <div className='m-[10px] justify-between flex '>
                <div className=' flex'>
                    <img className='Product-image' src={data.img} alt="" />
                    <div>
                        <h3 className=' Product-Title font-bold'>{data.title}</h3>
                        <p className='Product-about'>{data.about}</p>
                    </div>
                </div>

                <div className=' Product-stock'>
                    <p>{data.stock} in stock</p>
                    <p className='font-bold'>{data.price}</p>
                    <p>{data.totalSales}</p>
                </div>



            </div>
        </div>
    )
}

export default Product