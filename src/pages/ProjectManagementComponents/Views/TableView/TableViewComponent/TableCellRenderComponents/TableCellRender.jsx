import React, { useEffect } from "react";
import StatusCell from "./StatusCell";
import DueDateCell from "./DueDateCell";
import OwnerCell from "./OwnerCell";

const TableCellRender = (props) => {
    const {data,tableId,columnTitleID,id, taskState}= props;
    
    const renderCell = (titleID,data)=>{
        switch(titleID){
            case'status':
                return <StatusCell tableId={tableId} taskId={id} value={data}/>;
            ;
            case'owner':
                return <OwnerCell tableId={tableId} taskId={id} value={data}/>;
            ;
            case 'dueDate':
                return <DueDateCell taskState={taskState}  tableId={tableId} value={data} id={id}/>
            default: return <div className="flex justify-center items-center">{data}</div>;
        }
    }
    useEffect(()=>{

    },[data])
  return (
    <div className="w-full h-full flex justify-center items-center">
        {renderCell(columnTitleID,data)}
    </div>
  );
};

export default TableCellRender;
