import React from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import RadioInput from "../../components/RadioInput";

const SignUpPage2 = (props) => {
    const {nextLink, prevLink} = props;
  return <>
    <div className="sign-in-body">
            <div className="form-content max-w-full">
                <div className="question">
                    <h3>Hey there, what brings you here today?</h3>
                    <div className="answer-container flex flex-wrap"> 
                        <RadioInput name='bringValue' value='work' title='Work'/>
                        <RadioInput name='bringValue' value='personal' title='Personal'/>
                        <RadioInput name='bringValue' value='school' title='School'/>
                        <RadioInput name='bringValue' value='nonprofits' title='Nonprofits'/>
                    </div>
                    <h3 className="mt-10">What best describes your current role?</h3>
                    <div className="answer-container flex flex-wrap">
                        <RadioInput name='yourRole' value='business' title='Business owner'/>
                        <RadioInput name='yourRole' value='leader' title='team leader'/>
                        <RadioInput name='yourRole' value='member' title='team member'/>
                        <RadioInput name='yourRole' value='freelancer' title='freelancer'/>
                        <RadioInput name='yourRole' value='director' title='director'/>
                        <RadioInput name='yourRole' value='c_level' title='c_level'/>
                        <RadioInput name='yourRole' value='vp' title='vp'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="sign-in-footer flex justify-between w-full">
            <DirectionButtonDefault  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={prevLink}/>
            <DirectionButtonDefault title={<span>Continue <i className="fa fa-chevron-right ms-2 text-sm" ></i></span>} linkRouter={nextLink}/>
    </div>
  </>;
};

export default SignUpPage2;
