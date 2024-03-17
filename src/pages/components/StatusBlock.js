import React from "react";
import weeklyStatus from "../../assets/Screenshot 2024-03-16 at 4.54.33 PM.png";
import SaleStatus from "../../assets/Screenshot 2024-03-16 at 4.59.18 PM.png";
import ProfitStatus from "../../assets/Screenshot 2024-03-16 at 5.04.18 PM.png";
import CharStatus from "../../assets/Screenshot 2024-03-16 at 5.06.01 PM.png";
export default function StatusBlock() {
  return (
    <div className="  mt-3 flex gap-5 justify-between   items-center">
      <div className=" p-3 w-[400px]  bg-[#F5F5F5] gap-4  py-4 shadow-lg h-[200px] rounded-2xl">
        <p className=" text-left pl-4">Weekly Sales</p>
        <img
          src={weeklyStatus}
          className=" h-[140px] rounded-2xl w-full"
          alt=""
        />
      </div>
      <div className=" flex gap-10 items-center">
        <div className=" p-3 w-full  bg-[#F5F5F5] gap-4  py-4 shadow-lg h-[200px] rounded-2xl">
          <p className=" text-left pl-4">Sales</p>
          <img
            src={SaleStatus}
            className=" h-[140px] rounded-2xl w-full"
            alt=""
          />
        </div>
        <div className=" p-3  w-full  bg-[#F5F5F5] gap-4  py-4 shadow-lg h-[200px] rounded-2xl">
          <p className=" text-left pl-4">Profit</p>
          <img
            src={ProfitStatus}
            className=" h-[140px] rounded-2xl w-full"
            alt=""
          />
        </div>
      </div>
      <div className=" p-3 w-[460px]  bg-[#F5F5F5] gap-4   shadow-lg h-[200px] rounded-2xl">
        {/* <p className=" text-left pl-4">Weekly Sales</p> */}
        <img
          src={CharStatus}
          className=" h-[170px] rounded-2xl w-full"
          alt=""
        />
      </div>
    </div>
  );
}
