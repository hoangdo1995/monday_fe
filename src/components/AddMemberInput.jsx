import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React, { useState } from "react";

const AddMemberInput = () => {
    const [role, setRole] = useState('admin');
    const [isFocus, setIsFocus] = useState(false);
    const items = [
        {
            label: (
                <div onClick={()=>setRole('admin')}>
                    <div className="font-medium text-sm">Admin</div>
                    <div className="font-light text-xs">Can invite & manager new users</div>
                </div>
            ),
            key: "admin",
        },
        {
            label: (
                <div onClick={()=>setRole('member')}>
                    <div className="font-medium text-sm">Member</div>
                    <div className="font-light text-xs">Can add and edit content</div>
                </div>
            ),
            key: "1",
        }
    ];

    return (
        <div className="flex my-2">
            <input className="add-member-email max-w-full border-2 border-r-0 outline-none rounded-l-md border-gray-300 py-1 px-2 w-3/5 focus:border-sky-400 focus:border-e-2"  type="email" placeholder="Add email here" style={{minWidth:250}}/>
            <div className={`select-role border-2 rounded-r-md border-gray-300 ${isFocus?'border-sky-400':''}`} onClick={()=>setIsFocus(!isFocus)}>
                <Dropdown menu={{items}} trigger={['click']} onOpenChange={()=>setIsFocus(!isFocus)}>
                    <span>
                        <Space className="capitalize flex items-center justify-between text-sm text-gray-600 font-semibold w-full h-full px-3 py-2" style={{minWidth:100}}>
                            {role}
                            {isFocus?<UpOutlined />:<DownOutlined/>}
                        </Space>
                    </span>
                </Dropdown>
            </div>
        </div>
    );
};

export default AddMemberInput;
