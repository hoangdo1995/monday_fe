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
import { renameTable, setTableViewSize } from "../../../../redux/reducer/TableProjectReducer/TableViewReducer";
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
import TableNameHeader from "./TableViewComponent/TaskNameHeader";


const TableCollapseItem = (props) => {
    // dnd-kit custom
    const {items} = props;
    const {id,tableThemeColor,tableData,tableName:tableNameState} = items;
    console.log(tableData);
    
    // redux
    const dispatch = useDispatch();
    const tableViewSizeReducer = useSelector((state)=>state.tableViewReducer.tableViewSizes);
    const tableViewColumnTitleReducer = useSelector((state)=>state.tableViewReducer.tableColumnTitle);
    
    const [showDetail, setShowDetail]= useState(false);
    const [themeColor,setThemeColor] = useState(tableThemeColor);
    const [tableSize,setTableSize] = useState(tableViewSizeReducer);
    const [tableTitleList,setTableTitleList] = useState(tableViewColumnTitleReducer);
    const setTableViewSizeReducer = async(value)=>{
            const action = setTableViewSize(value);
        await dispatch(action);
    }
    const setTableNameState = async(tableId,newName)=>{
        await dispatch(renameTable({tableId,newName}));
    }
  useEffect(()=>{
    
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
  },[showDetail,tableSize,tableViewColumnTitleReducer,tableData])
        
  return (
    <TableCollapseItemStyle>
        <div className="my-4 table-collapse w-full">
            {showDetail?
                (
                    <div>
                        <div className="table-container">
                            <div className="flex sticky-left">
                                <div className="flex items-center me-2">
                                    <DownOutlined className="cursor-pointer mb-1" style={{color:themeColor}} onClick={()=>setShowDetail(!showDetail)}/>
                                </div>
                                <TableNameHeader tableName={tableNameState} countTask={tableData.length} tableThemeColor={themeColor} setTableThemeColor={setThemeColor} setTableName={setTableNameState} direction={'flex'} tableId={id}/>
                            </div>
                            <div className="table-content rounded-tl-md" >
                                <div className="table-dnd-row table-row-header border-l-8 rounded-tl-md" style={{borderLeftColor:themeColor}}>
                                    <SortableContext items={tableTitleList} strategy={horizontalListSortingStrategy}>
                                        {tableViewColumnTitleReducer.map((column,index)=>
                                            <TableColumnTitle key={index} tableId={id} data={column} widthSize={tableSize[index]}/>
                                        )}
                                    </SortableContext>
                                    
                                    <div className="table-add-cell ps-3">
                                        <div>+</div>
                                    </div>
                                </div>
                                
                                    <SortableContext items={tableData} strategy={verticalListSortingStrategy} >
                                    {tableData.map((item,index)=>{
                                        return (
                                            <TableDndRow tableId={id} id={item.id} tableSize={tableSize} themeColor={themeColor} item={item} key={index}/>   
                                        )
                                    })}
                                    </SortableContext>
                                
                            </div>
                        </div>
                    </div>
                ):
                (
                    <div className="table-collapse-header">
                        <div className={`table-row-container backdrop-brightness-150 flex rounded-s-lg border-l-8`} style={{borderLeftColor:themeColor}}>
                            <div className={`px-1 py-2`}>
                                    <RightOutlined className={`font-bold cursor-pointer mb-1`} style={{color:themeColor}} onClick={()=>setShowDetail(!showDetail)}/>
                            </div>
                            <div className={`table-column`} style={{width:tableSize[0]}}>
                                <div className="w-full py-1 overflow-hidden">
                                    <TableNameHeader tableName={tableNameState} countTask={tableData.length} tableThemeColor={themeColor} setTableName={setTableNameState} setTableThemeColor={setThemeColor} tableId={id}/>
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
                border-top:1px solid var(--color-table-border) !important;
                .table-dnd-row{
                    display:flex;
                    width:100%;
                    height: fit-content;
                    cursor:pointer;
                    border-bottom:1px solid var(--color-table-border);
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
                        height:43px;
                        border-right:1px solid var(--color-table-row-border-color-main);
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
