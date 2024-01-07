import React from "react";
import LabelError from "../../components/LabelError";
import InputText from "../../components/InputText";
import LabelInput from "../../components/LabelInput";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";

const SignUpPage1 = (props) => {
    const {nextLink, prevLink} = props;
  return <>
<div className="sign-in-body">
    <div className="form-content" style={{maxWidth:'500px'}}>
        <form action="" className="flex flex-col">
            <LabelInput name='Full name'/>
            <InputText placeholder="Enter your full name"/>
            <LabelError title="Enter your name"/>
            <LabelInput name='Password'/>
            <InputText type='password' placeholder="Enter at least 8 characters"/>
            <LabelError title=''/>
            <LabelInput name='Account name'/>
            <InputText placeholder="For example, company's or deparment's name"/>
            <LabelError title=''/>
        </form>
    </div>
</div>
<div className="sign-in-footer flex justify-between w-full">
    <DirectionButtonDefault  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={prevLink}/>
    <DirectionButtonDefault title={<span>Continue <i className="fa fa-chevron-right ms-2 text-sm" ></i></span>} linkRouter={nextLink}/>
</div>
  </>
  ;
};

export default SignUpPage1;
