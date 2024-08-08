import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const TableDndRow = (props) => {
    const {item,tableSize}=props;
    const { attributes, listeners, isDragging, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({ id:item.id,rowID:'row' });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging?0.5:undefined
      };
  return (
    <div className="table-dnd-row" ref={setNodeRef}  style={style} >
        <div className="table-dnd-cell" style={{width:tableSize[0]}} ref={setActivatorNodeRef} {...attributes} {...listeners}>{item.task}</div>
        <div className="table-dnd-cell" style={{width:tableSize[1]}}>{item.owner}</div>
        <div className="table-dnd-cell" style={{width:tableSize[2]}}>{item.status}</div>
        <div className="table-dnd-cell" style={{width:tableSize[3]}}>{item.dueDate}</div>
    </div>
  )
};

export default TableDndRow;
