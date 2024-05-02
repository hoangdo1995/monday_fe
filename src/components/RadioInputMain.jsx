import React, { useEffect, useState } from "react";

const RadioInputMain = (props) => {
    const {title,customStyle,value,name,checkedDefault,changeHandler} = props;
   
  return <label className="radio-input-main flex items-center cursor-pointer" style={customStyle}>
        <input type="radio" checked={checkedDefault} value={value?value:''} name={name?name:''} className="hidden" onChange={(event)=>changeHandler(event)}/>
        <span className="rounded-full bg-white me-2 " style={{width:13,height:13}}></span>
        {title}
  </label>;
};

export default RadioInputMain;
