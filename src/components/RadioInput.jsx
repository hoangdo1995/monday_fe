import React from "react";

const RadioInput = (props) => {
    const {value,name,title} = props;
  return <label className="radio border-2 w-fit ps-8 pe-3 py-1 rounded-s-full rounded-e-full me-3 my-2">
            <input className="hidden" type="radio" name={name} value={value}/>
            {title}
            <span></span>
        </label>;
};

export default RadioInput;
