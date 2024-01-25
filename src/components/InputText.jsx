import React, {useState } from "react";

const InputText = (props) => {
    const {placeholder,type,customStyle,onClickHandler,onChangeHandler,id,clearButton} = props;
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
        console.log(document.querySelector('#delete_btn_input_objectManager'));
        
        if(document.querySelector('#delete_btn_input_objectManager')){
          if(event.currentTarget.value.trim()!=='') {
            document.querySelector('#delete_btn_input_objectManager').style.display = 'block';
          }
          else{
            document.querySelector('#delete_btn_input_objectManager').style.display = 'none';
          }
        }
        onChangeHandler(event);
        return event.currentTarget.value.trim();
    }
  return <>
    <input id={id} type={type?type:'text'} placeholder={placeholder} className="py-3 border border-gray-400 outline-none px-4 rounded hover:border-cyan-400 focus:border-slate-900 max-w-screen truncate relative" style={customStyle} onClick={onClickHandler} onChange={onChangeHandlerSelf} onMouseLeave={mouseLeaveHandler} onMouseEnter={mouseEnterHandler} onBlur={onBlurHandler}/>
    {clearButton?<div className={`absolute !border-none !top-1 !left-36 hover:cursor-pointer`} id="delete_btn_input_objectManager" style={{display:'none'}}><i className="fa fa-times !text-gray-500" onClick={(event)=>document.querySelector(`#${id}`).value=''}></i></div>:''}
  </>;
};


export default InputText;
