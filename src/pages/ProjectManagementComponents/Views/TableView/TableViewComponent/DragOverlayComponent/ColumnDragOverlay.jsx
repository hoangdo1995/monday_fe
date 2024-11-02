import React, { useState } from "react";
import { useSelector } from "react-redux";

const ColumnDragOverlay = (props) => {
    
    const {data} = props;
    const {id,columnTitleID,title} = data;
  return (
    <div className="w-54 border cursor-grabbing border-gray-600 bg-slate-300 text-slate-800 rounded-md opacity-75">
        <div className="text-center">
            {title}
        </div>
        <div className="w-full bg-red-300 h-48"></div>
    </div>
  );
};

export default ColumnDragOverlay;
