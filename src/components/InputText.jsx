import React, { PureComponent } from "react";

const InputText = (props) => {
    const {placeholder,type,customStyle,onClickHandler,onChangeHandler} = props;
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

  return <input type={type?type:'text'} placeholder={placeholder} className="py-3 border border-gray-400 outline-none px-4 rounded hover:border-cyan-400 focus:border-slate-900 max-w-screen truncate" style={customStyle} onClick={onClickHandler} onChange={onChangeHandler} onMouseLeave={mouseLeaveHandler} onMouseEnter={mouseEnterHandler} onBlur={onBlurHandler}/>;
};


export default InputText;
