import { DownOutlined } from "@ant-design/icons";
import React from "react";

const NewTaskButtonComponent = () => {
  return (
  <div className="flex w-fit">
    <div className=" button-main flex items-center text-sm font-medium !rounded-e-none cursor-pointer" style={{marginRight:.5}}>New task</div>
    <div className=" button-main !rounded-s-none cursor-pointer"><DownOutlined /></div>
  </div>
)
};

export default NewTaskButtonComponent;
