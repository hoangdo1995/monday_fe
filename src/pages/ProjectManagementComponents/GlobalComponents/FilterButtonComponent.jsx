import { CloseOutlined, DownOutlined, ExclamationOutlined, FilterOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import FilterChoiceComponent from "./FilterChoiceComponent";
import personIcon from '../../../images/svg_images/Person_1.svg';
import GroupIcon from "../../../components/Icons/GroupIcon";
import NameIcon from "../../../components/Icons/NameIcon";
import OwnerIcon from "../../../components/Icons/OwnerIcon";
import DueDateIcon from "../../../components/Icons/DueDateIcon";
import StatusIconLabel from "../../../components/Icons/StatusIconLabel";
import StatusIcon from './StatusIcon'

const FilterButtonComponent = () => {
  const [openQuickFilter,setOpenQuickFilter] = useState(false);
  const [openAdvancedFilter,setOpenAdvancedFilter] = useState(false);
  const [tooltipOpen,setTooltipOpen] = useState(false);
  // Dữ liệu gốc cho các items
  const originalItems = [
    { key: '1',
      label: 
        <div className="text-dropdown-main" style={{maxWidth:700}}>
            <div className="flex justify-between items-center text-sm mb-4 px-6">
                <div>
                    <span className="font-medium me-2">Quick filters</span>
                    <span className="font-light">Showing all of 6 projects</span>
                    <Tooltip title={'Learn more about filter'} placement="top">
                      <span className="rounded-full border ms-3"><ExclamationOutlined /></span>
                    </Tooltip>
                </div>
                <div>
                    <button className="button-light">Clear all</button>
                    <button className="button-light ms-2 border border-gray-500">Save as new view</button>
                </div>
            </div>
            <div id="quick-filter-container" className="relative px-6 pb-3 break-line-bottom">
              <div  className="flex w-full overflow-x-auto custom-scrollbar-transparent h-fit pe-3 overflow-hidden pb-2">
                <div className="h-fit">
                  <div className="mb-3">Recent filters</div>
                  <div className="flex h-fit">
                    <div className="h-full">
                      <div className="opacity-70 pb-3">Group</div>
                      <div>
                          <FilterChoiceComponent title={'Top group'} value={6} tooltip={"Group is top group"}/>
                          <FilterChoiceComponent title={'To-do'} value={6} tooltip={"Group is to-do"}/>
                          <FilterChoiceComponent title={'Completed'} tooltip={"Group is complete"}/>
                      </div>
                    </div>
                    <div className="ms-5 h-full">
                      <div className="opacity-70 pb-3">Status</div>
                      <div className="custom-scrollbar-transparent overflow-x-hidden overflow-y-scroll pe-2">
                        <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'allDone'}/>All done label</div>} value={1} tooltip={"Status is all done labels"}/>
                        <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'done'}/>Done</div>} value={1} tooltip={"Status is done"}/>
                        <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'working'}/>Working on it</div>} value={1} tooltip={"Status is working on it"}/>
                        <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'stuck'}/>Stuck</div>} value={1} tooltip={"Status is Stuck"}/>
                        <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'notStart'}/>Not Started</div>} value={1} tooltip={"Status is Not Started"}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-3">
                  <div>
                    <div className="mb-3">All columns</div>
                    <div className="flex h-fit">
                      <div className="mx-2">
                        <div className="opacity-70 pb-3">Group</div>
                        <div>
                          <FilterChoiceComponent title={'Top group'} value={'6'} tooltip={'Group is Top Group'}/>
                          <FilterChoiceComponent title={'To-do'} value={'6'} tooltip={'Group is To-do'}/>
                          <FilterChoiceComponent title={'Complete'} tooltip={'Group is Complete'}/>
                        </div>
                      </div>
                      <div className="mx-2">
                        <div className="opacity-70 pb-3">Name</div>
                        <div>
                          <FilterChoiceComponent title={'New project'} value={'3'} tooltip={'Name is New project'}/>
                          <FilterChoiceComponent title={'Project 1'} value={'6'} tooltip={'Name is Project 1'}/>
                          <FilterChoiceComponent title={'Project 2'} value={'1'} tooltip={'Name is Project 2'}/>
                          <FilterChoiceComponent title={'Project 3'} value={'1'} tooltip={'Name is Project 3'}/>
                        </div>
                      </div>
                      <div className="mx-2">
                        <div className="opacity-70 pb-3">Owner</div>
                        <div>
                          <FilterChoiceComponent title={<><span className="inline-block me-2 w-5 h-5 rounded-full bg-blue-500">T</span><span className="truncate">Me (Dynamic)</span></>} value={'3'} tooltip={'Owner is Tung'}/>
                          <FilterChoiceComponent title={<><span className="inline-block me-2 w-5 h-5 rounded-full bg-blue-500">T</span><span className="truncate">Tung</span></>} value={'3'} tooltip={'Owner is Tung'}/>
                          <FilterChoiceComponent title={<><img className="inline-block me-2 w-5" src={personIcon} alt="" /><span className="truncate">Unassigned</span></>} value={'3'} tooltip={'Owner is unassigned'}/>
                        </div>
                      </div>
                      <div className="ms-5">
                        <div className="opacity-70 pb-3">Status</div>
                        <div className="custom-scrollbar-transparent overflow-x-hidden overflow-y-auto pe-2">
                          <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'allDone'}/>All done label</div>} value={1} tooltip={"Status is all done labels"}/>
                          <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'done'}/>Done</div>} value={1} tooltip={"Status is done"}/>
                          <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'working'}/>Working on it</div>} value={1} tooltip={"Status is working on it"}/>
                          <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'stuck'}/>Stuck</div>} value={1} tooltip={"Status is Stuck"}/>
                          <FilterChoiceComponent title={<div className="flex items-center gap-2"><StatusIcon state={'notStart'}/>Not Started</div>} value={1} tooltip={"Status is Not Started"}/>
                        </div>
                      </div>
                      <div className="h-fit ms-5">
                          <div className="opacity-70 pb-3">Due date</div>
                          <div className="overflow-y-auto overflow-x-hidden custom-scrollbar-transparent pe-2 h-48">
                            <FilterChoiceComponent title={'Overdue'} value={'-'} tooltip={'Due date is Overdue'}/>
                            <FilterChoiceComponent title={'Done on time'} value={'-'} tooltip={'Due date is Done on time'}/>
                            <FilterChoiceComponent title={'Done overdue'} value={'-'} tooltip={'Due date is Done overdue'}/>
                            <FilterChoiceComponent title={'Today'} value={'-'} tooltip={'Due date is Today'}/>
                            <FilterChoiceComponent title={'Tomorrow'} value={'-'} tooltip={'Due date is Tomorrow'}/>
                            <FilterChoiceComponent title={'Yesterday'} value={'-'} tooltip={'Due date is Yesterday'}/>
                            <FilterChoiceComponent title={'This week'} value={'-'} tooltip={'Due date is This week'}/>
                            <FilterChoiceComponent title={'This week'} value={'-'} tooltip={'Due date is This week'}/>
                            <FilterChoiceComponent title={'Last week'} value={'-'} tooltip={'Due date is Last week'}/>
                            <FilterChoiceComponent title={'Next week'} value={'-'} tooltip={'Due date is Next week'}/>
                            <FilterChoiceComponent title={'This month'} value={'-'} tooltip={'Due date is This month'}/>
                            <FilterChoiceComponent title={'Tomorrow'} value={'-'} tooltip={'Due date is Tomorrow'}/>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* các button điều khiển thanh điều hướng */}
              <div id="quick-filter-navigate-left" className="hidden h-full absolute top-0 left-2 justify-center items-center px-2 bg-red-400">
                  left
              </div>
            </div>
            <div>
              <div className="px-3 pt-2">
                <button className="button-none-bg" onClick={()=>{setOpenQuickFilter(false);setOpenAdvancedFilter(true)}}>Switch to advanced filters</button>
              </div>
            </div>
        </div> 
    },
    { key: '2', 
     label: 
        <div className="text-dropdown-main">
            <div className="">
              <div className="px-6">
                <div className="flex justify-between items-center text-sm mb-4">
                  <div>
                      <span className="font-medium me-2">Advanced filters</span>
                      <span className="font-light">Showing all of 6 projects</span>
                      <Tooltip title={'Learn more about filter'} placement="top">
                        <span className="rounded-full border ms-3"><ExclamationOutlined /></span>
                      </Tooltip>
                  </div>
                  <div>
                      <button className="button-light">Clear all</button>
                      <button className="button-light ms-2 border border-gray-500">Save as new view</button>
                  </div>
                </div>  
              </div>
              <div className="break-line-bottom">
                <div className="px-6 pb-5">
                  <div className="flex items-center">
                    <span className="me-8">Where</span>
                    <span className="">
                      <Select
                        showSearch
                        className="main-select"
                        popupClassName="main-select-popup"
                        style={{width:150}}
                        options={[
                            {value:'name',label:<div className="main-select-item-choice"><NameIcon/><div className="title">Name</div></div>},
                            {value:'owner',label:<div className="main-select-item-choice"><OwnerIcon/><div className="title">Owner</div></div>},
                            {value:'dueDate',label:<div className="main-select-item-choice"><DueDateIcon/><div className="title">Due date</div></div>},
                            {value:'status',label:<div className="main-select-item-choice"><StatusIconLabel/><div className="title">Status</div></div>},
                            {value:'group',label:<div className="main-select-item-choice"><GroupIcon/><div className="title">Group</div></div>},
                        ]}
                        defaultValue={<>Name</>}
                      />
                    </span>
                    <span className="">
                      <Select
                          showSearch
                          className="main-select"
                          popupClassName="main-select-popup"
                          style={{width:150, marginLeft:8}}
                          options={[
                              {value:"is",label:"is"},
                              {value:"is not",label:"is not"},
                              {value:"text is",label:"text is"},
                              {value:"text is not",label:"text is not"},
                              {value:"contains",label:"contains"},
                              {value:"doesn't contain",label:"doesn't contain"},
                              {value:"start with",label:"start with"},
                          ]}
                        />
                    </span>
                    <span className="">
                      <Select
                            showSearch
                            className="main-select"
                            popupClassName="main-select-popup"
                            defaultValue={'Value'}
                            style={{width:150, marginLeft:8}}
                            options={[
                                {value:"is",label:"is"},
                                {value:"is not",label:"is not"},
                                {value:"text is",label:"text is"},
                                {value:"text is not",label:"text is not"},
                                {value:"contains",label:"contains"},
                                {value:"doesn't contain",label:"doesn't contain"},
                                {value:"start with",label:"start with"},
                            ]}
                          />
                    </span>
                    <span className="">
                      <button className="opacity-50 hover:opacity-100 mx-5">
                        <CloseOutlined />
                      </button>
                    </span>
                  </div>
                  <div className="flex mt-3 gap-2">
                    <div>
                      <button className="button-none-bg">+ New filter</button>
                    </div>
                    <div>
                      <button className="button-none-bg">+ New group</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-2">
                  <button className="button-none-bg" onClick={()=>{setOpenQuickFilter(true);setOpenAdvancedFilter(false)}}>Switch to quick filters</button>
              </div>
            </div>
        </div> 
    },
  ];

  // Custom lại tên các items
  const quickFilterItems = originalItems.slice(0, 1).map(item => ({
    key: item.key,
    title: item.label, // đổi 'label' thành 'title'
  }));

  const advancedFilterItems = originalItems.slice(1).map(item => ({
    key: item.key,
    title: item.label, // đổi 'label' thành 'title'
  }));

  

  const handleQuickFilterOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
        setOpenQuickFilter(nextOpen);
    }
  };
  const handleAdvancedFilterOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
        setOpenAdvancedFilter(nextOpen);
    }
  };
  const handleMenuClick =()=>{

  }

  const handleTooltipOpenChange = (open)=>{
        if(openAdvancedFilter||openQuickFilter){
            setTooltipOpen(false)
        }
        else{
            setTooltipOpen(open)
        }
  }

  const quickFilterMenu = (
    <Menu onClick={handleMenuClick}>
      {quickFilterItems.map(item => (
        <Menu.Item key={item.key}>
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );

  const advancedFilterMenu = (
    <Menu onClick={handleMenuClick}>
      {advancedFilterItems.map(item => (
        <Menu.Item key={item.key}>
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );

  

  useEffect(()=>{
    document.getElementById('quick-filter-container')?.addEventListener('scroll', (event)=>{
      // code xử lý hiển thị button navigate cho thanh scrollbar

  }); 
    
  },[openQuickFilter])
  
  return (
    <Tooltip title={'Filter board by anything'} open={tooltipOpen} onOpenChange={handleTooltipOpenChange}>
      <div className="button-light-parent">
        <Dropdown
          overlayClassName="main-dropdown"
          overlay={quickFilterMenu}
          trigger={["click"]}
          placement="bottomLeft"
          onOpenChange={handleQuickFilterOpenChange}
          open={openQuickFilter}
        >
          <div
            className={`dark-child !rounded-e-none`}
            style={{ marginRight: 1 }}
            onClick={() => setOpenQuickFilter(true)}
          >
            <span className="me-2"><FilterOutlined /></span>
            <span>Filter</span>
          </div>
        </Dropdown>
        <Dropdown
          overlayClassName="main-dropdown"
          overlay={advancedFilterMenu}
          trigger={["click"]}
          placement="bottomLeft"
          onOpenChange={handleAdvancedFilterOpenChange}
          open={openAdvancedFilter}
        >
          <div className={`light-child`}>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </Tooltip>
  )
};

export default FilterButtonComponent;
