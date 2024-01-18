import React from "react";

const ColumnItemSelect = (props) => {
  const {svgLink,handlerClick,value,title,backgroundColor,checked} = props;
  return <div className="inline-block animate__animated animate__bounceIn me-7 mb-5" onClick={(event)=>event.currentTarget.classList.toggle('animate__bounceIn')}>
        <label className="column-item text-md font-normal text-gray-600 relative capitalize">
            <img className="rounded inline p-1 me-1" style={{backgroundColor:backgroundColor}} src={svgLink}/>
            <input type="checkbox" checked={checked}  style={{display:'none'}} onClick={(event)=>handlerClick(event,value)}/>
            {title?title:value}
            <div className="rounded absolute" style={{width:'120%',height:'190%'}}></div>
        </label>
  </div>;
};

export default ColumnItemSelect;
