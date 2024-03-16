import React from 'react'
import Customer from '../../assets/Screenshot 2024-03-16 at 5.11.23 PM.png'
import userList from '../../assets/Screenshot 2024-03-16 at 5.16.07 PM.png'
import target from '../../assets/Screenshot 2024-03-16 at 5.17.16 PM.png'
export default function StatusChart() {
  return (
     <div className="  h-[250px] flex gap-5 justify-between  items-center">
      <div className=" w-[400px]  bg-[#F5F5F5] gap-4  py-4 shadow-lg h-[205px] rounded-2xl">
        <img src={Customer} className=" h-[190px] rounded-2xl w-full" alt="" />
      </div>
      <div className=" p-3 w-[660px]  bg-[#F5F5F5] gap-4   shadow-lg h-[205px] rounded-2xl">
        {/* <p className=" text-left pl-4">Weekly Sales</p> */}
        <img src={userList} className=" h-[185px] rounded-2xl w-full" alt="" />
      </div>
      <div className=" p-3   bg-[#F5F5F5] gap-4  py-4 shadow-lg h-[205px] rounded-2xl">
        <img src={target} className=" h-[140px] rounded-2xl w-full" alt="" />
      </div>
    </div>
    
  )
}
