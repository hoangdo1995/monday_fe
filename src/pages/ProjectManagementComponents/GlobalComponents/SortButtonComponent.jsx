import { SortAscendingOutlined } from "@ant-design/icons";
import { Dropdown, Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

import SortConditionItem from "./SortConditionItem";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";

const SortButtonComponent = () => {
    const [conditionSort,setConditionSort] = useState([]);
    const [openSort,setOpenSort] = useState(false);
    const handleMenuClick = (event) => {
        if (event.key === '') {
            setOpenSort(false);
        }
    };

    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpenSort(nextOpen);
        }
    };
    const addConditionSort = (sortField, arrangement)=>{
        
        
        setConditionSort([...conditionSort,{id:conditionSort.length>0?conditionSort[conditionSort.length-1].id+1:1,sortField:sortField,arrangement:arrangement}]);
    }
    // các hàm quản lý xự thay đổi của sort condition
    const removeConditionSort = (id)=>{
        setConditionSort(conditionSort.filter(item=>item.id!== id));
    }

    const handleChangeField = (value,id)=>{
        setConditionSort(conditionSort.map(condition=>{
            if(condition.id!==id) return condition
            else{
                condition.sortField = value;
                return condition;
            }
        }))
        
    }
    const handleChangeArrangement = (value,id)=>{
        setConditionSort(conditionSort.map(condition=>{
            if(condition.id!==id) return condition
            else{
                condition.arrangement = value;
                return condition;
            }
        }))
        
    }

    const handleDragEnd =(event)=>{
        const { active, over } = event;

        if(over?.id){
            if (active.id !== over.id) {
                setConditionSort((items) => {
                    const oldIndex = items.findIndex((item) => item.id === active.id);
                    const newIndex = items.findIndex((item) => item.id === over.id);
        
                    return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
    }
    // -------------------------------------------------//
    const items = [
        {
            key:"1",
            label:(
            <div className="text-dropdown-main">
                <div className="px-6 pt-4">
                    <div className="flex items-center justify-between mb-7">
                        <span>Sort this board by column</span>
                        <button className="button-none-bg border ms-5">Save as new view</button>
                    </div>
                    <DndContext onDragEnd={handleDragEnd}>
                        <SortableContext items={conditionSort} strategy={verticalListSortingStrategy}>
                            {(conditionSort.length!==0)?
                                conditionSort.map(condition=>(
                                    <SortConditionItem key={condition.id} condition={condition} removeConditionSortHandle={removeConditionSort} handleChangeField={handleChangeField} handleChangeArrangement={handleChangeArrangement}/>
                                ))
                                    :
                                <div className="max-w-56">
                                    Sort items by priority, deadline, orr any other column on this board
                                </div>
                            }
                        </SortableContext>
                    </DndContext>
                    <div className="mt-7">
                        <div>
                            <button className="button-none-bg" onClick={()=>addConditionSort('Owner','ascending')}>+ New sort</button>
                        </div>
                    </div>
                </div>
            </div>)
        }
    ];

    useEffect(()=>{

    },[conditionSort])
  return (
    <Tooltip title={'Sort board by any column'} placement="top">
        <Dropdown overlayClassName="main-dropdown" menu={{items,onClick:handleMenuClick}} trigger={['click']} onOpenChange={handleOpenChange} open={openSort} destroyPopupOnHide>
            <button className="button-light">
                <SortAscendingOutlined />
                <span className="ms-1">Sort</span>
            </button>
        </Dropdown>
    </Tooltip>
  )
};

export default SortButtonComponent;
