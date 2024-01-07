import React from "react";

const LabelInput = (props) => {
    const {name,id} = props;
  return <>
    <label htmlFor={id} className='font-light text-base mb-1 mt-3'>{name}</label>
  </>
};

export default LabelInput;
