import React, { useEffect, useState } from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import AddMemberInput from "../../components/AddMemberInput";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingUpNewUser, setPersonalizationDataCreate } from "../../redux/reducer/userReducers/createUserReducer";
import { message } from "antd";
import { loading } from "../../utils/enums/reduxEnums";
import { mappingStatusToLoadingState } from "../../utils/apiServiceUtil";

const SignUpPage4 = (props) => {
    const {nextLink,prevLink} = props;
        // redux 
    const dispatch = useDispatch();
    const {activePageSignUp,apiMessage,status,...newUserInfo} = useSelector((state)=>state.createUserReducer);
    const [listTeamEmail,setListTeamEmail] = useState([]);

    // message popup
    const [messageApi,contextHolder] = message.useMessage();
    const {messageLoading, loadingContextHolder} = message.useMessage()

    const handlerAddListEmail = ({email,role},index)=>{
      const updateListEmail = [...listTeamEmail];
      updateListEmail[index] = {email,role};
      setListTeamEmail(updateListEmail);
      console.log('listEmail',listTeamEmail)
    }

    const [listInput,setListInput] = useState([<AddMemberInput handlerAddListEmail={handlerAddListEmail} />]);

    const addInputItems = ()=>{
        setListInput([...listInput,<AddMemberInput handlerAddListEmail={handlerAddListEmail}/>]);
    }
    const setPersonalizeData = async()=>{
      const action = setPersonalizationDataCreate({team_emails:listTeamEmail})
      await dispatch(action);

      // chuyển đổi dử liệu
      const {newUser,personalizationData} = newUserInfo;
      const data = {
        ...newUser,
        personal_info:{...personalizationData}
      }
      const fetchSignUp = fetchSingUpNewUser(data);
      console.log(newUserInfo)
      await dispatch(fetchSignUp)
  }
  
    useEffect(()=>{
      messageApi.open({
        type: mappingStatusToLoadingState(status),
        content: apiMessage
      })
    },[listInput,listTeamEmail,apiMessage,status]);
  return <>
        <div className="sign-in-body grow mt-20">
            <div className="form-content max-w-full">
                <div className="">
                  <h3 className="font-medium text-2xl text-gray-800">Invite your team mates</h3>
                  <div className="font-light text-base">Collaborate with your team to get the most out of monday.com</div>
                </div>
                <form className="mt-10 w-full">
                    {listInput.map((item,index)=><AddMemberInput index={index} key={index} listTeamEmail={listTeamEmail} handlerAddListEmail={handlerAddListEmail}/>)}
                    <div id="another-input"></div>
                    <div className="text-gray-500 ms-4 cursor-pointer" onClick={()=>addInputItems()}>
                      <i className="fa fa-plus"></i> Add another
                    </div>
                </form>
            </div>
        </div>
        <div className="sign-in-footer flex justify-between w-full">
            <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={prevLink}/>
            <DirectionButtonDefault title={'Invite your team'} onClickHandler={setPersonalizeData}  linkRouter={nextLink} active={false}/>
        </div>
        {/* api message */}
        {(status === loading.SUCCEEDED || status === loading.FAILED)? contextHolder:''}
        {(status === loading.PENDING)? loadingContextHolder : '' }
      </>;
};

export default SignUpPage4;
