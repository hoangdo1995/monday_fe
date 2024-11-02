import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TableCellRender from "./TableCellRenderComponents/TableCellRender";

const TableDndRow = (props) => {
    const {tableId,item,id,tableSize,themeColor}=props;
    const columnList = useSelector((state)=>state.tableViewReducer.tableColumnTitle);
    const { attributes, listeners, isDragging, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({ id,data:{data:{rowData:{...item},tableSize,themeColor}}});
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };
      useEffect(()=>{

      },[item])
  return (
  <TableDndRowStyle>
    <div className={`tableDndRow relative h-fit ${isDragging?'tableDndRow-dragging':''}`} ref={setNodeRef}  style={style} {...attributes} >
      <div className={`table-dnd-row w-full border-l-8`} style={{borderLeftColor:themeColor}} >
          {columnList.map((title,index)=> { return <div className="" key={index}> {index===0?
            <div className="table-dnd-cell w-full sticky" ref={setActivatorNodeRef} {...listeners} style={{width:tableSize[index]}}>{item[title.columnTitleID]}</div>
            :<div className="table-dnd-cell w-full" style={{width:tableSize[index]}}><TableCellRender taskState={item['status']} tableId={tableId} data={item[title.columnTitleID]} id={item.id} columnTitleID={title.columnTitleID}/></div>} 
            </div>})}
      </div>
      <div className="maskRow absolute top-0 left-0"></div>
    </div>
  </TableDndRowStyle>
  )
};

export default TableDndRow;

const TableDndRowStyle = styled.div`
  .tableDndRow{
    .table-dnd-cell{
      width:100%;
      // background:var(--color-table-bg-main);
    }

  }

  .tableDndRow-dragging{
     background-color:transparent;
     .maskRow{
      width:100%;
      height: 100%;
      background:var(--color-body-bg);
      border: 1px dashed var(--color-table-border);
     }
  }
`
