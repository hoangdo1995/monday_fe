import React, { PureComponent } from "react";

const InputText = (props) => {
    const {placeholder,type} = props;

  return <input type={type?type:'text'} placeholder={placeholder} className="py-3 border border-gray-400 outline-none px-4 rounded hover:border-cyan-400 focus:border-slate-900 max-w-screen"/>;
};


export default InputText;
