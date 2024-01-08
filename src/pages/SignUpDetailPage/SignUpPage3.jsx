import React, { useState } from "react";
import RadioInput from "../../components/RadioInput";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";

const SignUpPage3 = (props) => {
    const {nextLink,prevLink} =props;
    const [focusValue,setFocusValue] = useState(null);
    const setValueHandle = (value)=>{
        setFocusValue(value);
    }
  return <>
    <div className="sign-in-body">
            <div className="form-content max-w-full">
                <div className="question">
                    <h3 className="text-2xl font-medium text-gray-800">Select what you's like to focus on first</h3>
                    <div className="answer-container flex flex-wrap "> 
                        <RadioInput name='focusValue' value='taskManagement' title='task management' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='businessOperation' title='business operation' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='portfolioManagement' title='portfolio management' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='clientProject' title='client projects' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='grantsManagement' title='grants management' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='projectManagement' title='project management' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='volunteersManagement' title='volunteers registration management ' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='eventManagement' title='Event management' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='requestApproval' title='request and approvals' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='CRM' title='CRM' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='fundraisingCRM' title='fundraising CRM' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='goalStrategy' title='goals and strategy' setValue={setValueHandle}/>
                        <RadioInput name='focusValue' value='other' title='other' setValue={setValueHandle}/>
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

export default SignUpPage3;
