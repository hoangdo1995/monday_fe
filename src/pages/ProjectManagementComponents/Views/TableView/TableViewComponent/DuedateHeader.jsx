import React from "react";
import { useState } from "react";

const DueDateHeader = (props) => {
  const {themeColor} = props;
  const [title,setTitle] = useState('10-12 Jun');
  return (
    <div className="w-full text-center">
      <div className="mb-1">Due date</div>
      <div className="w-full rounded-full px-10 cursor-pointer min-w-40" style={{backgroundColor:themeColor}} onMouseOver={()=>setTitle('2d')} onMouseLeave={()=>setTitle('10-12 Jun')}>
          <div className="text-sm flex items-center justify-center" style={{height:26}}>
              {title}
          </div>
      </div>
    </div>
  );
};

export default DueDateHeader;
