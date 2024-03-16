import React from "react";
import Header from "./components/Header";
import SalesSummary from "./components/SalesSummary";
import StatusBlock from "./components/StatusBlock";
import StatusChart from "./components/StatusChart";

export default function Dashboard() {
  return (
    <div className=" h-full w-full">
      <Header/>
      <SalesSummary/>
      <StatusBlock/>
      <StatusChart/>
    </div>
  );
}
