import React from "react";
import { history } from "..";

const DirectionButtonDefault = (props) => {
  const {title,linkRouter,type,onClickHandler,customStyle,disable} = props;
  const onClickSelf = (event)=>{{
      onClickHandler && onClickHandler();
      history.push(`${linkRouter?linkRouter:''}`)
  }}
  return <button type={type?type:'button'} className={`rounded text-white px-4 py-2 text-base disabled:!bg-gray-200 bg-blue-600 hover:bg-blue-700`} disabled={disable}  onClick={()=>onClickSelf()} style={customStyle}>
            {title}
  </button>;
};

export default DirectionButtonDefault;
