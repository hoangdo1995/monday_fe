import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { Dropdown, Modal, Tooltip } from "antd";
import AddWorkSpaceDropdown from "../../components/DropdownComponents/AddWorkSpaceDropdown";
import FilterDropdown from "../../components/DropdownComponents/FilterDropdown";
import { Outlet } from "react-router-dom";
import TemplateCenterModal from "../../components/DashboardComponent/TemplateCenterModal";
import { history } from "../..";

const DashboardPage = () => {

    const [workspaceDropdownOpen, setWorkspaceDropdownOpen] = useState(false);
    const [navigateOpen, setNavigateOpen] = useState(true);
    const [navigateIsHover,setNavigateIsHover] = useState(false);

    
    //Modal controller
    const [templateCenterModalOpen,setTemplateCenterModalOpen] = useState(false);

    //state quản lý trạng thái của filter search
    const [filterList, setFilterList] = useState([]);

    const handleMenuClick = (e) => {
    if (e.key !== '1') {
      setWorkspaceDropdownOpen(false);
    }
    };
    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setWorkspaceDropdownOpen(nextOpen);
        }
    };
    const items = [{
        key:'1',
        label:<div className="px-4 py-3">
            <input className="outline-none rounded border border-slate-500 focus:!border-sky-400 relative" type="text" placeholder="Search for a workspace" />
            <i className="fa fa-search absolute top-5 right-7"></i>
        </div>
    },
    {
        key:'2',
        label:<div className="select-item mx-4 px-3 py-2 my-1 rounded" style={{fontSize:15}}>
                <i className="fa fa-star text-md text-amber-400 me-2"></i> Favorites
        </div>
    },
    {
        key:'3',
        label:<div className="border-b px-4 mb-1 break-line-bottom" style={{fontSize:15}}>
            <div>
                <div className="my-1">My workspaces</div>
                <div className="">
                    <div className="select-item px-2 py-2 my-2 rounded item-active">Main workspaces</div>
                </div>
            </div>
        </div>
    },
    {
        key:'4',
        label:<div className="flex justify-between px-2 py-2">
                <div className="px-2 select-item py-1 rounded"><i className="font-light fa fa-plus text-xs me-2"></i>Add workspace</div>
                <div className="px-2 select-item py-1 rounded"><i className="text-xs fa fa-cubes me-2"></i>Browse all</div>
        </div>  
    }
]
    
  return <div className="dashboard w-full max-h-full h-full flex overflow-y-auto relative">
            <div className={`dashboard-navigate ${navigateOpen?'w-2/12':'w-fit'} h-full me-3 rounded-e-lg z-10 ${navigateIsHover?'absolute shadow-2xl':'relative'}`} onMouseOver={()=>{!navigateOpen&&setNavigateIsHover(true)}} onMouseLeave={()=>{!navigateOpen&&setNavigateIsHover(false)}}>
                {navigateOpen||navigateIsHover?<div className={`dashboard-navigate-content`}>
                    <div className={`break-line-bottom ps-3 pe-12 pb-4 pt-3`}>
                        <div className="navigate-item active flex items-center" onClick={()=>history.push('/')}>
                            <i className="fa fa-home me-3"></i> Home
                        </div>
                        <div className="navigate-item flex items-center whitespace-nowrap">
                            <i className="fa fa-calendar-check me-3"></i> My work
                        </div>
                    </div>
                    <div className="ps-3 pe-3">
                        <div className="flex items-center justify-between">
                            <Dropdown overlayClassName="workspace-dropdown" trigger={['click']} autoFocus={'true'} menu={{items,onClick:handleMenuClick}} onOpenChange={handleOpenChange}
                            open={workspaceDropdownOpen} placement="bottomRight" >
                                <button className={`workspace-button font-medium flex justify-between items-center w-10/12 my-3 ms-1 px-2 py-1 rounded ${workspaceDropdownOpen?'active':''}`} onClick={(e)=>e.preventDefault()}><span>Main workspace</span> {workspaceDropdownOpen?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}</button>
                            </Dropdown>
                            <div className="w-2/12 text-center select-item py-1 rounded cursor-pointer ms-3 !px-1">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                                <div className="workspace-search-bar flex items-center relative">
                                    <input className="ms-2 rounded outline-none bg-transparent focus:border-sky-600 border border-slate-500 ps-8 pe-10 py-1 w-full" type="text" placeholder="Search"/>
                                    <FilterDropdown filterList={filterList} setFilterList={setFilterList}/>
                                    <div className="absolute left-4"><i className="fab fa-sistrix"></i></div>
                                </div>
                                <AddWorkSpaceDropdown/>
                        </div>
                        {/* quản lý hiển thị panel kết quả tìm kiếm */}
                        {filterList.length!==0?
                        <div>
                            <div className="px-5 mt-10">
                                <img src="/images/svg_images/search_empty_state.svg" alt="" />
                            </div>
                            <div className="text-center"  style={{fontSize:14,maxWidth:300}}>
                                <div className="text-lg font-medium">No results found</div>
                                <div className="mt-1">Please check your search terms of filters.</div>
                                <div className="mt-4">To search across your account use Quick Search <span className="text-function-describer">Ctrl</span> + <span className="text-function-describer">B</span></div>
                            </div>
                            <div className="text-center mt-5">
                                <button className="button-main"><i className="fa fa-bolt me-2"></i>Quick Search</button>
                            </div>
                        </div>:
                        //panel khi không có giá trị filter
                        <div className="pt-12 text-center">
                            <div className="text-sm" style={{maxWidth:300}}>
                                This workspace is empty.<br/> Get started by adding boards, docs, forms or dashboards.
                            </div>
                            <div className="pt-5">
                                <button className="button-main w-8/12" style={{fontSize:14}} onClick={()=>{setTemplateCenterModalOpen(true);history.push('/template_center/category')}}>Add from templates</button>
                            </div>
                            <div className="py-3">
                                <button className="button-none-bg w-8/12" style={{fontSize:14}}>Start from scratch</button>
                            </div>
                        </div>}
                    </div>
                </div>:''}
                <Tooltip title={<>Close navigation <span className="text-function-describer">Ctrl</span><span className="text-function-describer ms-2">.</span></>} placement="right">
                    <div className="toggle-button absolute top-0 right-0 rounded-tr-lg rounded-bl-lg cursor-pointer select-item" onClick={()=>{setNavigateOpen(!navigateOpen);setNavigateIsHover(false)}}>
                                {navigateOpen?<i className="fa fa-angle-left px-3 py-3"></i>:<i className="fa fa-angle-right px-3 py-3"></i>}
                    </div>
                </Tooltip>
            </div>
            <div className={`dashboard-content ${navigateOpen?'w-10/12':'w-full'} h-full rounded-s-lg`}>
                <Outlet/>
            </div>
            {/* template center modal */}
            <Modal  wrapClassName="template_center_modal"
                    footer={null}
                    centered
                    open={templateCenterModalOpen}
                    onOk={() => setTemplateCenterModalOpen(false)}
                    onCancel={() => {setTemplateCenterModalOpen(false);history.push('/')}}
                    confirmLoading={true}>
                        <TemplateCenterModal handleOkChange={setTemplateCenterModalOpen}/>

            </Modal>
        </div>;
};

export default DashboardPage;
