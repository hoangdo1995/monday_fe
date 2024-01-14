import React, { useEffect, useState } from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import AddMemberInput from "../../components/AddMemberInput";
import DirectionButtonGray from "../../components/DirectionButtonGray";

const SignUpPage4 = (props) => {
    const {nextLink,prevLink} = props;
    const [listInput,setListInput] = useState([<AddMemberInput/>,<AddMemberInput/>]);

    const addInputItems = ()=>{
        setListInput([...listInput,<AddMemberInput/>]);
        
    }
    useEffect(()=>{
        
        
    },[listInput])
  return <>
        <div className="sign-in-body grow mt-20">
            <div className="form-content max-w-full">
                <div className="header">
                  <h3 className="font-medium text-2xl text-gray-800">Invite your team mates</h3>
                  <div className="font-light text-base">Collaborate with your team to get the most out of monday.com</div>
                </div>
                <form className="mt-10 w-full">
                    {listInput.map((item,index)=>item)}
                    <div id="another-input"></div>
                    <div className="text-gray-500 ms-4 cursor-pointer" onClick={()=>addInputItems()}>
                      <i className="fa fa-plus"></i> Add another
                    </div>
                </form>
            </div>
        </div>
        <div className="sign-in-footer flex justify-between w-full">
            <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={prevLink}/>
            <DirectionButtonDefault title={'Invite your team'} linkRouter={nextLink} active={false}/>
        </div>
      </>;
};

export default SignUpPage4;
