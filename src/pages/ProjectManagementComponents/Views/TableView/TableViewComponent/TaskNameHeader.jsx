import { Dropdown, Tooltip } from "antd";
import React, { useEffect } from "react";

const TaskNameHeader = (props) => {
    const {tableName,setTableName,setTableThemeColor,tableThemeColor,direction} = props;
    const contentDirection = direction?direction:'';
    const handleClickOut=(event)=>{
        let containerElement = document.querySelector('#table-name-header-group');
        if(!containerElement.contains(event.target)){
            containerElement.style.display = 'none';
            document.querySelector(".table-name").style.display="block";
        }
    }
    // dropdown choose color theme
    const items = [
        {
            key:'color',
            label:(
                <div className="w-full px-4">
                    <div className="flex gap-2 flex-wrap max-w-40">
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#027f4b"}} onClick={()=>setTableThemeColor("#027f4b")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#00c875"}} onClick={()=>setTableThemeColor("#00c875")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#9dd227"}} onClick={()=>setTableThemeColor("#9dd227")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#ffcb02"}} onClick={()=>setTableThemeColor("#ffcb02")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#784bd1"}} onClick={()=>setTableThemeColor("#784bd1")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#9d50dd"}} onClick={()=>setTableThemeColor("#9d50dd")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#df2e4a"}} onClick={()=>setTableThemeColor("#df2e4a")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#ff007f"}} onClick={()=>setTableThemeColor("#ff007f")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#ff642e"}} onClick={()=>setTableThemeColor("#ff642e")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#fdab3e"}} onClick={()=>setTableThemeColor("#fdab3e")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#c4c4c4"}} onClick={()=>setTableThemeColor("#c4c4c4")}></div>
                        <div className="w-6 h-6 rounded-lg" style={{backgroundColor:"#757575"}} onClick={()=>setTableThemeColor("#757575")}></div>
                    </div>
                </div>
            )
        }
    ]
    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOut);
        return ()=>{
            document.removeEventListener("mousedown",handleClickOut);
        }
    },[tableThemeColor])
  return (
    <div className={`${contentDirection} w-full items-center`}>
        <Tooltip 
            className={`table-name w-fit flex ${direction?'items-center group':'flex-col'}`}
            title={'Click to edit'}
            onClick={(event)=>{event.currentTarget.style.display="none";
                        event.currentTarget.nextElementSibling.style.display="flex";
                        document.querySelector("#input-table-name").focus();
                    }
                    }
            >
            <span className="!text-xl font-medium hover:cursor-text border border-transparent hover:border-gray-600 w-fit rounded-md" style={{color:tableThemeColor,height:29}}>
                {tableName}
            </span>
            <div className={`${direction?'group-hover:inline-block hidden sm-2':''} text-sm color-text-main opacity-70 font-light`}>
                6 tasks
            </div>
        </Tooltip>
        <div className="hidden w-full items-center outline-none border border-blue-600 rounded-md px-2 my-0 !py-0" id="table-name-header-group">
            <Dropdown className="block cursor-pointer hover:opacity-75"
                menu={{items}}
                trigger={['click']}
                overlayClassName="main-dropdown"
            >
                <span className="w-4 h-4 rounded-sm" style={{background:tableThemeColor}}>

                </span>
            </Dropdown>
            <input 
                id="input-table-name"
                className="font-medium !text-xl bg-transparent border-none outline-none ms-2 !my-0 !py-0" 
                style={{maxWidth:700,color:tableThemeColor,fontSize:20}}
                onBlur={(event)=>{
                    setTableName(event.currentTarget.value?event.currentTarget.value:tableName);
                    if (!event.currentTarget.value)event.currentTarget.value=tableName;
                }}
                onKeyDown={(event)=>{
                    if(event.key==='Enter'){
                        event.preventDefault();
                        setTableName(event.currentTarget.value?event.currentTarget.value:tableName);
                        event.currentTarget.parentNode.style.display = 'none';
                        event.currentTarget.parentNode.previousSibling.style.display = 'block';
                    }
                }}
                defaultValue={tableName}
            />
        </div>
    </div>
  );
};

export default TaskNameHeader;
