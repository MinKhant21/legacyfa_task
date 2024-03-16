import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Dashboard from "../Dashboard";

export default function Layout() {
  return (
    <div className=" h-screen p-5 flex gap-5">
      
          <SideBar />
          <Dashboard />
        
    </div>
  );
}
