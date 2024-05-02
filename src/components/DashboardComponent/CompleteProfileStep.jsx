import { Modal, Progress, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import ModalCloseButton from "../utilComponents/ModalCloseButton";
import ImgCrop from 'antd-img-crop';
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import InputText from "../InputText";
import RadioInputMain from "../RadioInputMain";
import LabelInput from "../LabelInput";
import LabelError from "../LabelError";
import { timeZones } from "../../utils/defaultValue";
import { showEnableShowNotification } from "../../utils/util";

const CompleteProfileStep = () => {
    //state quản lý modal profile setup
    const [uploadAvatarPhotoOpen,setUploadAvatarPhotoOpen] = useState(false);
    const [inviteTeamOpen,setInviteTeamOpen] = useState(false);
    const [profileOpen,setProfileOpen] = useState(false);
    const [installAppOpen,setInstallAppOpen] = useState(false);

    const [stepComplete,setStepComplete] = useState(0);
    
    //update complete step
    const updateCompleteStep = (currentStep,state)=>{
        const targetInput = document.querySelector(`input[value="${currentStep}"]`);
        if(targetInput) targetInput.checked = state;
        setStepComplete(document.querySelectorAll('input[name="profile-step-check"]:checked').length);
    }

    //xử lý upload hình ảnh avatar
    const onChangeImageChoose = ()=>{
        //xử lý upload hình ảnh lên api
        setStepComplete(document.querySelectorAll('input[name="profile-step-check"]:checked').length);
        setUploadAvatarPhotoOpen(false);
        //check step complete
        document.querySelector('input[value="upload-photo-step"]').checked = true;
    }
    //xử lý profile model
    const [selectedMonth,setSelectedMonth] = useState('');
    const [selectedYear,setSelectedYear] = useState();
    const [selectedDay,setSelectedDay] = useState();
    let yearList = [];
    let startYear = 1900;
    const currentYear = new Date().getFullYear();
    while(startYear< currentYear){
        yearList = [...yearList,{value:startYear+1,label:startYear+1}];
        startYear++;
    }
    const monthList =[
        {value:1,label:'January'},
        {value:2,label:'February'},
        {value:3,label:'March'},
        {value:4,label:'April'},
        {value:5,label:'May'},
        {value:6,label:'June'},
        {value:7,label:'July'},
        {value:8,label:'August'},
        {value:9,label:'September'},
        {value:10,label:'October'},
        {value:11,label:'November'},
        {value:12,label:'December'},
    ]
    let dayList =[];
    const monthDateCounts = new Date(selectedYear,selectedMonth,0).getDate();
        let i = 1;

    while(i <= monthDateCounts){
        dayList = [...dayList,{value:i,label:i}]
        i ++;
    }

    useEffect(()=>{
        updateCompleteStep('',null);
        const listStepProfileInput = document.querySelectorAll('label.profile-step');
        console.log(listStepProfileInput);
        
        listStepProfileInput.forEach(step => {
            step.addEventListener('click',(event)=>event.preventDefault());
        });
    },[selectedDay,selectedMonth,selectedYear,dayList])
  return <div>
        <div className="break-line-bottom px-6 py-3">
            <div className="font-medium" style={{fontSize:18}}>Complete Your Profile</div>
            <label className="profile-step flex items-center"><input name="profile-step-check" value="setup-account-step" className="hidden" checked type="checkbox"></input><span className="checkbox-box"><span className="checkbox-check"><i className="fa fa-check"></i></span></span><span>Setup Account</span></label>
            <label className="profile-step flex items-center" onClick={()=>setUploadAvatarPhotoOpen(true)}><input name="profile-step-check" value="upload-photo-step" className="hidden" type="checkbox"></input><span className="checkbox-box"><span className="checkbox-check"><i className="fa fa-check"></i></span></span><span>Upload your Photo</span></label>
            <label className="profile-step flex items-center" onClick={()=>{showEnableShowNotification()}}><input name="profile-step-check" value="enable-notification-step" className="hidden" type="checkbox"></input><span className="checkbox-box"><span className="checkbox-check"><i className="fa fa-check"></i></span></span><span>Enable Desktop Notifications</span></label>
            <label className="profile-step flex items-center" onClick={()=>setInviteTeamOpen(true)}><input name="profile-step-check" value="invite-team-step" className="hidden" type="checkbox" checked></input><span className="checkbox-box"><span className="checkbox-check"><i className="fa fa-check"></i></span></span><span>Invite Team Members</span></label>
            <label className="profile-step flex items-center" onClick={()=>setProfileOpen(true)}><input name="profile-step-check" value="complete-profile-step" className="hidden" type="checkbox"></input><span className="checkbox-box"><span className="checkbox-check"><i className="fa fa-check"></i></span></span><span>Complete Profile</span></label>
            <label className="profile-step flex items-center" onClick={()=>setInstallAppOpen(true)}><input name="profile-step-check" value="install-app-step" className="hidden" type="checkbox"></input><span className="checkbox-box"><span className="checkbox-check"><i className="fa fa-check"></i></span></span><span>Install Our Mobile App</span></label>
            {/* modal component */}
                        {/* upload photo modal */}
            <Modal wrapClassName="profile-step-modal" centered footer={null} open={uploadAvatarPhotoOpen} onOk={() => setUploadAvatarPhotoOpen(false)}
                onCancel={() => {setUploadAvatarPhotoOpen(false);updateCompleteStep('upload-photo-step',false);}} closeIcon={<ModalCloseButton/>} destroyOnClose={true}>
                    <div className="text-center border-t-4 border-t-sky-400 py-5">
                        <div>
                            <span className="gray-text text-3xl font-light mt-4 mb-2">Upload a profile picture</span>
                            <span className="gray-text text-base block">Pictures make it easier to collaborate</span>
                        </div>
                        <div className="flex justify-center flex-col items-center pb-7">
                            <div className="avatar text-6xl font-bold text-white content-center bg-green-400 rounded-full mt-7" style={{width:120,height:120}}>
                                ĐH
                            </div>
                            <div>
                                
                                <ImgCrop >
                                    <Upload isImageUrl={(file)=>true} showUploadList={false} onChange={onChangeImageChoose}>
                                        <button className="bg-blue-600 text-white py-1 mt-3 px-2 rounded"><UploadOutlined className="me-2 "/>Upload image</button>
                                    </Upload>
                                </ImgCrop>
                                <div className="thumbnail">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center px-7">
                            <div className="vertical-line"></div>
                            <div className="text-lg px-2 bg-white">Or</div>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="mt-3">
                            <Link to='' className="text-blue-600 hover:text-blue-800">
                                <i className="fab fa-facebook-f me-3"></i> Use Facebook picture
                            </Link>
                        </div>
                    </div>
            </Modal>
                        {/* Invite team member modal */}
            <Modal wrapClassName="profile-step-modal" centered footer={null} open={inviteTeamOpen} onOk={() => setInviteTeamOpen(false)}
                onCancel={() => {setInviteTeamOpen(false);updateCompleteStep('upload-photo-step',false);}} closeIcon={<ModalCloseButton/>} destroyOnClose={true}>
                    <div className="py-5 px-5">
                        <div className="">
                            <h5 className="text-3xl font-normal mb-5 mt-2">Invite to work management</h5>
                            <div>
                                <form action="">
                                    <h5 className="text-sm font-light mb-3">Invite with email</h5>
                                    <InputText type={'email'} placeholder={'Enter one or more email addresses'} customStyle={{backgroundColor:'transparent',padding:'8px 10px'}} onChangeHandler={(event)=>{event.preventDefault()}}/>
                                    <div className="flex mt-6 text-sm">
                                        <RadioInputMain title={'Member'} customStyle={{marginRight:30,fontSize:15}} value={'member'} name={'type-user'} checkedDefault={true} onChange={()=>{}}/>
                                        <RadioInputMain title={'Viewer(Read-only)'} value={'viewer'} name={'type-user'} onChange={()=>{}}/>
                                        <div className="rounded  px-2 py-1 ms-2" style={{backgroundColor:'#133774'}}>Free</div>
                                    </div>
                                    <div className="text-end mt-24">
                                        <button className="button-main !px-4 text-base text-white font-light">Invite</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </Modal>
                        {/* Profile modal */}
            <Modal wrapClassName="profile-step-modal" centered footer={null} open={profileOpen} onOk={() => setProfileOpen(false)}
                onCancel={() => {setProfileOpen(false);updateCompleteStep('upload-photo-step',false);}} closeIcon={<ModalCloseButton/>} destroyOnClose={true}>
                    <form className="border-t-4 border-sky-500" style={{minWidth:600}}>
                        <div className="px-5 py-5">
                            <span className="gray-text text-2xl block mb-5">Complete your profile</span>
                            <div>
                                <div className="flex justify-between items-center">
                                    <LabelInput name={'Job title / Description'}/>
                                    <LabelError title={''}/>
                                </div>
                                <div>
                                    <InputText customStyle={{backgroundColor:'transparent',padding:'7px 5px'}} onChangeHandler={()=>{}}/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <LabelInput name={'Phone'}/>
                                    <LabelError title={''}/>
                                </div>
                                <div>
                                    <InputText type={'phone'} customStyle={{backgroundColor:'transparent',padding:'7px 5px'}} onChangeHandler={()=>{}}/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <LabelInput name={'Birthday (optional)'}/>
                                    <LabelError title={''}/>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <Select options={yearList} style={{width:120}} defaultValue={'Year'} onChange={(value)=>setSelectedYear(value)}/>
                                            <Select options={monthList} style={{width:120,margin:'0 5px'}} defaultValue={'Month'} onChange={(value)=>setSelectedMonth(value)}/>
                                            <Select options={dayList} style={{width:120}} defaultValue={'Day'} onChange={(value)=>setSelectedDay(value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-4">
                                        <LabelInput name={'Time zone(optional)'}/>
                                        <Select options={timeZones} style={{width:'100%'}} size="middle" defaultValue={{value: 'UTC+7:00', label: 'UTC+7:00 (Indochina Time)'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-blue-600 hover:bg-blue-800 w-full py-2 text-xl font-bold" type="submit" onClick={(event)=>{event.preventDefault();updateCompleteStep('complete-profile-step',true);setProfileOpen(false)}}>Save</button>
                        </div>
                    </form>
            </Modal>
                        {/* install app modal */}
            <Modal wrapClassName="profile-step-modal" centered footer={null} open={installAppOpen} onOk={()=>setInstallAppOpen(false)}
                onCancel={() => {setInstallAppOpen(false);updateCompleteStep('install-app-step',false);}} closeIcon={<ModalCloseButton/>} destroyOnClose={true}>
                    <div className="py-20">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center items-center text-center px-14" style={{maxWidth:500}}>
                                <div className="text-3xl text-medium">Scan the QR code to start working on mobile</div>
                                <div className="text-base my-8">Get work done from anywhere, no signup needed</div>
                                <div className="rounded-2xl bg-white p-1">
                                    <img src="/images/png/app_install_QR.png" style={{width:170}} alt="" />
                                </div>
                                <div className="text-base my-3">
                                    Or
                                </div>
                                <div className="text-base">
                                    <Link className="text-blue-500" to={''}>Email me the dowload links</Link>
                                </div>
                            </div>
                            <div className="h-fit">
                                <img style={{objectFit:'cover'}} src="./images/png/download-mobile-app-dark-v3.png" alt="" />
                            </div>
                        </div>
                    </div>
            </Modal>
        </div>
        <div className="px-7 py-2">
            <Progress percent={(stepComplete/6)*100} showInfo={false} strokeLinecap="butt" />
        </div>
  </div>;
};

export default CompleteProfileStep;
