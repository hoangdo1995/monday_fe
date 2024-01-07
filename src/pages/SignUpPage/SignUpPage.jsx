import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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
                        <form>
                            <input className="w-full mb-4" type="email" placeholder="name@company.com"/>
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
                                Already have an account? <Link to={''}>Log In</Link>
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

