import React, { useEffect,useState } from "react";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import InputText from "../../components/InputText";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import LogoComponent from "../../components/LogoComponent";
import * as Yup from 'yup';
import { history } from "../..";
import LabelError from "../../components/LabelError";
import { setTaskNameList } from "../../redux/reducer/newBoardReducer";
import { getValueById } from "../../utils/util";

const EnterTaskNamePage = () => {
    const {objectManager,taskNameList,viewLayout} = useSelector((state)=>state.newBoardReducer);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            taskName1:null,
            taskName2:null,
            taskName3:null,
        },
        onSubmit:(values)=>{
            const  listTask = [];
            listTask.push(values.taskName1?values.taskName1:taskNameList[0]);
            listTask.push(values.taskName2?values.taskName2:taskNameList[1]);
            listTask.push(values.taskName3?values.taskName3:taskNameList[2]);
            const action = setTaskNameList(listTask);
            dispatch(action);
        },
    });
    const handlerEnterTaskName = (event)=>{
        formik.handleChange(event);
        const action = setTaskNameList([getValueById('taskName1'),getValueById('taskName2'),getValueById('taskName3')]);
        dispatch(action);
    }
    useEffect(()=>{
        if(!taskNameList){
            const action = setTaskNameList([`${objectManager} 1`,`${objectManager} 2`,`${objectManager} 3`]);
            formik.values.taskName1 = `${objectManager} 1`;
            formik.values.taskName2 = `${objectManager} 2`;
            formik.values.taskName3 = `${objectManager} 3`;
            dispatch(action);
        }
    },[taskNameList])

  return <form className="w-full h-full flex flex-col justify-between" style={{maxHeight:700}} onSubmit={formik.handleSubmit} >
    <div className="header">
              <LogoComponent/>
    </div>
    <div className="w-full mt-10" onSubmit={formik.handleSubmit} >
        <h3 className="text-2xl text-slate-700 font-medium mb-8">List your projects</h3>
        <div className="w-full my-10">
            <InputText defaultValue={taskNameList?taskNameList[0]:`${objectManager} 1`} clearButton={true} id={'taskName1'} onChangeHandler={handlerEnterTaskName} customStyle={{padding:'5px 15px',width:'100%'}} clearButtonStyle={{top:'7.5%',right:'3px',width:30,height:'85%',display:'flex'}}/>
        </div>
        <div className="w-full my-10">
            <InputText defaultValue={taskNameList?taskNameList[1]:`${objectManager} 2`} clearButton={true} id={'taskName2'} onChangeHandler={handlerEnterTaskName} customStyle={{padding:'5px 15px',width:'100%'}} clearButtonStyle={{top:'7.5%',right:'3px',width:30,height:'85%',display:'flex'}}/>
        </div>
        <div className="w-full my-10">
            <InputText defaultValue={taskNameList?taskNameList[2]:`${objectManager} 3`} clearButton={true} id={'taskName3'} onChangeHandler={handlerEnterTaskName} customStyle={{padding:'5px 15px',width:'100%'}} clearButtonStyle={{top:'7.5%',right:'3px',width:30,height:'85%',display:'flex'}}/>
        </div>
    </div>
    <div className="flex justify-between">
        <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i>Back</span>} linkRouter={'select-view-layout'}/>
        <DirectionButtonDefault  linkRouter={'group-task'} title={<div className='flex items-center'><span className='font-light tracking-wide'>{(viewLayout==='table')?'Get started':<>Next <i className="fa fa-chevron-right text-xs ms-1"></i></>}</span></div>} active={true}/>
    </div>
    <button className="hidden" type="submit"></button>
</form>
  ;
};

export default EnterTaskNamePage;
