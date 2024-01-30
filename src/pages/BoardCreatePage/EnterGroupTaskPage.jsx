import React, { useEffect } from "react";
import LogoComponent from "../../components/LogoComponent";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import InputText from "../../components/InputText";
import { useFormik } from "formik";
import { setGroupName1, setGroupName2, setNewBoardViewLayout } from "../../redux/reducer/newBoardReducer";
import { useDispatch, useSelector } from "react-redux";
import { getValueById } from "../../utils/util";

const EnterGroupTaskPage = () => {
    const dispatch = useDispatch();
    const {groupName} = useSelector(state=>state.newBoardReducer);
    const formik = useFormik({
        initialValues:{
            groupTask1:null,
            groupTask2:null
        },
        onSubmit:(values)=>{
            const action1 = setGroupName1(values.groupTask1);
            dispatch(action1);
            const action2 = setGroupName2(values.groupTask2);
            dispatch(action2);
        }
    })

    const onChangeHandler=(event)=>{
        const inputId = event.currentTarget.id;
        let action;
        if(inputId==='groupTask1'){action = setGroupName1(event.currentTarget.value);}
        if(inputId==='groupTask2'){action = setGroupName2(event.currentTarget.value);}
        if(action){
            dispatch(action);
        }
        formik.handleChange(event);
    }

    useEffect(()=>{
        const action = setNewBoardViewLayout('table');
        dispatch(action);
        if(!groupName.group1){
            const action1 = setGroupName1(getValueById('groupTask1'));
            dispatch(action1);
            const action2 = setGroupName2(getValueById('groupTask2'));
            dispatch(action2);
        }
    })
    
  return <div className="w-full h-full flex flex-col justify-between" style={{maxHeight:700}}>
            <div>
                <LogoComponent/>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-600 my-10">Group task to better oganize your work</h3>
                <div className="text-sm text-gray-600">E.g time frames, subject, etc.</div>
                <div className="mt-1">
                    <InputText id={'groupTask1'} customStyle={{padding:'5px 10px',color:'gray',fontSize:15}} defaultValue={groupName.groupTask1?groupName.groupTask1:'This month'} clearButton={true}  clearButtonStyle={{display:'flex',right:'7px',padding:5,top:3.5}} onChangeHandler={onChangeHandler}/>
                </div>
                <div className="my-8">
                    <InputText id={'groupTask2'} customStyle={{padding:'5px 10px',color:'gray',fontSize:15}} defaultValue={groupName.groupTask2?groupName.groupTask2:'Next month'} clearButton={true} clearButtonStyle={{display:'flex',right:'7px',padding:5,top:3.5}} onChangeHandler={onChangeHandler}/>
                </div>
                <div className="text-sm px-4 py-3 bg-gray-100 rounded-lg text-gray-700">
                    "Groups" keep the related items together to help you better organize your work.
                </div>
            </div>
            <div className="flex justify-between">
                <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={'enter-task-name'}/>
                <DirectionButtonDefault  linkRouter={''} title={<div className='flex items-center'><span className='font-light tracking-wide'>Get started</span></div>} active={true}/>
            </div>
  </div>;
};

export default EnterGroupTaskPage;
