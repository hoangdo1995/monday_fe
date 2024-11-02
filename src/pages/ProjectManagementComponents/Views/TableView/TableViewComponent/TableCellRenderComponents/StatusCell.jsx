import { Dropdown } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import styled from "styled-components";
import { setValueByFieldName } from "../../../../../../redux/reducer/TableProjectReducer/TableViewReducer";

const StatusCell = (props) => {
  const dispatch = useDispatch();
  const {value, taskId,tableId} = props;
  const setStatusValue = (value)=>{
    const action = setValueByFieldName({fieldName:'status',value,taskId, tableId})
    dispatch(action);
  }
  const items=[
    {
      key:'1',
      label:(
        <div className="statusCell__dropdown__choiceList">
          <div className="statusChoice bg-green-600" onClick={()=>setStatusValue("done")}>Done</div>
          <div className="statusChoice bg-yellow-600" onClick={()=>setStatusValue("working")} >Working on it</div>
          <div className="statusChoice bg-red-400" onClick={()=>setStatusValue("stuck")} >Stuck</div>
          <div className="statusChoice bg-gray-500" onClick={()=>setStatusValue("waiting")} >Not started</div>
        </div>
      )
    }
  ]
  const renderCell = (value)=>{
       switch(value){
            case'stuck':return <div className="w-full flex justify-center items-center h-full grow bg-red-400">Stuck</div>;
            case'done':return <div className="w-full flex justify-center items-center h-full bg-green-500">Done</div>;
            case'working':return <div className="w-full flex justify-center items-center h-full bg-yellow-600">Working on it</div>;
            case'waiting':return <div className="w-full flex justify-center items-center h-full bg-gray-500">Not started</div>;
            default: return <div>{value}</div>;
       } 
  }
  return (
  <StatusCellStyled>
    <div className="statusCell w-full flex justify-center items-center text-center h-full">
        <Dropdown
          menu={{items}}
          trigger={['click']}
          placement="bottom"
          arrow={true}
          overlayClassName="statusCell__dropdown"
          >
          {renderCell(value)}
        </Dropdown>
    </div>
  </StatusCellStyled>
  );
};

export default StatusCell;

const StatusCellStyled = styled.div`
  width:100%;
  height:100%;
  .statusCell{
    &:hover{
      opacity:.75;
      }
  }
`
