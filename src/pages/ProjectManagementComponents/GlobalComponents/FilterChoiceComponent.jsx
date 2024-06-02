import { Tooltip } from "antd";
import React from "react";

const FilterChoiceComponent = (props) => {
    const {title,value,tooltip} = props;
  return (
    <Tooltip title={tooltip||""} placement="left">
        <button className="button-filter-choice flex justify-between items-center w-36 ">
            <div className="truncate">{title||"No name"}</div>
            <div className="opacity-60">{value||""}</div>
        </button>
    </Tooltip>
  )
};

export default FilterChoiceComponent;
