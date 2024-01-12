import React, { useState } from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import RadioInput from "../../components/RadioInput";
import DirectionButtonGray from "../../components/DirectionButtonGray";

const SignUpPage2 = (props) => {
    const {nextLink, prevLink} = props;
    const [bringValue,setBringValue] = useState(null);
    const [yourRoleValue,setYourRoleValue] = useState(null);
    const bringValueHandle = (value)=>{
        setBringValue(value);
    }
    const yourRoleValueHandle = (value)=>{
        setYourRoleValue(value);
    }
  return <>
    <div className="sign-in-body">
            <div className="form-content max-w-full">
                <div className="question">
                    <h3 className="text-2xl font-medium text-gray-800">Hey there, what brings you here today?</h3>
                    <div className="answer-container flex flex-wrap "> 
                        <RadioInput name='bringValue' value='work' title='Work' setValue={bringValueHandle}/>
                        <RadioInput name='bringValue' value='personal' title='Personal' setValue={bringValueHandle}/>
                        <RadioInput name='bringValue' value='school' title='School' setValue={bringValueHandle}/>
                        <RadioInput name='bringValue' value='nonprofits' title='Nonprofits' setValue={bringValueHandle}/>
                    </div>
                    <h3 className="mt-10 text-2xl font-medium text-gray-800" style={{visibility:bringValue?'':'hidden'}}>What best describes your current role?</h3>
                    <div className="answer-container flex flex-wrap" style={{visibility:bringValue?'':'hidden'}}>
                        <RadioInput name='yourRole' value='business' title='Business owner' setValue={yourRoleValueHandle}/>
                        <RadioInput name='yourRole' value='leader' title='team leader' setValue={yourRoleValueHandle}/>
                        <RadioInput name='yourRole' value='member' title='team member' setValue={yourRoleValueHandle}/>
                        <RadioInput name='yourRole' value='freelancer' title='freelancer' setValue={yourRoleValueHandle}/>
                        <RadioInput name='yourRole' value='director' title='director' setValue={yourRoleValueHandle}/>
                        <RadioInput name='yourRole' value='c_level' title='c_level' setValue={yourRoleValueHandle}/>
                        <RadioInput name='yourRole' value='vp' title='vp' setValue={yourRoleValueHandle}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="sign-in-footer flex justify-between w-full">
            <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={prevLink}/>
            <DirectionButtonDefault title={<span>Continue <i className="fa fa-chevron-right ms-2 text-sm" ></i></span>} linkRouter={nextLink}/>
    </div>
  </>;
};

export default SignUpPage2;
