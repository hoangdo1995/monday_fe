import React from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import LogoComponent from "../../components/LogoComponent";
import { Outlet, useLocation, useOutlet } from "react-router-dom";

const SignUpTemplate = (props) => {
    const listPanelImage = {
        'page-1':'https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png',
        'page-2':'https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png',
        'page-3':'https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-many-people-work-at-your-company.png'
    }
    const location = useLocation();
    const pathListSplit = location.pathname.split('/');
    const endPoint = pathListSplit[pathListSplit.length-1];

  return <div className="login-page">
        <div className="content flex">
            <div className="login-form w-full min-w-screen-lg flex items-center justify-center h-screen px-4">
                <div className="content max-h-full w-full py-10 min-w-fit flex flex-col justify-between h-screen ps-0 lg:ps-20" style={{maxHeight:'1000px'}}>
                    <div className="sign-in-header">
                        <LogoComponent/>
                    </div>
                    <Outlet/>
                </div>
            </div>
            <div className="login-panel max-w-screen-sm hidden sm:block h-screen" style={{maxWidth:'40%'}}>
                <div className="content h-full items-center" style={{overflow:'hidden'}}>
                    <img className="w-screen-sm min-h-screen" style={{objectFit:'cover'}} src={listPanelImage[endPoint]} alt="" />
                </div>
            </div>
        </div>
  </div>;
};

export default SignUpTemplate;
