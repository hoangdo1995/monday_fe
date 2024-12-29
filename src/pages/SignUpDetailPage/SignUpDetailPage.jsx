import React from "react";
import LogoComponent from "../../components/LogoComponent";
import LabelInput from "../../components/LabelInput";
import LabelError from "../../components/LabelError";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { useFormik } from "formik";
import InputText from "../../components/InputText";

const SignUpDetailPage = () => {    
    const formik = useFormik({
        initialValues:{
        },
        validationSchema:Yup.object().shape({
        }),
        onSubmit:(values)=>{
            
        }
    })

  return <div className="login-page">
        <div className="content flex">
            <div className="login-form w-full min-w-screen-lg flex items-center justify-center h-screen px-4">
                <div className="content max-h-full w-full py-10 min-w-fit flex flex-col justify-between h-screen ps-0 lg:ps-20" style={{maxHeight:'1000px'}}>
                    <div className="sign-in-header">
                        <LogoComponent/>
                    </div>
                    <div className="sign-in-body">
                        <div className="form-content" style={{maxWidth:'500px'}}>
                            <form action="" className="flex flex-col">
                                <LabelInput name='Full name'/>
                                <InputText onChange={formik.handleChange} placeholder="Enter your full name"/>
                                <LabelError title="Enter your name"/>
                                <LabelInput name='Password'/>
                                <InputText onChange={formik.handleChange}  type='password' placeholder="Enter at least 8 characters"/>
                                <LabelError title=''/>
                                <LabelInput name='Account name'/>
                                <InputText onChange={formik.handleChange}  placeholder="For example, company's or deparment's name"/>
                                <LabelError title=''/>
                            </form>
                        </div>
                    </div>
                    <div className="sign-in-footer flex justify-end w-full">
                        <DirectionButtonDefault title={<span>Continue <i class="fa fa-chevron-right ms-2 text-sm"></i></span>}/>
                    </div>
                </div>
            </div>
            <div className="login-panel max-w-screen-sm hidden sm:block h-screen" style={{maxWidth:'40%'}}>
                <div className="content h-full items-center" style={{overflow:'hidden'}}>
                    <img className="w-screen-sm min-h-screen" style={{objectFit:'cover'}} src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="" />
                </div>
            </div>
        </div>
  </div>;
};

export default SignUpDetailPage;
