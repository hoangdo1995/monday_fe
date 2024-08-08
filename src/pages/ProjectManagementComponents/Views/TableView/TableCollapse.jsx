import { Collapse, Dropdown, Tooltip } from "antd";
import React from "react";
import { useState } from "react";

const TableCollapse = () => {

    const [tableName, setTableName] = useState('To-do');
    const [tableNameColor, setTableNameColor] = useState("#027f4b");
    const items = [
        {
            key:'color',
            label:(
                <div>
                    <div className="flex gap-2 wrapper">
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#027f4b"}}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#027f4b"}}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#027f4b"}}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#027f4b"}}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#784bd1"}}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:""}}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:""}}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:""}}></div>
                    </div>
                </div>
            )
        }
    ]
  return (
    <div className="table-view-container">
        <Collapse
            size="large"
            bordered={false}
            collapsible="icon"
            items={[
            {   
                key:'table_1',
                label:(
                <div>
                    <Tooltip 
                        className={`font-medium text-[#027f4b] text-lg hover:cursor-text hover:border border-gray-600 w-fit rounded-md px-2`}
                        title={'Click to edit'} 
                        onClick={(event)=>{event.currentTarget.style.display="none";
                                    event.currentTarget.nextElementSibling.style.display="block";event.currentTarget.nextElementSibling.focus()}
                                }
                    >
                        {tableName}
                    </Tooltip>
                    <input 
                        className="relative font-medium text-lg w-full hidden bg-transparent outline-none border border-blue-600 rounded-md px-2" 
                        style={{maxWidth:800}}
                        onFocus={(event)=>event.currentTarget.nextElementSibling.style.display="block"}
                        onBlur={(event)=>{
                            event.currentTarget.previousSibling.style.display="block";
                            event.currentTarget.style.display="none";
                            setTableName(event.currentTarget.value?event.currentTarget.value:tableName);
                            event.currentTarget.nextElementSibling.style.display="none"
                        }}
                        onKeyDown={(event)=>{
                            if(event.key==='Enter'){
                                event.preventDefault();
                                event.currentTarget.style.display="none";
                                setTableName(event.currentTarget.value?event.currentTarget.value:tableName);
                            }
                        }}
                        defaultValue={tableName}
                    />
                    <Dropdown 
                        menu={{items}}
                        trigger={['click','hover']}
                        overlayClassName="main-dropdown"
                    >
                        <span className="w-6 h-6 rounded-lg" style={{background:'yellow'}}>

                        </span>
                    </Dropdown>
                </div>
                ),
                header:(
                <div>
                    header
                </div>
                ),
                children:(
                <div>

                </div>
                )
            }
            ]}
        >
        </Collapse>
    </div>
  );
};

export default TableCollapse;
