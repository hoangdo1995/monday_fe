import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../..";
import { AppstoreAddOutlined, DownOutlined, ExclamationOutlined, HomeOutlined, PlusOutlined, StarOutlined, UpOutlined, UserAddOutlined } from "@ant-design/icons";
import threeDots from '../../images/svg_images/threeDots.svg';
import { templateObject } from "../../utils/templateValueObject";
import IntegrateIcon from "../../components/IntegrateIcons/IntegrateIcon";
import { Outlet } from "react-router-dom";

const DashboardManagementPage = () => {
  const dispatch = useDispatch();
  const {status,data} = useSelector((state)=>state.projectManagementReducer.currentProject);
  // demo data
  let name = null;
  let listIntegrate = [];
  if(data) { 
    name = data.name;
    listIntegrate = templateObject.find(item=>item.name===name).listIntegrate;
  }
  
  //quản lý ẩn hiện phần header information
  const [showHeader,setShowHeader] = useState(true);
  useEffect(()=>{
      if(status==='complete'){
        history.push(`/board/${data.id}`)
      }
  },[status])
  return (
  <div className="h-full">
      <div className="h-full">
        <div className="h-full flex flex-col px-8 py-5">
            {/* header management */}
            <div className={`${showHeader?'flex':'hidden'} justify-between mb-2`}>
              <div className="">
                <div className="flex items-center">
                  <button className="capitalize text-3xl font-medium">project plan</button>
                  <button className="button-light ms-2"><ExclamationOutlined className="border rounded-full text-lg" /></button>
                  <button className="button-light mx-1"><StarOutlined  className="text-lg"/></button>
                  <button className="button-light"><AppstoreAddOutlined className="text-lg"/></button>
                </div>
                <div className="flex">
                  <div className="text-sm mt-1">Manage any type of project. Assign owners, set timelines and keep track of where your project...</div>
                  <button className="text-sm hover:underline text-blue-400 ms-2">See more</button>
                </div>
              </div>
              <div>
                <div className="flex text-sm">
                  <button className="flex items-center button-light">
                    <span>Activity</span>
                    <span className="p-1 bg-green-500 rounded-full text-xs font-semibold ms-2">ĐH</span>
                  </button>
                  <button className="border ms-2 flex items-center button-light">
                    <div><UserAddOutlined className="me-2"/></div>
                    <div>Invite/1</div>
                  </button>
                  <button className="flex  items-center ms-2 button-light">
                    <div className="text-2xl table-cell align-middle">
                      <img src={threeDots} alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* navigation */}
            <div className="w-full break-line-bottom">
              <div className="flex justify-between">
                <div className="flex items-center">
                 {!showHeader?<div className="text-2xl !font-medium me-3">Project plan</div>:''}
                 <div className="button-light"><span><HomeOutlined className="me-3" /></span>Main table</div>
                 <div className="break-border bg-slate-600 h-4" style={{width:.5}}></div>
                 <div className="button-light">Gantt</div>
                 <div className="break-border bg-slate-600 h-4" style={{width:.5}}></div>
                 <div className="button-light">Calendar</div>
                 <div className="break-border bg-slate-600 h-4" style={{width:.5}}></div>
                 <div className="button-light"><PlusOutlined /></div>
                </div>
                <div className="flex items-center gap-2">
                  {!showHeader?
                  <>
                    <button className="border text-sm ms-2 flex items-center button-light">
                      <div><UserAddOutlined className="me-2"/></div>
                      <div>Invite/1</div>
                    </button>
                    <button className="flex  items-center ms-2 button-light">
                      <div className="text-2xl table-cell align-middle">
                        <img src={threeDots} alt="" />
                      </div>
                    </button>
                  </>:
                  <>
                    <button className="flex items-center text-sm button-light !py-0">
                      <i className="fa fa-share-alt me-2"></i>
                      <span className="me-2">Integrate</span>
                      {listIntegrate.map((item,index)=>{
                        if(index<3) return <IntegrateIcon classOverlay={'brightness-50 !mx-0'} name={item} size={'small'}/>
                        if(index >3) return ''
                      })}
                    </button>
                    <button className="button-light text-sm h-full"><i className="fa fa-robot me-2"></i> Automate</button>
                    
                  </>}
                  <div className="border button-light !rounded-full text-center cursor-pointer !p-0" style={{width:25,height:25}} onClick={()=>setShowHeader(!showHeader)}>{showHeader?<UpOutlined className="p-1 font-light"/>:<DownOutlined className="p-1 font-light"/>}</div>
                </div>
              </div>
              
            </div>
            {/* content page */}
            <div className="h-full flex-grow">
              <Outlet/>
            </div>
        </div>
      </div>
  </div>
  );
};

export default DashboardManagementPage;
