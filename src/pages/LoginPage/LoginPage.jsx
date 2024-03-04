import React from "react";
import LogoComponent from "../../components/LogoComponent";
import InputText from "../../components/InputText";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import LabelError from "../../components/LabelError";

const LoginPage = () => {

    const formik  = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object().shape({
            email:Yup.string().email().required(),
            password:Yup.string().required().min(8,'Least at 8 character')
        }),
        onSubmit:(values)=>{
        }
    })

  return <div className="">
            <div className="bg-slate-100 py-3 ps-10">
                <LogoComponent/>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
                <form onSubmit={formik.handleSubmit}>
                    <div className="text-center">
                        <div className="text-4xl font-light mt-10"><span className="font-extrabold text-4xl">Log</span> In</div>
                        <div className="font-light text-lg mt-2">Dohoang1995 Team</div>
                    </div>
                    <div className="grid mt-10 gap-y-7 text-center me-16" style={{gridTemplateColumns:'1fr 4fr'}}>
                        <label className='me-3 text-slate-500 text-right flex items-center justify-end' forhtml='email' >Email</label>
                        <div className="relative">
                        <InputText id={'email'} customStyle={{padding:'8px 10px',width:'100%'}}  clearButton={true} clearButtonStyle={{right:7,top:8}} onChangeHandler={formik.handleChange}/>
                        <div className="absolute -bottom-4 right-0"> <LabelError title={formik.errors.email}/></div>
                        </div>
                        <label className='me-3 text-slate-500 text-right flex items-center justify-end' forhtml='password' >Passoword</label>
                        <div className="relative">
                            <InputText id={'password'} type={'password'} customStyle={{padding:'8px 10px',width:'100%'}} onChangeHandler={formik.handleChange} clearButton={false}/>
                            <div className="absolute -bottom-4 right-0">
                                <LabelError title={formik.errors.password}/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link className="block text-left ms-20 mt-6 text-sky-500" to='forget-password-direct '>Forget your password?</Link>
                         <DirectionButtonDefault type={'submit'} title={<>Login <i className="fa fa-arrow-right ms-1"></i></>} active={true} customStyle={{width:'70%',marginTop:'10px'}}/>
                    </div>
                </form>
                <div className="flex items-center mt-10 w-4/12">
                    <div className="vertical-line"></div>
                    <div className="text-lg font-light text-gray-600 w-fit whitespace-nowrap px-2">Or sign in with</div>
                    <div className="vertical-line"></div>
                </div>
                <div className="mt-6">
                    <button className="text-medium text-md text-gray-500 px-2 py-1 border rounded border-gray-300 hover:bg-slate-100">
                        <img className="inline" src="./images/icons/google-icon.png" alt="" style={{width:30,height:30}}/>
                        Google
                    </button>
                </div>
                <div className="font-light text-center mt-10 w-4/12 py-3 px-5 border-t border-b">
                        In order to sign up to <span className='font-bold'>hoangdo's team's</span> account, you have to be invited by it's admin.
                </div>
                <div className="mt-8 w-4/12 text-center">
                    <Link className="text-sky-400 hover:text-sky-600" to={'login-another'}>Login with another account</Link>
                    <div>
                        Can't log in?
                        <Link className="text-sky-400 ms-2 hover:text-sky-600" to={'help-page'}>Visit out help center</Link>
                    </div>
                </div>
            </div>
            
  </div>;
};

export default LoginPage;
