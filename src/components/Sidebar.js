import React, { useState } from 'react'
import { AiFillDashboard,AiFillAppstore,AiFillDatabase,AiFillContacts,AiFillPhone,AiFillNotification,AiFillAccountBook,AiOutlineArrowRight ,AiOutlineArrowDown} from "react-icons/ai";
import {FaAngleLeft} from 'react-icons/fa'
import upma from '../assets/upma.jpg'

function Sidebar() {
  
  return (
    <div  className='main-Sidebar'>

   
    <div className='bg-blue-700 h-screen w-[220px] flex flex-col'>
      <div className='text-2xl font-bold text text-center flex ml-[10px] mt-[5px]'><div className='reacticon'><AiFillAppstore/></div>
        DashBoard  
      </div>
      <div className='dashboard'>
        <ul >
          <li className='flex cont'><div className='reacticon'><AiFillDashboard/></div>Dashboard <div className='reacticon icon'> <AiOutlineArrowRight/></div></li>
          <li  className='flex cont'><div className='reacticon'><AiFillDatabase/></div>Products <div className='reacticon icon'> <AiOutlineArrowRight/></div></li>
          <li className='flex cont'><div className='reacticon'><AiFillContacts/></div>Customers <div className='reacticon icon'> <AiOutlineArrowRight/></div></li>
          <li className='flex cont'><div className='reacticon'><AiFillAccountBook/></div>Income <div className='reacticon icon'> <AiOutlineArrowRight/></div></li>
          <li className='flex cont'><div className='reacticon'><AiFillNotification/></div>Promote <div className='reacticon icon'> <AiOutlineArrowRight/></div> </li>
          <li className='flex cont'><div className='reacticon'><AiFillPhone/></div>Help <div className='reacticon icon'> <AiOutlineArrowRight/></div></li>
        </ul>
      </div>
      
      <div className='manager'>
        <div><img className=' pic h-[30px] w-[30px]' src={upma} /></div>
        <div >
          <div className='name'>Evano</div>   
          <div className='project'>Project Manager<AiOutlineArrowDown/></div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar