import React from "react";
import LabelError from "../../components/LabelError";
import InputText from "../../components/InputText";
import LabelInput from "../../components/LabelInput";

const SignUpPage1 = (props) => {
  return <div>
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
  </div>;
};

export default SignUpPage1;
