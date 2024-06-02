import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputText from "../InputText";
import { setActiveBySelector } from "../../utils/util";
import TemplateCardComponent from "./TemplateCardComponent";
import { templateObject } from "../../utils/templateValueObject";
import IntegrateIcon from "../IntegrateIcons/IntegrateIcon";
import { ArrowLeftOutlined, DownOutlined, DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import ReviewGellary from "../../utils/ComponentUtils/ReviewGellary";
import { Dropdown } from "antd";
import { postCurrentProjectManagement, setCurrentProject } from "../../redux/reducer/ProjectManagementReducer";
import { history } from "../..";

const TemplateCenterModal = (props) => {
  const {handleOkChange} = props;
  const dispatch = useDispatch();
  const [showDetail,setShowDetail] = useState(false);
  const templateCurrent = useSelector((state)=>state.templateModalReducer.templateCurrentSelect);
  // dropdown for button choose template
  const [templateChooseDropdown,setTemplateChooseDropdown] = useState(false);
  const handleOpenChange = (nextOpen, info) =>{
    if (info.source === 'trigger' || nextOpen) {
      setTemplateChooseDropdown(nextOpen);
  }
  }
  const items = [
    {
      key: '1',
      label: (
        <div className="dropdown-content w-full mx-0">
            <div>Use template in</div>
            <div className="my-3 relative">
                <input className="w-full " placeholder="Search workspace"/>
                <button className="absolute right-2 bottom-1 hover:backdrop-brightness-150 px-1 rounded-md"><SearchOutlined /></button>
            </div>
            <div className="break-line-bottom pb-5">
              <div className="mb-2">Work management</div>
              <div className="ps-2">
                <div className="workspace-item  active" onClick={(event)=>setActiveBySelector('.workspace-item',event)}>
                  <div className="flex">
                    <div className="rounded-md px-1 bg-green-500 me-1 w-5 text-center">M</div>
                    <div>Main workspace</div>
                  </div>
                  <div>(this workspace)</div>
                </div>
                <div className="workspace-item" onClick={(event)=>setActiveBySelector('.workspace-item',event)}>
                  <div className="flex">
                    <div className="rounded-md px-1 bg-blue-500 me-1  w-5 text-center">N</div>
                    <div>New workspace</div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="text-center pt-3">
              <button className="py-3 button-none-bg w-full">+ New workspace</button>
            </div>
        </div>
      ),
    },
  ];
  // hàm set reducer cho template được chọn hiện tại
  const setCurrentProjectHandle = (currentProject)=>{
      const action = postCurrentProjectManagement(currentProject);
      dispatch(action);
      
      
      // xử lý hoạt cảnh waiting load template
      // 
      // lấy dử liệu về từ redux
      // chuyển về trang quản lý project
      history.push(`/board`);
      // xử lý close modal
      handleOkChange(false);
  }


  const handleMenuClick = (event)=>{
    if(event.key !== '1'){
      setTemplateChooseDropdown(false);
    }
  }
  useEffect(()=>{
      const listTemplateLink  = document.querySelectorAll('.template_link_item');
      listTemplateLink.forEach(element=>{
          element.addEventListener("click",event=>setActiveBySelector('.template_link_item',event))
      });

  },[])
  
  return <div className="rounded-tl-2xl h-full">
              {/* header search */}
            <div className="template-header flex justify-between rounded-tl-xl border-b-1 px-5 py-2">
              <div className="">
                  <div><span className="text-2xl font-bold me-1">Template</span><span className="text-2xl font-light">center</span></div>
              </div>
              <div>
                <InputText classOverlay={'input-search-template'} customStyle={{backgroundColor:'transparent',minWidth:'400px',padding:'5px 10px'}} placeholder={'Search by template name, creator or description'} onChangeHandler={()=>{}}/>
              </div>
              <div className="me-8 text-md">
                <Link className='flex items-center' to={''}><span class="material-symbols-outlined me-1">
              feedback
              </span>feedback</Link>
              </div>
              {/* body */}
            </div>
             {/* content */}
            <div className="template-body-content flex w-full h-full">
              {/* list link template */}
              <div className="template-center-link-container w-96 h-full px-5 custom-scrollbar">
                  <div className= "h-screen w-full">
                    <div className="template_group_container">
                      <Link className="text-base template_link_item flex items-center active" to={'all_template'}>
                        <img className="inline-block me-2" style={{width:20}} src={'/images/Integrate_icons/star-circle.svg'} alt=""/>work management
                      </Link>
                    </div>
                    <div className="template_group_container">
                      <Link className="template_link_item" to={''}>All templates</Link>
                      <Link className="template_link_item" to={''}>Recommended for you</Link>
                      <Link className="template_link_item" to={''}>Templates created in your account</Link>
                    </div>
                    <div className="template_group_container">
                      <h5 style={{fontSize:16,opacity:.6,fontWeight:500}}>General templates</h5>
                      <div className="ps-6">
                          <Link className="template_link_item" to={''}>Start from scratch</Link>
                          <Link className="template_link_item" to={''}>Marketing</Link>
                          <Link className="template_link_item" to={''}>Content production</Link>
                          <Link className="template_link_item" to={''}>Project management</Link>
                          <Link className="template_link_item" to={''}>Docs</Link>
                          <Link className="template_link_item" to={''}>Sales & CRM</Link>
                          <Link className="template_link_item" to={''}>Freelancers</Link>
                          <Link className="template_link_item" to={''}>Design</Link>
                          <Link className="template_link_item" to={''}>Software Development</Link>
                          <Link className="template_link_item" to={''}>HR</Link>
                          <Link className="template_link_item" to={''}>Manufacturing</Link>
                          <Link className="template_link_item" to={''}>Operations</Link>
                          <Link className="template_link_item" to={''}>Startup</Link>
                          <Link className="template_link_item" to={''}>Education</Link>
                          <Link className="template_link_item" to={''}>Real Estate</Link>
                          <Link className="template_link_item" to={''}>Venture Capital</Link>
                          <Link className="template_link_item" to={''}>Construction</Link>
                          <Link className="template_link_item" to={''}>Nonprofits</Link>
                          <Link className="template_link_item" to={''}>From our experts</Link>
                      </div>
                    </div>
                    <div className="template_group_container">
                        <h5 className="mb-28 text-base font-semibold opacity-60">Product in your account</h5>
                    </div>
                  </div>
              </div>
              {/* body content template */}
              <div className="w-full h-screen text-base">
                  {!showDetail?
                  <div className="px-8 py-8 h-full overflow-scroll custom-scrollbar">
                    <div className="font-medium">
                    work management | <span className="font-light">Product templates</span>
                    </div>
                    <div className="flex py-5 gap-10 flex-wrap mb-40">
                      {/* card item templates */}
                      {/* demo bằng dử liệu thô tự nhập bằng tay trước sau này sẽ chuyển về cơ sở dử liệu lưu trữ */}
                      {templateObject.map((template)=><TemplateCardComponent onClickHandle={()=>{setShowDetail(true)}} templateInformation={template} />)}
                    </div>
                  </div>:
                  // show template detail page
                  <div className="px-8 py-8 h-full overflow-scroll custom-scrollbar">
                      <div>
                        <button className="button-none-bg text-sm" onClick={()=>setShowDetail(false)}><ArrowLeftOutlined className="me-2" />Back</button>
                      </div>
                      <div className="flex justify-between">
                          <div className="pe-16">
                              <div className="flex items-center mt-10 mb-5">
                                <h4 className="pe-3 text-2xl leading-6 height border-e">{templateCurrent.name}</h4>
                                <div>
                                  <span className="ps-3"><DownloadOutlined className="me-1" />{templateCurrent.downloadCount}</span>
                                  <span className="text-xs ms-1 font-light">users</span>
                                </div>
                              </div>
                              <div>
                                {templateCurrent.desc}
                              </div>
                              <div className="flex items-center mt-4">
                                <div className="me-4 text-lg">integrates with</div>
                                <div className="opacity-45">
                                  {templateCurrent.listIntegrate.map(item=><IntegrateIcon name={item} size={'large'}/>)}
                                </div>
                              </div>
                              
                          </div>
                          <div className="me-20">
                              <div>
                                <div className="flex">
                                  <div className="px-4 py-2 text-base bg-blue-700 hover:bg-blue-800 cursor-pointer rounded-l-md min-w-36" key="ok" type="primary"  onClick={()=>{setCurrentProjectHandle({type:templateCurrent.name.replaceAll(' ','_')})}}>Use template</div>
                                  <Dropdown menu={{items,onClick:handleMenuClick}} placement="bottomRight" trigger={'click'} overlayClassName="main-dropdown" open={templateChooseDropdown} onOpenChange={handleOpenChange} autoFocus={true}>
                                    <div className="px-3 py-2 bg-blue-700 hover:bg-blue-800 cursor-pointer rounded-r-md" style={{marginLeft:1}}><DownOutlined /></div>
                                  </Dropdown>
                                </div>
                                <div></div>
                              </div>
                          </div>
                      </div>
                      <div className="mt-10">
                        <ReviewGellary listImages={templateCurrent.images} defaultImage={templateCurrent.panelImage}/>
                      </div>
                  </div>}
              </div>
            </div>
            
        </div>;
};

export default TemplateCenterModal;
