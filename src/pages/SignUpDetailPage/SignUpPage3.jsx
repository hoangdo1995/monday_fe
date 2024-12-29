import React, { useEffect, useState } from "react";
import RadioInput from "../../components/RadioInput";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import { useDispatch, useSelector } from "react-redux";
import { setActivePageSignUp, setPersonalizationDataCreate } from "../../redux/reducer/userReducers/createUserReducer";

const SignUpPage3 = (props) => {
    const {nextLink,prevLink} =props;
    // redux
    const {personalizationData, activePageSignUp} = useSelector((state)=>state.createUserReducer);
    const dispatch = useDispatch();

    const [focusValue,setFocusValue] = useState(personalizationData?.like_focus || null);
    const [isNextPageAccept, setIsNextPageAccept] = useState(activePageSignUp.includes('page3')?true:false);

    const setPersonalizationData = async()=>{
        const action = setPersonalizationDataCreate({like_focus:focusValue});
        await dispatch(action);
        const action2 = setActivePageSignUp('page3');
        await dispatch(action2);
    }

    const setValueHandle = (value)=>{
        setFocusValue(value);
    }
    useEffect(()=>{
        const focusRadio = document.querySelector(`input[value="${focusValue}"]`);
        if(focusRadio) focusRadio.defaultChecked = true;

        if(focusValue) setIsNextPageAccept(true)

    },[focusValue])
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
            <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={prevLink}/>
            <DirectionButtonDefault onClickHandler= {setPersonalizationData}  title={<span>Continue <i className="fa fa-chevron-right ms-2 text-sm" ></i></span>} linkRouter={nextLink} disable={!isNextPageAccept}/>
    </div>
  </>;
};

export default SignUpPage3;
