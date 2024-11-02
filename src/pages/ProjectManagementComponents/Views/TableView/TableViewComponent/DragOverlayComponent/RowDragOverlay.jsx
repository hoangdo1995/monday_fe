import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TableCellRender from "../TableCellRenderComponents/TableCellRender";

const RowDragOverlay = (props) => {
    const {data} = props;
    const {rowData,themeColor} = data;
    const {table_id,id} = rowData;
    const columnList = useSelector((state)=>state.tableViewReducer.tableColumnTitle);
    const tableSize = useSelector((state)=>state.tableViewReducer.tableViewSizes);
    useEffect(()=>{

    },[data])
  return (
  <RowDragOverlayStyle>
    <div className="table-dnd-row rounded-sm border-l-8" style={{borderLeftColor:themeColor}}>
        {columnList.map((title,index)=> { return <div key={index}> {index===0?<div className="table-dnd-cell" style={{width:tableSize[index]}}>{rowData[title.columnTitleID]}</div>:<div className="table-dnd-cell" style={{width:tableSize[index]}}><TableCellRender id={id} tableId={table_id} data={rowData[title.columnTitleID]} columnTitleID={title.columnTitleID}/></div>} </div>})}
    </div>
  </RowDragOverlayStyle>
  );
};

const RowDragOverlayStyle = styled.div`
  .table-dnd-row{
    height:43px;
    display: flex;
    background: var(--color-table-bg-main);
    opacity:.65;
    .table-dnd-cell{
      height:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      border: 1px solid var(--color-table-border);
      text-align:center;
      padding:auto;
    }
  }
`

export default RowDragOverlay;
