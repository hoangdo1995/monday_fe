import React from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import LogoComponent from "../../components/LogoComponent";
import { Outlet, useOutlet } from "react-router-dom";

const SignUpTemplate = (props) => {
    const outlet = useOutlet();
    const link = outlet.props.children.props.children.props;
    
  return <div className="login-page">
        <div className="content flex">
            <div className="login-form w-full min-w-screen-lg flex items-center justify-center h-screen px-4">
                <div className="content max-h-full w-full py-10 min-w-fit flex flex-col justify-between h-screen ps-0 lg:ps-20" style={{maxHeight:'1000px'}}>
                    <div className="sign-in-header">
                        <LogoComponent/>
                    </div>
                    <div className="sign-in-body">
                        <div className="form-content" style={{maxWidth:'500px'}}>
                            <Outlet/>
                        </div>
                    </div>
                    <div className="sign-in-footer flex justify-between w-full">
                        <DirectionButtonDefault  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={link['prevLink']}/>
                        <DirectionButtonDefault title={<span>Continue <i className="fa fa-chevron-right ms-2 text-sm" linkRouter={link['nextLink']}></i></span>}/>
                    </div>
                </div>
            </div>
            <div className="login-panel max-w-screen-sm hidden sm:block h-screen" style={{maxWidth:'45%'}}>
                <div className="content h-full items-center" style={{overflow:'hidden'}}>
                    <img className="w-screen-sm min-h-screen" style={{objectFit:'cover'}} src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="" />
                </div>
            </div>
        </div>
  </div>;
};

export default SignUpTemplate;
