import React from "react";
import Customer from "../../assets/Screenshot 2024-03-16 at 5.11.23 PM.png";
import target from "../../assets/Screenshot 2024-03-16 at 5.17.16 PM.png";
import Hero from '../../assets/passportPhoto.jpeg'
import { MdCurrencyRupee } from "react-icons/md";

export default function StatusChart() {
  return (
    <div className="  h-[250px] flex gap-5 justify-between  items-center bg[#F5F5F5]">
      <div className=" w-[400px]  bg-[#F5F5F5] gap-4  py-4 shadow-lg h-[205px] rounded-2xl">
        <img src={Customer} className=" h-[190px] rounded-2xl w-full" alt="" />
      </div>
      <div className=" p-3 w-[660px]  bg-[#F5F5F5] gap-4   shadow-lg h-[205px] rounded-2xl">
        <div className=" flex justify-between items-center mb-2">
        <p className=" text-left pl-4">Recent Orders</p>
        <a class=" cursor-pointer text-sm text-blue-600 flex items-center dark:text-blue-500 hover:underline">See all</a>
        </div>
        {/* <img src={userList} className=" h-[185px] rounded-2xl w-full" alt="" /> */}

        <div class="relative  overflow-x-auto ">
          
          <table class="w-full text-sm text-left rtl:text-right ">
            <thead class="text-xs text-gray-700 uppercase bg-[#E3E3E3] ">
              <tr>
                
                <th scope="col" class="px-6 py-1">
                  Profile
                </th>
                <th scope="col" class="px-6 py-1">
                  City
                </th>
                <th scope="col" class="px-6 py-1">
                  Date
                </th>
                <th scope="col" class="px-6 py-1">
                  Status
                </th>
                <th scope="col" class="px-6 py-1">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                
                <th
                  scope="row"
                  class="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src={Hero}
                    alt="Jese image"
                  />
                  
                </th>
                <td class="px-6 py-4">Mandalay</td>
                <td class="px-6 py-4">16-03-2024</td>
                
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Delivered
                  </div>
                </td>
                <td class="px-6 py-4">

                  <p
                    
                    class="font-medium text-blue-600 flex items-center dark:text-blue-500 hover:underline"
                  >
                   <MdCurrencyRupee style={{color:"black"}} className=" w-4 h-4" /> 23,900
                  </p>
                </td>
              </tr>
              <tr class="bg-white border-b">
                
                <th
                  scope="row"
                  class="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src={Hero}
                    alt="Jese image"
                  />
                  
                </th>
                <td class="px-6 py-4">Mandalay</td>
                <td class="px-6 py-4">16-03-2024</td>
                
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Delivered
                  </div>
                </td>
                <td class="px-6 py-4">

                  <p
                    
                    class="font-medium text-blue-600 flex items-center dark:text-blue-500 hover:underline"
                  >
                   <MdCurrencyRupee style={{color:"black"}} className=" w-4 h-4" /> 23,900
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" p-3   bg-[#F5F5F5] gap-4  py-4 shadow-lg h-[205px] rounded-2xl">
        <img src={target} className=" h-[140px] rounded-2xl w-full" alt="" />
      </div>
    </div>
  );
}
