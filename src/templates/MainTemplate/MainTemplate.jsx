import React, { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { Outlet } from "react-router-dom";
import CookieService from "../../utils/cookieService";
import { history } from "../..";

const MainTemplate = () => {
  const access_token = CookieService.getCookie('access_token');
  useEffect(()=>{
    if(!access_token) history.push('log-in')
  },[])
  return <div className="flex flex-col h-screen max-h-screen ">
          <div className="flex-grow-0">
            <HeaderComponent/>  
          </div>
          <div className="flex-grow">
              <Outlet/>
          </div>
  </div>;
};

export default MainTemplate;
