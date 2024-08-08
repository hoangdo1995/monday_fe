import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const DemoDraggableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id: props.id});
      
      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        
      };
  return <div className="my-2 cursor-move" ref={setNodeRef} style={style} {...attributes} {...listeners}>
    {props.item.value}
  </div>;
};

export default DemoDraggableItem;
