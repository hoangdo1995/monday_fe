import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return <div className="h-screen flex flex-col overflow-hidden">
          <div className="">
            <HeaderComponent/>  
          </div>
          <div className="h-full">
              <Outlet/>
          </div>
  </div>;
};

export default MainTemplate;
