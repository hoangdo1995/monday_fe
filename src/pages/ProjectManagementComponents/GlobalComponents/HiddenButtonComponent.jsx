import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import CheckboxDraggableItem from "./CheckboxDraggableItem";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { handleDragEndSortable } from "../../../utils/DndCustom/DndCustom";

const HiddenButtonComponent = (props) => {

    const [open,setOpen] = useState(false);
    const [listColumn,setListColumn] = useState([
        {
            id:'due_date',
            value:"Due date",
            checked:false
        },
        {
            id:'status',
            value:'Status',
            checked:false
        },
        {
            id:'owner',
            value:'Owner',
            checked:false
        }
    ])
    const checkboxChangeHandler = (event,value)=>{
        let updateListColumn = [...listColumn];
        updateListColumn = updateListColumn.map(column=>{
            if(column.value===value){
                return {...column,checked:event.currentTarget.checked};
            }
            return {...column}
        })
        setListColumn(updateListColumn);
    }

    // xử lý hiệu ứng cho xự kiện nhấn vào button tìm kiếm
    const handleMousedown = (event)=>{
        event.currentTarget.style.transform="scale(0.85)";
    }
    const handleMouseup = (event)=>{
        event.currentTarget.style.transform = "scale(1)";
    }
    // --------------------------------------------------
    const items = [
        {
            key:'1',
            label:(
                <div className="text-dropdown-main">
                <div className="px-5 py-3 min-w-80">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-base">Display columns</span>
                        <button className="button-none-bg !border-gray-400 !border">Save as new</button>
                    </div>
                    <div className="relative">
                        <input className="bg-transparent w-full" type="text" placeholder="Find column to show/hide"/>
                        <button id="search-column-for-hide" className="button-none-bg absolute right-2 top-1 !px-1 !py-0" onMouseEnter={(event)=>{event.currentTarget.addEventListener('mousedown',handleMousedown);event.currentTarget.addEventListener('mouseup',handleMouseup)}}><SearchOutlined /></button>
                    </div>
                    <div className="mt-3">
                        <div className="flex">
                            <div>
                                <div>
                                    <label className="flex items-center" htmlFor="">
                                        <input className="me-2" type="checkbox" onChange={(event)=>event.currentTarget.checked?setListColumn(listColumn.map(column=>{
                                            return {...column,checked:event.currentTarget.checked}}
                                            )):''}/>
                                        All column
                                    </label>
                                </div>
                            </div>
                            <div className="ms-10 opacity-65">
                                {(listColumn.filter(column=>column.checked===true)).length} selected
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="opacity-75 my-2 ps-1">Item columns</div>
                            {/* dnd list item */}
                            <DndContext onDragEnd={(event)=>handleDragEndSortable(event,setListColumn)}>
                                <SortableContext items={listColumn} strategy={verticalListSortingStrategy}>
                                    {listColumn.map(item=><CheckboxDraggableItem id={item.id} key={item.id} item={item} checkboxChangeHandler={checkboxChangeHandler}/>)}
                                </SortableContext>
                            </DndContext>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    ]

    const handleOpenChange = (nextOpen,info)=>{
        if(info.source==='trigger'||nextOpen){
            // xư lý xóa đăng ký lắng nghe sư kiện cho btn search
            if(!nextOpen){
                document.querySelector('#search-column-for-hide')?.removeEventListener('mouseup',handleMouseup);
                document.querySelector('#search-column-for-hide')?.removeEventListener('mousedown',handleMousedown);
            }
            
            setOpen(nextOpen);
        }
        
    }

    useEffect(()=>{
        
        
    },[open])

    return (
        <div>
            <Dropdown menu={{items}} overlayClassName="main-dropdown" open={open} onOpenChange={handleOpenChange} trigger={['click']}>
                <Tooltip title={'Hidden column'} placement="top" >
                    <button className="button-none-bg">
                        <i className="fa fa-eye-slash me-1"></i>
                            hidden
                    </button>
                </Tooltip>
            </Dropdown>
        </div>
    )
};

export default HiddenButtonComponent;
