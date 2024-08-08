import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Tooltip } from "antd";
import React from "react";

const TableColumnTitle = (props) => {
  const {index,data,widthSize} = props;
    // custom dnd-kit
  const {attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition} = useSortable({
    id: data.id,
    data:data
  });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width:widthSize
      };
  return (
    <div className="table-dnd-cell relative group" aria-rowindex={index} ref={setNodeRef} {...attributes} style={style}>
        <Tooltip title={'Resize column'} mouseEnterDelay={.4}>
            <div className="resizer h-full w-1 bg-transparent cursor-e-resize absolute right-0 group-hover:bg-gray-500" >
            </div>
        </Tooltip>
        <div className="cursor-move" ref={setActivatorNodeRef}  {...listeners} >=</div>
        {data.title}
    </div>
  );
};

export default TableColumnTitle;
