import React, { useState } from "react";
import AdaptiveInputComponent from "../../GlobalComponents/AdaptiveInputComponent";
import NewTaskButtonComponent from "../../GlobalComponents/NewTaskButtonComponent";
import PersonButtonComponent from "../../GlobalComponents/PersonButtonComponent";
import FilterButtonComponent from "../../GlobalComponents/FilterButtonComponent";
import SortButtonComponent from "../../GlobalComponents/SortButtonComponent";
import HiddenButtonComponent from "../../GlobalComponents/HiddenButtonComponent";
import TableCollapseItem from "./TableCollapseItem";
import { closestCenter, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { handleDragEndSortable } from "../../../../utils/DndCustom/DndCustom";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import TableDndRow from "./TableViewComponent/TableDndRow";

const TableViewComponent = () => {
  // custom dnd-kit
  const ACTIVE_DRAG_ITEM_TYPE={
    COLUMN:'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    ROW:'ACTIVE_DRAG_ITEM_TYPE_ROW'
  }
  const pointerSensor = useSensor(PointerSensor, {activationConstraint:{distance:10}});
  const [activeId, setActiveId] = useState(null);
  const [activeDragItemData,setActiveDragItemData] = useState(null);
  const [activeDragItemType,setActiveDragItemType] = useState(null);
    const sensors = useSensors(
        pointerSensor,
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates,
        })
      );
  function handleDragStart(event) {
    setActiveId(event.active.id);
    setActiveDragItemType(event.active?.data?.current?.columnTitleID?ACTIVE_DRAG_ITEM_TYPE.COLUMN:ACTIVE_DRAG_ITEM_TYPE.ROW);
    setActiveDragItemData(event.active?.data?.current);
    console.log("dragStart", event.active);

    
    
    
  }
  
  function handleDragOver(event){
    const {active, over} = event;
    console.log("handleDragOver", event);
    if(!active||!over) return;
    
  }

  function handleDragEnd(event) {
    console.log('dragID',activeId);
    console.log('dragItemType',activeDragItemType);
    console.log('dragItemData',activeDragItemData);

    setActiveId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  }


  // demo data
  const [data,setData] = useState([
    {
        id:'1',
        task:'task 1',
        owner:'owner 1',
        status: 'stuck',
        dueDate:'11 Jun'
    },
    {
        id:'2',
        task:'task 2',
        owner:'owner 2',
        status: 'complete',
        dueDate:'11 Jun'
    },
    {
        id:'3',
        task:'task 3',
        owner:'owner 3',
        status: 'done',
        dueDate:'11 Jun'
    },
    {
        id:'4',
        task:'task 4',
        owner:'owner 4',
        status: 'waiting',
        dueDate:'11 Jun'
    }

  ]);
  const [data2,setData2] = useState([
    {
        id:'table_2_1',
        task:'task 6',
        owner:'owner 1',
        status: 'stuck',
        dueDate:'11 Jun'
    },
    {
        id:'table_2_2',
        task:'task 7',
        owner:'owner 2',
        status: 'complete',
        dueDate:'13 Jan'
    },
    {
        id:'table_2_3',
        task:'task 8',
        owner:'owner 3',
        status: 'done',
        dueDate:'16 May'
    },
    {
        id:'table_2_4',
        task:'task 9',
        owner:'owner 4',
        status: 'waiting',
        dueDate:'07 Sep'
    }

  ]);
  return (
    <div className="h-full flex flex-col">
      {/* menu */}
      <div className="mt-4">
        <div className="flex items-center" style={{fontSize:14}}>
          <div className="me-4">
            <NewTaskButtonComponent/>
          </div>
          <div className="me-2">
            <AdaptiveInputComponent/>
          </div>
          <div className="me-2">
            <PersonButtonComponent/>
          </div>
          <div className="me-2">
            <FilterButtonComponent/>
          </div>
          <div className="me-2">
            <SortButtonComponent/>
          </div>
          <div>
            <HiddenButtonComponent/>
          </div>
        </div>
      </div>
      {/* view */}
      <div className="flex-grow">
        <div className="w-full h-full overflow-x-scroll clear-scrollbar">
          <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
          >
            <TableCollapseItem items={data}/>
            <TableCollapseItem items={data2}/>
            <DragOverlay>
              {!activeDragItemType && null}
              {(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.ROW)&&<TableDndRow item={activeDragItemData} tableSize={200}/>}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  )
};

export default TableViewComponent;
