import React from 'react'

function Bar(datum) {
  //console.log(datausing[0]);
  // console.log(datum);
  //let datum=props.datum;
  // {datum.height}
  return (
    <div  >
      <div  className='bar 'style={{ height: `${datum.height}`}} ></div>
         <div className='month'> {datum.month}</div>
    </div>
  )
}

export default Bar