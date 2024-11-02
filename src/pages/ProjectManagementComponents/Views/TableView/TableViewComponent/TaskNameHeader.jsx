import { Dropdown, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

const TableNameHeader = (props) => {
    const {tableName,tableId,setTableName,setTableThemeColor,tableThemeColor,direction,countTask} = props;
    const [onTyping,setOnTyping] = useState(false);
    const contentDirection = direction?direction:'';
    const handleClickOut=(event)=>{
        let containerElement = document.querySelector(`#tableNameGroup_input-${tableId}`);
        if(event.target.classList.contains('chooseColor')) return;
        if(containerElement&&!containerElement.contains(event.target)){
            setOnTyping(false)
        }
    }
    // dropdown choose color theme
    const items = [
        {
            key:'color',
            label:(
                <div className="w-full px-4">
                    <div className="flex gap-2 flex-wrap max-w-40">
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#027f4b"}} onClick={()=>setTableThemeColor("#027f4b")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#00c875"}} onClick={()=>setTableThemeColor("#00c875")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#9dd227"}} onClick={()=>setTableThemeColor("#9dd227")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#ffcb02"}} onClick={()=>setTableThemeColor("#ffcb02")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#784bd1"}} onClick={()=>setTableThemeColor("#784bd1")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#9d50dd"}} onClick={()=>setTableThemeColor("#9d50dd")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#df2e4a"}} onClick={()=>setTableThemeColor("#df2e4a")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#ff007f"}} onClick={()=>setTableThemeColor("#ff007f")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#ff642e"}} onClick={()=>setTableThemeColor("#ff642e")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#fdab3e"}} onClick={()=>setTableThemeColor("#fdab3e")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#c4c4c4"}} onClick={()=>setTableThemeColor("#c4c4c4")}></div>
                        <div className="w-6 h-6 rounded-lg chooseColor" style={{backgroundColor:"#757575"}} onClick={()=>setTableThemeColor("#757575")}></div>
                    </div>
                </div>
            )
        }
    ]
    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOut);
        onTyping&&document.querySelector(`#input-table-name-${tableId}`).focus();
        return ()=>{
            document.removeEventListener("mousedown",handleClickOut);
        }
    },[tableThemeColor])
  return (
    <div className={`${contentDirection} truncate w-full items-center mb-1`}>
        <Tooltip 
            className={`table-name max-w-full w-fit ${onTyping&&'hidden'} flex ${direction?'items-center group':'flex-col'}`}
            title={'Click to edit'}
            onClick={(event)=>{
                        setOnTyping(true);
                        setTimeout(() => {
                            document.getElementById(`input-table-name-${tableId}`).focus();
                        }, 200);
                    }
                    }
            >
            <span className="!text-xl truncate w-full grow font-medium hover:cursor-text border border-transparent hover:border-gray-600 rounded-md" style={{color:tableThemeColor,height:29}}>
                {tableName}
            </span>
            <div className={`${direction?'group-hover:inline-block hidden sm-2':''} !w-fit text-sm color-text-main opacity-70 font-light`}>
                {countTask} tasks
            </div>
        </Tooltip>
        <div className={`${onTyping?'':'hidden'} w-full flex items-center outline-none border border-blue-600 rounded-md px-2 my-0 !py-0`} id={`tableNameGroup_input-${tableId}`}>
            <Dropdown className="block cursor-pointer hover:opacity-75"
                menu={{items}}
                trigger={['click']}
                overlayClassName="main-dropdown"
            >
                <span className="w-4 h-4 rounded-sm" style={{background:tableThemeColor}}>

                </span>
            </Dropdown>
            <input 
                id={`input-table-name-${tableId}`}
                className="font-medium w-full truncate !text-xl bg-transparent border-none outline-none ms-2 !my-0 !py-0" 
                style={{maxWidth:700,color:tableThemeColor,fontSize:20}}
                onBlur={(event)=>{
                    setTableName(tableId,event.currentTarget.value?event.currentTarget.value:tableName);
                    if (!event.currentTarget.value)event.currentTarget.value=tableName;
                }}
                onKeyDown={(event)=>{
                    if(event.key==='Enter'){
                        event.preventDefault();
                        setTableName(tableId,event.currentTarget.value?event.currentTarget.value:tableName);
                        setOnTyping(false);
                    }
                }}
                defaultValue={tableName}
            />
        </div>
    </div>
  );
};

export default TableNameHeader;
