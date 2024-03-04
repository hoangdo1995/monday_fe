import React from "react";

const DashboardHome = () => {
  return <div className="dashboard-home">
            <div className="dashboard-home-header break-line-bottom px-10 py-4 flex justify-between">
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
        </div>;
};

export default DashboardHome;
