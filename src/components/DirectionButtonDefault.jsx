import React from "react";
import { history } from "..";
import { useRoutes } from "react-router-dom";

const DirectionButtonDefault = (props) => {
    const {display,linkRouter} = props;
    const {title} = props;
  return <button className="rounded text-white px-4 py-2 text-base bg-blue-600 hover:bg-blue-700" onClick={()=>history.push(`${linkRouter?linkRouter:''}`)}>
            {title}
  </button>;
};

export default DirectionButtonDefault;
