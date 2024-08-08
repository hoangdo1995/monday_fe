import React from "react";
import LogoComponent from "../LogoComponent";
import { Badge, Dropdown, Tooltip } from "antd";
import MenuComponent from "../MenuComponent/MenuComponent";

const HeaderComponent = () => {

    //dropdown menu value
    const items = [
        {
          label: <MenuComponent/>,
          key: '0',
        }
      ];

  return <div className="header flex justify-between px-5 py-2">
      <div className="header-left flex items-center">
          <button className="me-3 hover:bg-gray-500 p-2 rounded">
              <img src="/images/icons/menu-icon.svg" alt="" />
          </button>
          <LogoComponent/>
          <button id="button-see-plan" className="flex text-sm text-green-500 hover:text-white text-font-medium border-green-500 hover:bg-green-500 rounded-md border-2 px-2 py-1 ms-3">
          <svg id="icon-see-plan" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={20}  viewBox="0 0 257 233" ><path fill="currentColor" className="cls-1" d="M193.5,282.08c-6.29-39-40.19-69.69-81.65-73.82,43.68-4.32,77.87-37.11,82.24-78.14,4.35,41,38.19,73.54,81.67,78.08C233.86,212.08,199.84,242.52,193.5,282.08Z" transform="translate(-22.5 -51)"/><path fill="currentColor" className="cls-1" d="M194.09,134c5.81,38.11,37.11,68.23,77.47,74.17-39.23,5.33-70.83,33.93-78.07,71.05-7.18-36.65-38.65-65.4-77.47-71,40.58-5.75,72.21-36.08,78.07-74.26m.08-10-.15,0c-1.51,44.39-38.09,80.38-84.39,83.93.1.21.2.42.29.63,43.12,3.44,77.74,35,83.34,75.29.15,0,.31.07.45.12,5.65-41.06,41.46-73.13,85.72-75.57,0-.13,0-.27.07-.41-46.75-3.13-83.84-39.31-85.33-84Z" transform="translate(-22.5 -51)"/><path fill="currentColor" className="cls-1" d="M74.34,161.36c-4.28-26.61-24.49-47.46-49.28-50.85,26-3.51,46.3-25.6,49.65-53.39C78,84.87,98.14,106.8,124,110.46,98.93,113.68,78.65,134.4,74.34,161.36Z" transform="translate(-22.5 -51)"/><path fill="currentColor" className="cls-1" d="M74.7,60.58c4.34,25.28,22.64,45.16,46.2,49.86-23,4.3-41.55,23.35-46.56,48.13-5-24.46-23.42-43.6-46.21-48.06,23.7-4.57,42.2-24.59,46.57-49.93m0-9.58-.09,0c-.93,31.36-23.55,56.77-52.16,59.27l.18.45c26.65,2.43,48.05,24.74,51.51,53.18l.28.08c3.49-29,25.63-51.65,53-53.37a2.89,2.89,0,0,1,0-.29C98.6,108.13,75.68,82.58,74.75,51Z" transform="translate(-22.5 -51)"/></svg>
              <span className="ms-3">See plans</span></button>
      </div>
      <div className="header-right flex items-center justify-end">
          <Tooltip placement="bottom" title={'Notification'}>
              <Badge count={0} size="small">
                  <button className="text-lg">
                      <i className="fa fa-bell "></i>
                  </button>
              </Badge>
          </Tooltip>
          <Tooltip placement="bottom" title={'Update feed'}>
              <Badge className="" count={0} size="small">
                  <button className="text-lg">
                      <i className="fa fa-inbox "></i>
                  </button>
              </Badge>
          </Tooltip>
          <Tooltip placement="bottom" title={'Invite member'}>
              <Badge className="" count={0} size="small">
                  <button className="text-lg">
                      <i className="fa fa-user-plus "></i>
                  </button>
              </Badge>
          </Tooltip>
          <Tooltip placement="bottom" title={'Monday market'}>
              <Badge className="" count={0} size="small">
                  <button>
                      {/* <img src="/images/icons/marketplace-icon.svg" style={{color:'black'}} width={25}/> */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="25" height="25" aria-hidden="true" className="icon_component icon-button-padding icon_component--no-focus-style"><path d="M5.6579 4.88C5.6579 3.28943 6.9472 2 8.53766 2C10.1281 2 11.4174 3.28943 11.4174 4.88C11.4174 4.89526 11.4173 4.91051 11.4171 4.92572H13.0502C14.1675 4.92572 15.0732 5.83153 15.0732 6.94891V8.58332C15.0889 8.58307 15.1045 8.58295 15.1202 8.58295C16.7107 8.58295 18 9.87237 18 11.4629C18 13.0535 16.7107 14.3429 15.1202 14.3429C15.1045 14.3429 15.0889 14.3428 15.0732 14.3426V15.9768C15.0732 17.0942 14.1675 18 13.0502 18H4.02304C2.90574 18 2 17.0942 2 15.9768V13.5322C2 13.3096 2.10806 13.1009 2.28982 12.9723C2.47157 12.8438 2.70441 12.8115 2.91427 12.8858C3.07072 12.9411 3.23976 12.9715 3.41737 12.9715C4.25045 12.9715 4.9258 12.2961 4.9258 11.4629C4.9258 10.6298 4.25045 9.95437 3.41737 9.95437C3.23975 9.95437 3.07072 9.98478 2.91427 10.0401C2.70441 10.1143 2.47157 10.0821 2.28982 9.95353C2.10806 9.82501 2 9.61625 2 9.39363V6.9489C2 5.83153 2.90575 4.92572 4.02304 4.92572H5.65825C5.65802 4.91051 5.6579 4.89526 5.6579 4.88ZM8.53766 3.37143C7.70458 3.37143 7.02923 4.04683 7.02923 4.88C7.02923 5.05755 7.05961 5.22652 7.11489 5.38292C7.18906 5.5928 7.15675 5.82562 7.02824 6.00736C6.89972 6.1891 6.69099 6.29715 6.46841 6.29715H4.02304C3.66311 6.29715 3.37133 6.58895 3.37133 6.9489V8.5833C3.38665 8.58306 3.402 8.58294 3.41737 8.58294C5.00783 8.58294 6.29714 9.87237 6.29714 11.4629C6.29714 13.0535 5.00783 14.3429 3.41737 14.3429C3.402 14.3429 3.38665 14.3428 3.37133 14.3426V15.9768C3.37133 16.3368 3.66311 16.6286 4.02304 16.6286H13.0502C13.4101 16.6286 13.7019 16.3368 13.7019 15.9768V13.5319C13.7019 13.3092 13.81 13.1004 13.9918 12.9719C14.1737 12.8434 14.4066 12.8112 14.6165 12.8855C14.7731 12.941 14.9424 12.9715 15.1202 12.9715C15.9533 12.9715 16.6287 12.2961 16.6287 11.4629C16.6287 10.6298 15.9533 9.95438 15.1202 9.95438C14.9424 9.95438 14.7731 9.98488 14.6165 10.0404C14.4066 10.1147 14.1737 10.0825 13.9918 9.95399C13.81 9.82548 13.7019 9.61667 13.7019 9.39399V6.94891C13.7019 6.58895 13.4101 6.29715 13.0502 6.29715H10.6069C10.3843 6.29715 10.1756 6.1891 10.0471 6.00736C9.91857 5.82562 9.88626 5.5928 9.96044 5.38292C10.0157 5.22652 10.0461 5.05755 10.0461 4.88C10.0461 4.04683 9.37074 3.37143 8.53766 3.37143Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>
                  </button>
              </Badge>
          </Tooltip>
          <div className="border-e border-x-stone-500 h-4/6 mx-2"></div>
          <Tooltip placement="bottom" title={'Search everything'}>
              <Badge className="">
                  <button className="font-lighter text-lg ">
                      <i className="fa fa-search"></i>
                  </button>
              </Badge>
          </Tooltip>
          <Tooltip placement="bottom" title={'Help'}>
              <Badge className="">
                  <button className="font-lighter text-lg ">
                      <i className="fa fa-question font-lighter text-lg"></i>
                  </button>
              </Badge>
          </Tooltip>
          
          <Dropdown overlayClassName="menu-popup-container" menu={{items}} trigger={['click']}>
              <button id="profile-button" className="flex items-center ps-2 ms-2 hover:!bg-gray-600" style={{backgroundColor:'#393e5a'}}>
                  <img src="/images/icons/monday-logo.png" width={25} alt="" className="rounded-l-lg"/>
                  <div className="text-white text-sm font-bold uppercase ms-3 bg-violet-600 rounded-full p-2">ĐH</div>
              </button>
          </Dropdown>
      </div>
  </div> ;
};

export default HeaderComponent;
