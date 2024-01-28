import React from "react";
import { history } from "..";

const DirectionButtonDefault = (props) => {
  const {title,linkRouter,active,type} = props;
  return <button type={type?type:'button'} className={`rounded text-white px-4 py-2 text-base ${active?`bg-blue-600 hover:bg-blue-700`:`bg-gray-200`} `} disabled={!active}  onClick={()=>history.push(`${linkRouter?linkRouter:''}`)}>
            {title}
  </button>;
};

export default DirectionButtonDefault;
