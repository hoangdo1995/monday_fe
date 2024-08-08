import React from "react";
import GroupIcon from "../../../components/Icons/GroupIcon";
import NameIcon from "../../../components/Icons/NameIcon";
import OwnerIcon from "../../../components/Icons/OwnerIcon";
import StatusIconLabel from "../../../components/Icons/StatusIconLabel";
import DueDateIcon from "../../../components/Icons/DueDateIcon";
import { CloseOutlined, HolderOutlined, SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortConditionItem = (props) => {
    const {condition,removeConditionSortHandle,handleChangeField,handleChangeArrangement} = props;
    const {
        attributes,
        setActivatorNodeRef,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id: props.condition.id});
      
      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };
  return (
    <div className={` my-2`} ref={setNodeRef} style={style}>
        <div className="condition-sort-item">
            <div className="flex items-center">
                <button className="cursor-move" ref={setActivatorNodeRef} {...attributes} {...listeners}>
                    <HolderOutlined/>
                </button>
                <div className="cursor-pointer ms-2">
                    <Select
                        showSearch
                        className="main-select"
                        popupClassName="main-select-popup"
                        style={{width:150}}
                        options={[
                            {value:'name',label:<div className="main-select-item-choice"><NameIcon/><div className="title">Name</div></div>},
                            {value:'owner',label:<div className="main-select-item-choice"><OwnerIcon/><div className="title">Owner</div></div>},
                            {value:'dueDate',label:<div className="main-select-item-choice"><DueDateIcon/><div className="title">Due date</div></div>},
                            {value:'status',label:<div className="main-select-item-choice"><StatusIconLabel/><div className="title">Status</div></div>},
                            {value:'group',label:<div className="main-select-item-choice"><GroupIcon/><div className="title">Group</div></div>},
                        ]}
                        defaultValue={condition.sortField}
                        onChange={(value)=>{handleChangeField(value,condition.id)}}
                    />
                </div>
                <div className="cursor-pointer ms-2">
                    <Select
                            showSearch
                            className="main-select"
                            popupClassName="main-select-popup"
                            style={{width:150}}
                            options={[
                                {value:'ascending',label:<div className="main-select-item-choice"><SortAscendingOutlined/><div className="title">Ascending</div></div>},
                                {value:'descending',label:<div className="main-select-item-choice"><SortDescendingOutlined/><div className="title">Descending</div></div>},
                            ]}
                            defaultValue={condition.arrangement}
                            onChange={(value)=>handleChangeArrangement(value,condition.id)}
                        />
                </div>
                <div className="ms-2">
                    <button className="button-none-bg" onClick={()=>{removeConditionSortHandle(condition.id)}}> <CloseOutlined/></button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default SortConditionItem;
