import React, { useEffect, useState } from "react";
import LabelError from "../../components/LabelError";
import InputText from "../../components/InputText";
import LabelInput from "../../components/LabelInput";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { setActivePageSignUp, setNewUserCreate } from "../../redux/reducer/userReducers/createUserReducer";

const SignUpPage1 = (props) => {
    const {nextLink, prevLink} = props;
    // redux
    const dispatch = useDispatch();
    const {newUser,activePageSignUp} = useSelector((state)=>state.createUserReducer);
    const [IsNextPageAccept, setIsNextPageAccept] = useState(activePageSignUp.includes('page1')?true:false);

    // formik config
    const formik = useFormik({
        initialValues:{
            full_name:newUser?.full_name||'',
            password:newUser.password||'',
            account_name:newUser.account_name||'',
        },
        isValid:IsNextPageAccept,
        validationSchema:Yup.object().shape({
            full_name:Yup.string().required().matches(/^[a-zA-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/, 'Full name must only contain letters and spaces').trim('Full name cannot start or end with spaces'),
            password:Yup.string().required().min(8).matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/\d/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
            account_name:Yup.string().required().trim('Full name cannot start or end with spaces')
        }),
    });
    const setNewUserInfo = async(newUser)=>{
        const action = setNewUserCreate(newUser);
        await dispatch(action);
        const action2 = setActivePageSignUp('page1');
        await dispatch(action2);
    }
    useEffect(()=>{
        if (formik.isValid && Object.keys(formik.touched).length === Object.keys(formik.initialValues).length) {
            setIsNextPageAccept(true);
        }
        if(!formik.isValid) setIsNextPageAccept(false);
    },[formik.touched, formik.isValid])
  return <>
            <div className="sign-in-body">
                <div className="form-content max-w-[800px]">
                    <div className="text-3xl font-normal">Create your new account</div>
                    <form action="" className="flex flex-col" onSubmit={formik.handleSubmit}>
                        <LabelInput name='Full name'/>
                        <InputText id={'full_name'} defaultValue={formik.values.full_name} onChangeHandler={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your full name"/>
                        <LabelError title={formik.touched.full_name && formik.errors.full_name ? formik.errors.full_name :''}/>
                        <LabelInput name='Password'/>
                        <InputText id={'password'} defaultValue={formik.values.password} onChangeHandler={formik.handleChange} onBlur={formik.handleBlur} type='password' placeholder="Enter at least 8 characters"/>
                        <LabelError title={(formik.touched.password && formik.errors.password) ? formik.errors.password : ''}/>
                        <LabelInput name='Account name'/>
                        <InputText id={`account_name`} defaultValue={formik.values.account_name} onChangeHandler={formik.handleChange} onBlur={formik.handleBlur} placeholder="For example, company's or deparment's name"/>
                        <LabelError title={formik.touched.account_name && formik.errors.account_name ? formik.errors.account_name : ''}/>
                    </form>
                </div>
            </div>
            <div className="sign-in-footer flex justify-between w-full">
                <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={prevLink}/>
                <DirectionButtonDefault onClickHandler={()=>setNewUserInfo(formik.values)} disable={!IsNextPageAccept} title={<span>Continue <i className="fa fa-chevron-right ms-2 text-sm" ></i></span>} linkRouter={nextLink}/>
            </div>
  </>
  ;
};

export default SignUpPage1;
