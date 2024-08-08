import { HolderOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const CheckboxDraggableItem = (props) => {
    const {item,id,checkboxChangeHandler} = props;
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
      } = useSortable({id: props.id});
      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };
  return (
    <label  className="group flex button-none-bg !px-1 !py-0 cursor-pointer my-2 items-center" htmlFor={item.id} ref={setNodeRef} style={style}>
        <button className="cursor-move me-1 opacity-0 group-hover:opacity-100"  ref={setActivatorNodeRef} {...attributes} {...listeners}>
            <HolderOutlined  />
        </button>
        <input id={item.id} className="me-2" type="checkbox" value={props.item} onChange={(event)=>checkboxChangeHandler(event,item.value)} checked={item.checked}/>
        {item.value}
    </label>
  );
};

export default CheckboxDraggableItem;
