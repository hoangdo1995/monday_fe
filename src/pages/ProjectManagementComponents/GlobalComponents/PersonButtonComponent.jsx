import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Modal, Tooltip } from "antd";
import React, { useState } from "react";

const PersonButtonComponent = () => {
    const [open,setOpen] = useState(false);
    //handle xự kiện click trên items của dropdown
    const handleMenuClick = (event) => {
        if (event.key === '') {
            setOpen(false);
        }
    };

    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };
    const items = [
        {
          key: '1',
          label: (
            <div className="w-84 px-4 py-4 cursor-default text-dropdown-main" style={{fontSize:15}}>
                <div className=" ">
                    Filter this board by person <span className="inline-block w-fit px-2 py-1 ms-2 border rounded-md opacity-50">Save to this view</span><br></br>
                    And find items they're working on.
                </div>
                <div className="mt-3">
                    <Tooltip title={"Tung"}>
                        <button className="flex shadow-circle-in-hover font-bold items-center justify-center rounded-full w-8 h-8 bg-blue-600 cursor-pointer" onClick={(event)=>{event.currentTarget.classList.add('spinner-with-shadow');console.log('click');
                        }}>
                            T
                        </button>
                    </Tooltip>
                </div>
            </div>
          ),
        }
      ];
      

  return (
        <Dropdown menu={{ items,onClick:handleMenuClick }} trigger={["click"]} overlayClassName="main-dropdown" placement="bottom" onOpenChange={handleOpenChange} open={open}>
            <Tooltip title={'Filter board by person'}>
                <div className="button-light font-light" onClick={()=>setOpen(true)} >
                    <span className="me-2"><UserOutlined /></span>
                    <span>Person</span>
                </div>
            </Tooltip>
        </Dropdown>
  )
};

export default PersonButtonComponent;
