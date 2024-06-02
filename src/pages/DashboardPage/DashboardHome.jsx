import { Collapse, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import CompleteProfileStep from "../../components/DashboardComponent/CompleteProfileStep";
import TemplateCenterModal from "../../components/DashboardComponent/TemplateCenterModal";
import { history } from "../..";

const DashboardHome = () => {

//Modal controller
const [templateCenterModalOpen,setTemplateCenterModalOpen] = useState(false);


const items  = [
                    {
                    key: '1',
                    label: 'My private tasks',
                    children: <div>
                                <div className="dashboard-content-item ">
                                    <div className="flex justify-center">
                                        <div className="text-center py-7">
                                            <div className="flex justify-center">
                                                <img src="./images/svg_images/create-new-task.svg" alt="" />
                                            </div>
                                            <div className="my-5">Track personal tasks and reminders here</div>
                                            <button className="button-main text-white"><i className="me-2 fa fa-plus"></i>New task</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3 mb-2">
                                    <button className="button-none-bg show-all-task-button">Show all</button>
                                </div>
                            </div>,
                    },
                    {
                    key: '2',
                    label: 'Recently visited',
                    children: <div className="dashboard-content-item">
                            <div className="py-4 px-5 flex justify-between">
                                <div className="flex flex-col justify-center ps-4">
                                    <div className="">You have 0 boards in your workspace</div>
                                    <div className="text-2xl font-bold">Get started with a new board</div>
                                    <button className="button-none-bg max-w-fit my-3 !py-2" onClick={()=>{setTemplateCenterModalOpen(true);history.push('template_center/category')}}><i className="me-2 fa fa-plus"></i>Add a board</button>
                                </div>
                                <div>
                                    <img src="./images/svg_images/recent-board-svg.svg" alt="" />
                                </div>
                            </div>
                    </div>,
                    },
                    {
                    key: '3',
                    label: <div className="flex items-center">Update feed (Inbox)<span className="bg-blue-500 text-center text-sm rounded-full inline-block ms-2" style={{width:20,height:20,lineHeight:1.5}}>1</span></div>,
                    children: <div className="dashboard-content-item py-5 px-4">
                                <div>
                                    <div className="inbox-feed-item break-line-bottom cursor-pointer">
                                        <div className="inbox-feed-item-content flex justify-between items-center py-3 px-7 rounded-lg">
                                            <div className="flex">
                                                <div className="me-2">
                                                    <img className="object-cover rounded-full" src="/images/avatar_demo.jpg" alt="" style={{width:50,height:50}} />
                                                </div>
                                                <div>
                                                    <div>Roy Man</div>
                                                    <div>Hi <span className="text-sky-600 cursor-pointer">@Đỗ Hoàng</span></div>
                                                </div>
                                            </div>
                                            <div className="opacity-85">
                                                <i className="fa fa-clock"></i> 5d
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inbox-feed-item mt-3">
                                        <div className="invite-team-content break flex justify-between px-7 py-4 items-center rounded-lg">
                                            <div className="flex items-center">
                                                <div className="flex">
                                                    <div className="avatar-circle bg-green-500">ĐH</div>
                                                    <div className="avatar-circle bg-black relative -left-2">
                                                        <img src="/images/icons/person_2.svg" alt="" />
                                                    </div>
                                                    <div className="avatar-circle bg-blue-800 relative -left-4"><i className="fa fa-plus"></i></div>
                                                </div>
                                                <div>invite your teammates and start collaborating</div>
                                            </div>
                                            <div>
                                                <button className="button-none-bg me-5">No thanks</button>
                                                <button className="button-main">Invite</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>,
                    },
                    {
                    key: '4',
                    label: <>My workspaces <Tooltip placement="right" overlayStyle={{whiteSpace:'nowrap',width:'fit-content'}} title='These are the workspace in the account that your are a member of. Your have to access to all main boards in these workspace'>
                        <div className="inline-block ms-2 text-center border-gray-400 border px-1 rounded-full" style={{width:20,height:20,fontSize:13}}>i</div>
                    </Tooltip></>,
                    children: <div className="workspaces-items-container">
                            <div className="workspaces-item">
                                <div className="flex justify-start items-center">
                                    <div className="me-5 relative">
                                        <div className="bg-red-600 text-lg text-white rounded-md px-3 py-2">M</div>
                                        <i className="fa fa-home absolute -right-3 -bottom-1"></i>
                                    </div>
                                    <div>
                                        <div className="text-lg">Main workspace</div>
                                        <div className="font-light"><img className="inline-block me-2" style={{width:20}} src="/images/icons/star-circle.svg" alt=""/>work management</div>
                                    </div>
                                </div>
                            </div>
                    </div>,
                    },
        ];
        const onChange = (key) => {
            console.log(key);
          }; 
  return <div className="dashboard-home overflow-y-scroll min-h-fit h-screen">
            <div className="dashboard-home-header break-line-bottom px-10 py-3 flex justify-between">
                <div>
                    <div style={{fontSize:15}}>Good afternoon, Đỗ</div>
                    <div>Quick access your recent boards, Inbox and workspaces</div>
                </div>
                <div className="flex items-center">
                    <div className="cursor-pointer me-4 hover:text-sky-600"><i className="me-2 fa fa-comments"></i>Give feedback</div>
                    <div>
                        <button className="button-main"><i className="fa fa-bolt me-2"></i>Quick search</button>
                    </div>
                </div>
            </div>
            <div className="dashboard-home-body">
                <div className="dashboard-home-body-container flex px-10 py-5">
                    <div className="dashboard-home-content w-full h-fit min-h-screen flex-grow py-5 px-6 rounded-lg">
                        <Collapse  items={items} defaultActiveKey={['1']} bordered={false} ghost onChange={onChange} />
                    </div>
                    <div className="dashboard-home-info ms-6">
                        <div className="dashboard-home-info-item">
                            <CompleteProfileStep/>
                        </div>
                        <div className="dashboard-home-info-item"></div>
                        <div className="dashboard-home-info-item"></div>
                    </div>
                </div>
            </div>
            <Modal  wrapClassName="template_center_modal"
                    footer={null}
                    centered
                    open={templateCenterModalOpen}
                    onOk={() => setTemplateCenterModalOpen(false)}
                    onCancel={() => {setTemplateCenterModalOpen(false);history.push('/')}}
                    confirmLoading={true}>
                        <TemplateCenterModal handleOkChange={setTemplateCenterModalOpen}/>

            </Modal>
        </div>
        // Modal
        ;
};

export default DashboardHome;
