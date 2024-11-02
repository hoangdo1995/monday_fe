import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Tooltip } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import MoveCursorComponentIcon from "../../../../../components/Icons/MoveCursorComponentIcon";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { renameColumnTitle } from "../../../../../redux/reducer/TableProjectReducer/TableViewReducer";
import { useDispatch } from "react-redux";

const TableColumnTitle = (props) => {
  const dispatch = useDispatch();

  const {index,data,widthSize,tableId} = props;
  const renderColumnId = tableId+data.id ;

  const [isTyping,setIsTyping] = useState(false);
    // custom dnd-kit
  const {attributes, listeners, isDragging, setNodeRef, setActivatorNodeRef, transform, transition} = useSortable({
    id: renderColumnId,
    data:{data:{...data}},
  });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width:widthSize,
        opacity:isDragging?.7:undefined,
      };
  return (
  <TableColumnTitleStyle>

    <div className={`tableTitleHeader text-center relative group ${isDragging?'tableTitleHeader-dragging':''}`}  ref={setNodeRef} {...attributes} style={style}>
        <Tooltip title={'Resize column'} mouseEnterDelay={.4}>
            <div className="resizer h-full w-1 bg-transparent cursor-e-resize absolute right-0 top-0 group-hover:bg-gray-500" >
            </div>
        </Tooltip>
        <div className="tableTitleHeader__cursorMove" ref={setActivatorNodeRef}  {...(data.columnTitleID==='name')?'':listeners} >
            <MoveCursorComponentIcon/>
        </div>
        <div className={`tableColumnHeader__title flex justify-center`}>
            {!isTyping&&
            <>
              <div className="tableColumnHeader__title_display truncate" onClick={()=>setIsTyping(!isTyping)}>{data.title}</div>
              {data.columnTitleID!=='name'&&<div><ExclamationCircleOutlined  className="px-2"/></div>}
            </>
            }
            {isTyping&&<input 
                          className="tableColumnHeader__title_input bg-transparent outline-none" 
                          type="text" 
                          defaultValue={data.title}
                          onBlur={()=>setIsTyping(!isTyping)}
                          autoFocus={true}
                          onKeyDown={(event)=>{
                              if(event.key === 'Enter'){
                                if(event.currentTarget.value!==data.title){
                                  console.log(event.currentTarget.value);
                                  
                                  dispatch(renameColumnTitle({columnId:data.id, newTitle:event.currentTarget.value}));
                                }
                                setIsTyping(!isTyping);
                              }
                          }}
            />}
        </div>
    </div>
  </TableColumnTitleStyle>
  );
};

export default TableColumnTitle;

const TableColumnTitleStyle = styled.div`
  .tableTitleHeader{
    padding: 10px !important;
    font-weight: 700;
    border-right:1px solid var(--color-table-row-border-color-main);
    .tableTitleHeader__cursorMove{
        color:var(--color-text-main);
        display:none;
        position: absolute;
        top:0px;
        right:50%;
        transform: translateX(50%);
        transform: translateY(-50%);
    }
    .tableColumnHeader__title{
      font-weight:500;
      .tableColumnHeader__title_display{
        border:1px solid transparent;
        padding:0 4px;
        border-radius: 4px;
      }
      .tableColumnHeader__title_input{
        width:100%;
        padding: 0 4px;
        border:1px solid transparent;
        border-radius:4px;
        &:focus{
          border-color:var(--color-border-input-hover);
          background: var(--color-body-bg);
        }
      }
      &:hover{
        .tableColumnHeader__title_display{
          border-color: var(--color-table-row-border-color-main);
          cursor: text;
        }
      }
    }
    &:hover{
      .tableTitleHeader__cursorMove{
        display:block;
      }
    }
  }
  .tableTitleHeader.tableTitleHeader-dragging{
    background: var(--color-bg-headerTitle-dragging);
  }
`
