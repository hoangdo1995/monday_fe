import React from "react";
import { Link } from "react-router-dom";
import { history } from "..";

const DirectionButtonGray = (props) => {
    const {display,linkRouter} = props;
    const {title} = props;
  return <button className="rounded bg-transparent text-gray-600 px-4 py-2 text-base hover:bg-slate-200" onClick={()=>history.push(linkRouter?linkRouter:'')}>
            {title}
  </button>
};

export default DirectionButtonGray;
