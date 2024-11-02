import { CalendarOutlined, CloseSquareOutlined, InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { DatePicker, Tooltip } from "antd";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { getValueByFieldName, setValueByFieldName } from "../../../../../../redux/reducer/TableProjectReducer/TableViewReducer";
import { useDispatch, useSelector } from "react-redux";

const DueDateCell = (props) => {
    const {id,tableId,taskState} = props;
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const [notify,setNotify] = useState('');
    // lấy giá trị dueDate từ redux
    const data = useSelector((state)=>state.tableViewReducer.data);
    const currentTable = data.findIndex(table=>table.id==tableId);
    const currentTask = data[currentTable].tableData.findIndex(row=>row.id==id);
     const dueDateMemo = useMemo(()=>{
        const {dueDate} = data[currentTable].tableData[currentTask];
        return dueDate;
     },[tableId,id,open])

    const onChange=(date,dateString)=>{
        setOpen(false);
        dispatch(setValueByFieldName({fieldName:'dueDate',taskId:id,value:dateString,tableId:tableId}));
    }

    const onOpenChange=()=>{
        setOpen(!open)
    }

    const createNotifyMessage = ()=>{
        const today = dayjs();
        const targetDate = dayjs(dueDateMemo);
        const diffInDays = today.diff(targetDate,'days');
        const diffInMonths = today.diff(targetDate,'months');
        if(diffInDays>0){
            if(diffInMonths>0) setNotify(`${diffInMonths} months overdue`)
                else setNotify(`${diffInDays} days overdue`)
        }else if(diffInDays <0){
            if(diffInMonths < 0) setNotify(`${Math.abs(diffInMonths)} months left`)
                else setNotify(`${Math.abs(diffInDays)} days left`)
        }
        else{
            setNotify('today')
        }
    }
    useEffect(()=>{
        // xử lý kết quả trả về thông báo cho người dùng
        const today = dayjs();
        createNotifyMessage();
    },[dueDateMemo])
  return (
    <DueDateCellStyled>
        <div className="dueDateCell relative w-full h-full" onClick={()=>{
            const chooseDate = document.querySelector(`#choose-date-${id}`).click();
        }}>
            {!dueDateMemo&&
            <div className="dueDateCell-none-data z-10 flex w-full h-full items-center justify-center">
                <PlusOutlined className="dueDateCell-none-data__icon_plus  me-2 p-1 rounded-full" />
                <CalendarOutlined />
            </div>
            }
            {dueDateMemo&&(
                <div className="dueDateCell-has-data px-2 h-full ">
                    <div className="dueDateCell-has-data_iconNotification">
                        <Tooltip title={notify}>
                            {taskState==='done'?<i className="fa fa-check-circle text-green-700"></i>:<i className="fa fa-exclamation-circle text-red-500" ></i>}
                            
                            
                        </Tooltip>
                    </div>
                    <div className="flex justify-center items-center w-full h-full">
                        {dayjs(dueDateMemo).format('DD MMM')}
                    </div>  
                    <div className="dueDateCell-has-data_iconClear cursor-pointer" onClick={()=>{
                        dispatch(setValueByFieldName({fieldName:'dueDate',taskId:id,value:null,tableId:tableId}));
                        setOpen(false);
                    }}>
                        <CloseSquareOutlined />
                    </div>
                </div>
            )}

            <DatePicker className="absolute opacity-0 top-0 right-0 w-full -z-10" popupClassName="ant-picker-custom" defaultValue={dueDateMemo?dayjs(dueDateMemo):dayjs()} open={open} id={`choose-date-${id}`} onChange={onChange} onOpenChange={onOpenChange} picker="date" />
        </div>
    </DueDateCellStyled> 
  )
};

export default DueDateCell;

const DueDateCellStyled = styled.div`
    width:100%;
    height:100%;
    .dueDateCell{
        padding:5px;
        .dueDateCell-none-data{
            opacity:0;
            transition:linear .25s;
            border-radius: 4px;
            .dueDateCell-none-data__icon_plus{
                background-color:var(--color-btn-bg-light);
                font-size: 8px;
            }
            &:hover{
                opacity:100%;
                border:1px solid var(--color-table-row-border-color-main);
                cursor: text;
            }
        }
        .dueDateCell-has-data{
            display: flex;
            justify-content: center;
            align-items: center;
            .dueDateCell-has-data_iconClear{
                opacity:0;
            }
            &:hover{
                border:1px solid var(--color-table-row-border-color-main);
                border-radius:4px;
                cursor:text;
                .dueDateCell-has-data_iconClear{
                    opacity:1;
                }
            }
        } 
    }

`;
