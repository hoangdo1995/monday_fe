import React from "react";
import MaintemplateIcon from "../IntegrateIcons/MaintemplateIcon";
import { DownloadOutlined } from "@ant-design/icons";
import IntegrateIcon from "../IntegrateIcons/IntegrateIcon";

const TemplateCardComponent = (props) => {
  const {templateInformation,onClickHandle} = props;
  const {listIntegrate,name,desc,panelImage,downloadCount,author,shortDesc} = templateInformation;
  return (
    <div className="template-card-item max-w-80 h-fit backdrop-brightness-150 rounded-xl border border-gray-600 hover:border-transparent cursor-pointer box-shadow-item-main-hover" onClick={()=>onClickHandle()}>
        <div className="px-4 py-4">
        <div className="relative">
            <img className="rounded-sm" src={panelImage} alt="" />
            <div className="absolute left-3 -bottom-5">
                <MaintemplateIcon/>
            </div>
        </div>
        <div className="px-1">
            <div className="text-xl font-medium mt-8 ">{name}</div>
            <div className="text-xs mb-2">by {author}</div>
            <div className="text-sm font-light min-h-10 line-clamp-2">{shortDesc?shortDesc:desc}</div>
        </div>
        <div className="flex justify-between items-center mt-3">
            <div className="flex items-center ps-3">
            <DownloadOutlined />
            <div className="ms-1 font-light text-sm">{downloadCount}</div>
            </div>
            <div className="w-full flex justify-end items-center">
                {listIntegrate?listIntegrate.map((integrate,index)=>{
                    if(index<3) return <IntegrateIcon name={integrate}/>
                    if(index===3) return <div className="ms-1 text-sm">+{listIntegrate.length-3}</div>
                    else return;
                }):''}
            </div>
        </div>
        </div>
    </div>
  );
};

export default TemplateCardComponent;
