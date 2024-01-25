import React from "react";

const ItemSelect = (props) => {
  const {svgLink,handlerClick,value,title,backgroundColor,checked} = props;
  return <div className="inline-block animate__animated animate__bounceIn me-7 mb-5" onClick={(event)=>event.currentTarget.classList.toggle('animate__bounceIn')}>
        <label className="select-item text-md font-normal text-gray-600 relative capitalize cursor-pointer">
            <img className="rounded inline p-1 me-1" style={{backgroundColor:backgroundColor}} src={svgLink}/>
            <input type="checkbox" checked={checked}  style={{display:'none'}} onClick={(event)=>handlerClick(event,value)}/>
            {title?title:value}
            <div className="rounded absolute bg-transparent" style={{width:'120%',height:'190%',zIndex:-1}}></div>
        </label>
  </div>;
};

export default ItemSelect;
