import { DownOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import StatusHeader from "./TableViewComponent/StatusHeader";
import TaskNameHeader from "./TableViewComponent/TaskNameHeader";
import DueDateHeader from "./TableViewComponent/DuedateHeader";
import styled, { createGlobalStyle } from "styled-components";
import OwnerHeader from "./TableViewComponent/OwnerHeader";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setTableViewSize } from "../../../../redux/reducer/TableProjectReducer/TableViewReducer";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import {
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';
  import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
import TableDndRow from "./TableViewComponent/TableDndRow";
import DndDemo from "./demoDnd";
import { handleDragEndSortable } from "../../../../utils/DndCustom/DndCustom";
import TableColumnTitle from "./TableViewComponent/TableColumnTitle";

const TableCollapseItem = (props) => {
    // dnd-kit custom
    const {items} = props;
    
   
      
  const dispatch = useDispatch();
  const [data,setData] = useState(items)
  const tableViewSizeReducer = useSelector((state)=>state.tableViewReducer.tableViewSizes);
  const tableViewColumnTitleReducer = useSelector((state)=>state.tableViewReducer.tableColumnTitle);
  console.log(tableViewColumnTitleReducer);
  
  const [showDetail, setShowDetail]= useState(false);
  const [tableName,setTableName] = useState('To-do');
  const [tableThemeColor,setTableThemeColor] = useState('#027f4b');
  const [tableSize,setTableSize] = useState(tableViewSizeReducer);
  const [tableTitleList,setTableTitleList] = useState(tableViewColumnTitleReducer);
  const setTableViewSizeReducer = async(value)=>{
        const action = setTableViewSize(value);
        await dispatch(action);
  }
  useEffect(()=>{
    console.log('rerender');
    
    document.querySelectorAll('.resizer').forEach((resizer,index)=>{
        resizer.addEventListener('mousedown',initialResize);
        function initialResize(e){
            let prevX = e.clientX;
            let parent = resizer.parentElement;
            let prevWidth = parent.offsetWidth;
            let newTableSize;
            window.addEventListener('mousemove',startResize)
            window.addEventListener('mouseup',endResize)
            function startResize(e){
                console.log(`${index} ${prevWidth}'start'`);
                let newX = e.clientX;
                let diffX = newX - prevX;
                let newWidth = diffX + prevWidth;
                newTableSize = tableSize.map((size,indexTable)=>{
                    if(indexTable===index){
                        if(index===0&&newWidth<300){
                           return  300;
                        }
                        if(newWidth<200) return 200;
                        return newWidth;
                    }
                    return size;
                })
                setTableSize(newTableSize);
                
            }
            function endResize(e){
                setTableViewSizeReducer(newTableSize);
                window.removeEventListener('mousemove',startResize);
                window.removeEventListener('mouseup',endResize);
            }
            
        }
    });
  },[showDetail,tableSize])
        
  return (
    <TableCollapseItemStyle>
        <div className="my-4 table-collapse">
            {showDetail?
                (
                    <div>
                        <div className="table-container">
                            <div className="flex sticky-left">
                                <div className="flex items-center me-2">
                                    <DownOutlined className="cursor-pointer" style={{color:tableThemeColor}} onClick={()=>setShowDetail(!showDetail)}/>
                                </div>
                                <TaskNameHeader tableName={tableName} tableThemeColor={tableThemeColor} setTableThemeColor={setTableThemeColor} setTableName={setTableName} direction={'flex'}/>
                            </div>
                            <div className="table-content">
                                <div className="table-dnd-row table-row-header">
                                    <SortableContext items={tableTitleList} strategy={horizontalListSortingStrategy}>
                                        {tableTitleList.map((column,index)=>
                                            <TableColumnTitle key={column.name} index={index} data={column} widthSize={tableSize[index]}/>
                                        )}
                                    </SortableContext>
                                    
                                    <div className="table-add-cell ps-3">
                                        <div>+</div>
                                    </div>
                                </div>
                                
                                    <SortableContext items={data} strategy={verticalListSortingStrategy}>
                                    {data.map((item,index)=>{
                                        return (
                                            <TableDndRow id={item.id} tableSize={tableSize} item={item} />   
                                        )
                                    })}
                                    </SortableContext>
                                
                            </div>
                        </div>
                    </div>
                ):
                (
                    <div className="table-collapse-header">
                        <div className={`table-row-container backdrop-brightness-150 flex rounded-s-lg border-l-8`} style={{borderLeftColor:tableThemeColor}}>
                            <div className={`px-1 py-2`}>
                                    <RightOutlined className={`font-bold cursor-pointer`} style={{color:tableThemeColor}} onClick={()=>setShowDetail(!showDetail)}/>
                            </div>
                            <div className={`table-column`} style={{width:tableSize[0]}}>
                                <div className="w-72 py-1">
                                    <TaskNameHeader tableName={tableName} tableThemeColor={tableThemeColor} setTableName={setTableName} setTableThemeColor={setTableThemeColor}/>
                                </div>
                            </div>
                            <div className="table-column" style={{width:tableSize[1]}}>
                                <StatusHeader workProgressDetail={{done:3,working:3,stuck:1,noStart:4,total:11}}/>
                            </div>
                            <div className="table-column" style={{width:tableSize[2]}}>
                                <DueDateHeader themeColor={tableThemeColor}/>
                            </div>
                            <div className="table-column" style={{width:tableSize[3]}}>
                                <OwnerHeader/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </TableCollapseItemStyle>
)
};

const TableCollapseItemStyle = styled.div`
    
    .table-collapse{
        .table-container{
            .table-content{
                background-color:var(--color-table-bg-main);
                width:fit-content;
                min-width:100%;
                border-top:1px solid gray;
                .table-dnd-row{
                    display:flex;
                    width:100%;
                    height: fit-content;
                    cursor:pointer;
                    border-bottom:1px solid gray;
                    .table-dnd-cell{
                        flex-shrink:0;
                        flex-grow:0;
                        user-select: none; 
                        -webkit-user-select: none; 
                        -moz-user-select: none; 
                        -ms-user-select: none; 
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        width:100%;
                        height:30px;
                        border-right:1px solid gray;
                    }
                    .table-add-cell{
                        use-select:none;
                        flex-grow:10;
                        min-width:100px;
                        text-align: left;
                    }
                }
                .table-dnd-row:hover{
                    background-color:var(--color-row-hover-bg);
                    box-shadow: 0px 5px 12px -10px var(--color-table-shadow);
                }
                .table-row-header.table-dnd-row:hover{
                    background-color:var(--color-table-bg-main);
                }
                
            }
        }
        .table-collapse-header{
            .table-row-container{
                border-bottom:1px solid var(--color-break-line);
                .table-column{
                    border-right: 1px solid var(--color-break-line);
                    padding: 3px 20px;
                }
            }
        }
    }
`;

export default TableCollapseItem;
