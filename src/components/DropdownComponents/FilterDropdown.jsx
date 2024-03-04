import { Badge, Dropdown, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

const FilterDropdown = (props) => {
    const {filterList,setFilterList} =props;
    const [open, setOpen] = useState(false);
    //handler event select checkbox filter option
    const handlerFilterOptionSelect =(event)=>{
        if(event.currentTarget.checked){
            setFilterList([...filterList,event.currentTarget.value]);
        }
        else{
            setFilterList(filterList.filter((item)=>{return item!==event.currentTarget.value}))
        }
    }

    //handle xự kiện click trên items của dropdown
    const handleMenuClick = (event) => {
        if (event.key === '') {
            setOpen(false);
        }
    };

    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
        setOpen(nextOpen);
        }
    };

    //content dropdown
    const items = [
        {
            key:'1',
            label:<div className="opacity-70 font-light">
                Filter by
            </div>
        },
        {
            key:'2',
            label:<div>
                <label className="cursor-pointer flex items-center"><input type="checkbox" value={'main'} onChange={(event)=>handlerFilterOptionSelect(event)}/><div className="filter-checkbox"></div><i class="filter-check fa fa-check"></i> Main </label>
            </div>
        },
        {
            key:'3',
            label:<div>
                <label className="cursor-pointer flex items-center"><input type="checkbox" value={'private'} onChange={(event)=>handlerFilterOptionSelect(event)}/><div className="filter-checkbox"></div><i class="filter-check fa fa-check"></i> Private</label>
            </div>
        },
        {
            key:'4',
            label:<div className="break-line-bottom pb-2">
                <label className={`cursor-pointer flex items-center ${filterList.includes('dashboard')?'opacity-65':''}`}><input id="filter-shareable" type="checkbox" value={'shareable'} onChange={(event)=>handlerFilterOptionSelect(event)}/><div className="filter-checkbox"></div><i class="filter-check fa fa-check"></i> Shareable</label>
            </div>
        },
        {
            key:'5',
            label:<div>
                <label className="cursor-pointer flex items-center"><input type="checkbox" value={'subscriber_owner'} onChange={(event)=>handlerFilterOptionSelect(event)}/><div className="filter-checkbox"></div><i class="filter-check fa fa-check"></i> Subscriber or owner</label>
            </div>
        },
        {
            key:'6',
            label:<div className="break-line-bottom pb-2">
                <label className={`cursor-pointer flex items-center`}><input type="checkbox" value={'owner'} onChange={(event)=>handlerFilterOptionSelect(event)}/><div className="filter-checkbox"></div><i class="filter-check fa fa-check"></i> Owner only</label>
            </div>
        },
        {
            key:'7',
            label:<div>
                <label className={`cursor-pointer flex items-center ${filterList.includes('shareable')?'opacity-65':''}`}><input id="filter-dashboard" type="checkbox" value={'dashboard'} onChange={(event)=>handlerFilterOptionSelect(event)}/><div className="filter-checkbox"></div><i class="filter-check fa fa-check"></i> Dashboards only</label>
            </div>
        }
    ]

    useEffect(()=>{
        if(document.getElementById('filter-dashboard')){
            
            if(filterList.includes('shareable')){
                document.getElementById('filter-dashboard').disabled = true;
            }
            else{
                document.getElementById('filter-dashboard').disabled = false;
            }
        }
        if(document.getElementById('filter-shareable')){
            if(filterList.includes('dashboard')){
                document.getElementById('filter-shareable').disabled = true;
            }
            else{
                document.getElementById('filter-shareable').disabled = false;
            }
        }
    },[filterList])

  return <Dropdown menu={{items,onClick: handleMenuClick,}} overlayClassName="filter-dropdown" onOpenChange={handleOpenChange}
  open={open} trigger={['click']}>
        <Tooltip placement="top" title='Filter'>
        <div className={`workspace-filter-button absolute right-1 rounded ${filterList.length>0?'!block':''}`}>
            <i className="fa fa-filter text-transparent cursor-pointer"></i>
            <div className='rounded-full bg-sky-600 flex items-center justify-center absolute -top-1 -right-1' style={{fontSize:10,width:12,height:12}}>{filterList.length}</div>
        </div>
  </Tooltip>
  </Dropdown>;
};

export default FilterDropdown;
