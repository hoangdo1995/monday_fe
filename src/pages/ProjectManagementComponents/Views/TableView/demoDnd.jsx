import { DndContext, useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const DndDemo = (props) => {
  const {item,tableSize,id}=props;
  const {attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition} = useSortable({
    id: id,
  });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
      };

  return (
    <div className="table-dnd-row border border-green-400" ref={setNodeRef}  style={style} >
        <div className="p-4 hover:cursor-move"   {...attributes} {...listeners}>=</div>
        <div> {id}</div>
    </div>
  )
};

export default DndDemo;
