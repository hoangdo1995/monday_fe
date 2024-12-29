import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import LabelError from "./LabelError";
import { useDispatch } from "react-redux";
import { setPersonalizationDataCreate } from "../redux/reducer/userReducers/createUserReducer";

const AddMemberInput = (props) => {
    const {handlerAddListEmail,index,listTeamEmail} = props;


    const [isFocus, setIsFocus] = useState(false);

    const formik = useFormik({
        initialValues:{
            email:'',
            role: ''
        },
        isValid:false,
        validationSchema:Yup.object().shape({
            email:Yup.string().required().email(),
            role:Yup.string().oneOf(['admin','member'],"Role must be either user or admin ")
        }),
        onSubmit(value){

        }
    })

    const items = [
        {
            label: (
                <div onClick={()=>formik.setFieldValue("role",'admin')}>
                    <div className="font-medium text-sm">Admin</div>
                    <div className="font-light text-xs">Can invite & manager new users</div>
                </div>
            ),
            key: "admin",
        },
        {
            label: (
                <div onClick={()=>formik.setFieldValue("role",'member')}>
                    <div className="font-medium text-sm">Member</div>
                    <div className="font-light text-xs">Can add and edit content</div>
                </div>
            ),
            key: "1",
        }
    ];

   

    useEffect(()=>{
        if(formik.isValid && formik.touched.email) {
            // check email errors
            const findIndex = listTeamEmail.findIndex(item=>item.email===formik.values.email);
            if(findIndex !== -1){
                formik.setFieldError('email','Email is duplicated')
            }else{
                handlerAddListEmail(formik.values,index);
            }
            console.log('value',formik.values)
        }
    },[formik.values,formik.isValid, formik.errors])

    return (
    <div className=" mb-2">
        <form className="flex mt-2" onSubmit={formik.handleSubmit}>
            <input id={`email`} onChange={formik.handleChange} onBlur={formik.handleBlur} className="add-member-email max-w-full border border-r-0 outline-none rounded-l-md border-gray-400 py-1 px-2 w-3/5 focus:border-sky-400 focus:border-e"  type="email" placeholder="Add email here" style={{minWidth:250}}/>
            <div className={`select-role border rounded-r-md border-gray-400 ${isFocus?'border-sky-400':''}`} onClick={()=>setIsFocus(!isFocus)}>
                <Dropdown menu={{items}} trigger={['click']} onOpenChange={()=>setIsFocus(!isFocus)}>
                    <span>
                        <Space className="capitalize flex items-center justify-between text-sm text-gray-600 font-semibold w-full h-full px-3 py-2" style={{minWidth:100}}>
                            {formik.values.role}
                            <DownOutlined className={isFocus?`rotate-90-deg`:""} style={{transition:'all .5s'}}/>
                        </Space>
                    </span>
                </Dropdown>
            </div>
            
        </form>
        <div><LabelError title={formik.errors.email}/></div>
    </div>
    );
};

export default AddMemberInput;
