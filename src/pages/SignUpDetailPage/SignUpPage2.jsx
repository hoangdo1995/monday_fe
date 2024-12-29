import React, { useEffect, useState } from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import RadioInput from "../../components/RadioInput";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import { useDispatch, useSelector } from "react-redux";
import { setActivePageSignUp, setPersonalizationDataCreate } from "../../redux/reducer/userReducers/createUserReducer";

const SignUpPage2 = (props) => {
    const {nextLink, prevLink} = props;

    // redux
    const {newUser,activePageSignUp} = useSelector((state)=>state.createUserReducer);
    const {personalizationData,} = useSelector((state)=>state.createUserReducer);
    const dispatch = useDispatch()

    const [bringValue,setBringValue] = useState(personalizationData?.bring_here || null);
    const [yourRoleValue,setYourRoleValue] = useState(personalizationData.current_role || null);
    const [isNextPageAccept, setIsNextPageAccept] = useState(activePageSignUp.includes('page2')?true:false);

    const bringValueHandle = (value)=>{
        setBringValue(value);
    }
    const yourRoleValueHandle = (value)=>{
        setYourRoleValue(value);
    }

    const setPersonalizationData = async()=>{
        const action = setPersonalizationDataCreate({bring_here:bringValue,
            current_role:yourRoleValue,});
        await dispatch(action);
        const action2 = setActivePageSignUp('page2');
        await dispatch(action2);
    }
    

    useEffect(()=>{
        if(bringValue && yourRoleValue) setIsNextPageAccept(true);
        // checked radio with redux data
        const bringRadio = document.querySelector(`input[value="${bringValue}"]`);
        const yourRoleRadio = document.querySelector(`input[value="${yourRoleValue}"]`);
        if(bringRadio) bringRadio.defaultChecked = true;
        if(yourRoleRadio) yourRoleRadio.defaultChecked = true;

    },[bringValue, yourRoleValue])
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
            <DirectionButtonDefault onClickHandler={setPersonalizationData} linkRouter={nextLink} disable={!isNextPageAccept} title={<span>Continue <i className="fa fa-chevron-right ms-2 text-sm" ></i></span>} />
    </div>
  </>;
};

export default SignUpPage2;
