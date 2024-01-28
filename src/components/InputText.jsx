import React, {useState } from "react";

const InputText = (props) => {
    const {placeholder,type,customStyle,onClickHandler,onChangeHandler,id,clearButton,clearButtonStyle,defaultValue} = props;
    const mouseLeaveHandler = (event)=>{
      if(event.currentTarget == document.activeElement){
        event.currentTarget.classList.add('!border-sky-500');
      }
    }
    const mouseEnterHandler =(event)=>{
      event.currentTarget.classList.remove('!border-sky-500');
    }
    const onBlurHandler = (event)=>{
      event.currentTarget.classList.remove('!border-sky-500');
    }
    const onChangeHandlerSelf = (event)=>{
        if(document.querySelector(`#delete_btn_input_${id}`)){
          if(event.currentTarget.value.trim()!=='') {
            document.querySelector(`#delete_btn_input_${id}`).style.display = 'flex';
          }
          else{
            document.querySelector(`#delete_btn_input_${id}`).style.display = 'none';
          }
        }
        onChangeHandler(event);
    }
  return <div className="relative w-full">
    <input id={id} type={type?type:'text'} defaultValue={defaultValue?defaultValue:null} placeholder={placeholder} className="py-3 border border-gray-400 outline-none px-4 rounded hover:border-cyan-400 focus:border-slate-900 max-w-screen truncate w-full" style={customStyle} onClick={onClickHandler} onChange={onChangeHandlerSelf} onMouseLeave={mouseLeaveHandler} onMouseEnter={mouseEnterHandler} onBlur={onBlurHandler}/>
    {clearButton?<div className={`hidden absolute px-1 py-1 rounded !border-none top-0 -right-9 hover:cursor-pointer hover:bg-slate-200 justify-center items-center`} id={`delete_btn_input_${id}`} style={clearButtonStyle}><i className="fa fa-times !text-gray-500" onClick={(event)=>document.querySelector(`#${id}`).value=''}></i></div>:''}
  </div>;
};


export default InputText;
