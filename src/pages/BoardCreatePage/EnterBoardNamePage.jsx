import React, { useRef, useState } from "react";
import { setNewBoardName } from "../../redux/reducer/newBoardReducer";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { useDispatch, useSelector } from "react-redux";
import LogoComponent from "../../components/LogoComponent";
import { history } from "../..";

const EnterBoardNamePage = () => {
    const {name} = useSelector(state=>state.newBoardReducer);
    const currentRef = useRef(null);
    const dispatch = useDispatch();
    const inputBlurHandler = (event)=>{
        //thay đổi border cho input
        event.currentTarget.classList.remove('!border-sky-400');
        //thực hiện đưa dử liệu nhập lên reducer
        const action = setNewBoardName(event.currentTarget.value);
        dispatch(action);
    }
    const handlerLeaverInput = (event)=>{
        if(currentRef.current && currentRef.current=== document.activeElement){
            currentRef.current.classList.add('!border-sky-400');
        }
    }
    const changeHandler =(event)=>{
        const action = setNewBoardName(event.currentTarget.value);
        dispatch(action);
    }
  return <form className="w-full h-full flex flex-col justify-between" style={{maxHeight:700}} onSubmit={()=>history.push('select-column')}>
    <div className="header">
              <LogoComponent/>
    </div>
    <div>
        <h3 className="text-2xl font-medium mt-20 mb-8 text-gray-700">Let's start working together</h3>
        <div className="mb-3 text-gray-700 text-base">Give your board a name,e.g. marketing plan, sales pipeline, quarterly roadmap...</div>
        <input type="text" className="border-2 rounded w-full px-3 py-1 outline-none outline-offset-0 border-gray-400 focus:border-gray-600  hover:border-sky-400" placeholder="My first board" ref={currentRef} onMouseLeave={handlerLeaverInput} onBlur={(event)=>inputBlurHandler(event)} onChange={changeHandler}/>
        <div className="rounded-lg px-5 py-6 mt-10 mb-20 font-normal text-base text-gray-700" style={{backgroundColor:'#f6f7fc'}}>
            In monday.com, "boards" are the place where all your content lives.
        </div>
    </div>
  <div className="flex justify-end">
      <DirectionButtonDefault title={<div className='flex items-center'><span className='font-light tracking-wide'>Next</span><i className="fa fa-chevron-right text-xs ms-1"></i></div>} active={name?true:false} linkRouter={'select-column'}/>
  </div>
</form>;
};

export default EnterBoardNamePage;
