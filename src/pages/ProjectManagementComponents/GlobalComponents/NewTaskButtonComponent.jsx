import { AppstoreAddOutlined, DownOutlined, DownloadOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import React from "react";

const NewTaskButtonComponent = () => {
  const items = [
    {
      key:'1',
      label:(
        <div className="text-dropdown-main px-3 py-1 mb-1  mx-2 button-none-bg">
            <span className="me-2"><AppstoreAddOutlined /></span>New group of tasks
        </div>
      )
    },
    {
      key:'1',
      label:(
        <div className="text-dropdown-main px-3 py-1 mx-2 button-none-bg">
          <span className="me-2"><DownloadOutlined /></span>Import tasks
        </div>
      )
    }
  ]
  return (
  <div className="flex w-fit">
    <div className=" button-main flex items-center text-sm font-medium !rounded-e-none cursor-pointer" style={{marginRight:.5}}>New task</div>
    <Dropdown
      menu={{items}}
      trigger={['click']}
      overlayClassName="main-dropdown"
    >
      <div className=" button-main !rounded-s-none cursor-pointer"><DownOutlined /></div>
    </Dropdown>
  </div>
)
};

export default NewTaskButtonComponent;
