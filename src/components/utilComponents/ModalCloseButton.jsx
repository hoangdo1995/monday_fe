import { Tooltip } from "antd";
import React from "react";

const ModalCloseButton = () => {
  return <Tooltip title={'Close'} placement="right">
        <div className="border-2 flex justify-center items-center rounded-full bg-slate-950 shadow-lg shadow-slate-700" >
            <i className="fa fa-times text-white" style={{width:25,height:25,lineHeight:1.5}}></i>
        </div>
  </Tooltip>;
};

export default ModalCloseButton;
