import React, { useEffect, useState } from "react";
import AdaptiveInputComponent from "../../GlobalComponents/AdaptiveInputComponent";
import NewTaskButtonComponent from "../../GlobalComponents/NewTaskButtonComponent";
import PersonButtonComponent from "../../GlobalComponents/PersonButtonComponent";
import FilterButtonComponent from "../../GlobalComponents/FilterButtonComponent";
import SortButtonComponent from "../../GlobalComponents/SortButtonComponent";
import HiddenButtonComponent from "../../GlobalComponents/HiddenButtonComponent";
import TableCollapseItem from "./TableCollapseItem";
import { closestCenter, defaultDropAnimationSideEffects, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { handleDragEndSortable } from "../../../../utils/DndCustom/DndCustom";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import TableDndRow from "./TableViewComponent/TableDndRow";
import { table_data } from "../../../../data/mockData";
import { useDispatch, useSelector } from "react-redux";
import { restrictToHorizontalAxis, restrictToVerticalAxis } from "@dnd-kit/modifiers";
import ColumnDragOverlay from "./TableViewComponent/DragOverlayComponent/ColumnDragOverlay";
import { removeColumnById, replaceRowPosition, replaceRowTable, replaceTableTitlePosition } from "../../../../redux/reducer/TableProjectReducer/TableViewReducer";
import RowDragOverlay from "./TableViewComponent/DragOverlayComponent/RowDragOverlay";

const TableViewComponent = () => {
  // custom dnd-kit
  const tableData = useSelector((state)=>state.tableViewReducer.data);
  const dispatch = useDispatch();
  const ACTIVE_DRAG_ITEM_TYPE={
    COLUMN:'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    ROW:'ACTIVE_DRAG_ITEM_TYPE_ROW'
  }
  // redux function custom
  const removeColumnTitleAction = (columnId)=>{
    const action = removeColumnById(columnId);
    dispatch(action);
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
    setActiveDragItemType(event.active?.data?.current?.data?.rowData?.table_id?ACTIVE_DRAG_ITEM_TYPE.ROW:ACTIVE_DRAG_ITEM_TYPE.COLUMN);
    setActiveDragItemData(event.active?.data?.current?.data);

    console.log("dragStart data", event.active.data.current.data);
    
    
    
  }

  const dropAnimation = {
    sideEffects:defaultDropAnimationSideEffects({
      styles:{active:{
        opacity: '0.5'
      }}
    })
  }
  
  function handleDragOver(event){
    const {active, over} = event;
   
    if(!active||!over) return;
    // xử lý khi drag over row
    if(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.ROW){
      // thực hiện xắp xếp row
      const activeTable = active.data.current.data?.rowData?.table_id;
      const overTable = over.data.current.data?.rowData?.table_id;
      if(activeTable!==overTable){
        setActiveDragItemData({...activeDragItemData,table_id:over.data.current.data?.rowData?.table_id});
        dispatch(replaceRowTable({activeTable,overTable,rowId:activeDragItemData.rowData.id}));
      }
    }
    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN){
      const activeColumn = active.data.current.data.id;
      const overColumn = over.data.current.data.id;
      if(over.data.current.data.columnTitleID==='name') return;
      dispatch(replaceTableTitlePosition({activeColumn,overColumn}))
    }
  }

  function handleDragEnd(event) {
    const {active,over} = event;
    if(!active||!over) return;
    const activeTable = active.data.current.data?.rowData?.table_id;
    if(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.ROW){
      dispatch(replaceRowPosition({tableId:activeTable,startId:active.data.current.data.rowData?.id,overId:over.data.current.data.rowData?.id}));
    }
    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN){
      const activeColumn = active.data.current.data.id;
      const overColumn = over.data.current.data.id;
      if(over.data.current.data.columnTitleID==='name') return;
      dispatch(replaceTableTitlePosition({activeColumn,overColumn}))
    }

    setActiveId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  }
   useEffect(()=>{

   },[tableData])

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
            {tableData.map((table,index)=><TableCollapseItem items={table} key={index}/>)}
            <DragOverlay dropAnimation={dropAnimation} >
              {!activeDragItemType && null}
              {(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.ROW)&&<RowDragOverlay data={activeDragItemData}/>}
              {(activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.COLUMN)&&<div><ColumnDragOverlay data={activeDragItemData}/></div>}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  )
};

export default TableViewComponent;
