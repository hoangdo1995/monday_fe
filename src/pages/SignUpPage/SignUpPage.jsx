import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { history } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserCreate } from "../../redux/reducer/userReducers/createUserReducer";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
    // redux
    const newUser = useSelector((state)=>state.createUserReducer.newUser);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            email: newUser?.email||''
        },
        validationSchema:Yup.object().shape({
            email:Yup.string().email().required(),
        }),
        onSubmit:async(values)=>{
            await dispatch(setNewUserCreate(formik.values))
            history.push('sign-up-form/page-1');
        }
    })
    return <div className="singin-page">
        <div className="content h-screen flex  w-full">
            <div className="login-form w-full flex items-center justify-center px-4">
                <div className="form-content h-100">
                    <p className="welcome-title">Welcome to monday.com</p>
                    <p className="start-title mt-2 text-lg mb-16">Get started - it's free. No credit card needed.</p>
                    <div className="google-sign-in w-full">
                        <button className="w-full flex items-center">
                            <img src={'./images/icons/google-icon.png'} className="me-2" /> Continue with google
                        </button>
                    </div>
                    <div className="or-line flex w-full items-center my-4">
                        <div className="line"></div>
                        <div className="or px-2">Or</div>
                        <div className="line"></div>
                    </div>
                    <div className="email-sign-in">
                        <form onSubmit={formik.handleSubmit}>
                            <input id={'email'} className="w-full mb-4" type="email" placeholder="name@company.com" onChange={formik.handleChange}/>
                            <button type="submit">Continue</button>
                        </form>
                    </div>
                    <div className="terms-privacy mt-8">
                        <div className="content">
                            <p>By proceeding, you agree to the</p>
                            <p>
                                <Link to={''} >Terms of Service</Link> and <Link to={''}>Privacy Policy</Link>
                            </p>
                        </div>
                        <div className="login-link mt-40">
                            <p className="content">
                                Already have an account? <Link to={'/log-in'}>Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-panel hidden md:block w-fit h-screen max-w-md" style={{maxWidth:'40%'}}>
                <div className="image-content h-full">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png" className="h-full object-cover" />
                </div>
            </div>
        </div>
    </div>;
};

export default SignUpPage;

