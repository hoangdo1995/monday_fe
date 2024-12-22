import { Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CookieService from "../../utils/cookieService";
import { history } from "../..";

const MenuComponent = () => {
    const [themeState,setThemeState] = useState('system');
    const themeValueIconList = {
        'light':'sun',
        'dark':'moon',
        'night':'star',
        'system':'cogs'
    }
    const changeThemeState = (event,theme)=>{
        //hảm xử lý thay đổi theme cho web
        setThemeState(theme);
        //đặt background thị cho theme option được chọn
        const listThemeOption = document.querySelectorAll('.theme-item');
        listThemeOption.forEach(element => {
            element.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        // thêm class cho thẻ body để thay đổi giao diện web qua scss variable
    }
    const items = [{
        label:<span  className="theme-item" onClick={(event)=>changeThemeState(event,'light')}><i class="fa fa-sun"></i>Light</span>,
        key:'light'
    },
    {
        label:<span className="theme-item" onClick={(event)=>changeThemeState(event,'dark')}><i class="fa fa-moon"></i>Dark</span>,
        key:'dark'
    },
    {
        label:<span className="theme-item" onClick={(event)=>changeThemeState(event,'night')}><i class="fa fa-star"></i>Night</span>,
        key:'night'
    },
    {
        label:<span className="theme-item active" onClick={(event)=>changeThemeState(event,'system')}><i class="fa fa-cogs"></i>System default</span>,
        key:'system'
    }
]
  return <div className="menu-popup">
            <div className="popup-header flex justify-start">
                <img className="object-contain" src="/images/icons/monday-logo.png" alt="" width={20}/>
                <span className="font-medium text-sm ms-2">Hoang Do</span>
            </div>
            <div className="popup-body flex">
                <div className="flex flex-col">
                    <span>Account</span>
                    <Link to={''}><i class="fa fa-user"></i>My profile</Link>
                    <Link to={''}><i class="fa fa-file-import"></i>Import data</Link>
                    <Link to={''}><i class="fa fa-robot"></i>Automations</Link>
                    <Link to={''}><i class="fa fa-code"></i>Developers</Link>
                    <Link to={''}><i class="fab fa-grav"></i>Spaces</Link>
                    <Link to={''}><i class="fa fa-trash-alt"></i>Trash</Link>
                    <Link to={''}><i class="fa fa-file-archive"></i>Archive</Link>
                    <Link to={''}><i class="fa fa-cog"></i>Administration</Link>
                    <Link to={''}><i class="fa fa-users"></i>Teams</Link>
                    <Link to={'/log-in'}
                        onClick={()=>{
                            // delete login info
                            CookieService.deleteCookie('access_token')
                            // redirect to login page
                            history.push('/log-in')
                        }}
                    >
                        <i class="fa fa-sign-out-alt"></i>
                        Log out
                    </Link>
                    <Link to={''}><i class="fa fa-exchange-alt"></i>Switch accounts</Link>
                </div>
                <div className="flex flex-col">
                    <span>Explore</span>
                    <Link to={''}><i class="fa fa-store"></i>App marketplace</Link>
                    <Link to={''}><i class="fa fa-mobile-alt"></i>Mobile app</Link>
                    <Link to={''}><i class="fa fa-vial"></i>monday.labs</Link>
                    <Link to={''} className="shortcut"><i class="fa fa-gift"></i>Shortcuts</Link>
                    <Link to={''}><i class="fa fa-plus"></i>Invite members</Link>
                    <Link to={''}><i class="fa fa-question"></i>Get help</Link>
                    <Dropdown overlayClassName="theme-dropdown" className="text-left ps-3" menu={{ items }} placement="bottomRight" trigger={['hover']}>
                        <button><i class={`fa fa-${themeValueIconList[themeState]} text-center`} style={{minWidth:20,marginRight:4}}></i>Change theme</button>
                    </Dropdown>
                </div>
            </div>
            <div className="popup-footer border-t mt-2">
                <div className="popup-footer-title">Working status</div>
                <div className="flex justify-between">
                    <div><i className="fa fa-bell me-2"></i> Do not disturb</div>
                    <div className="flex justify-between">
                        <label htmlFor="" className="me-4">
                            <input className="me-1" type="radio" />
                            On
                        </label>
                        <label htmlFor="">
                            <input className="me-1" type="radio" />
                            Off
                        </label>
                    </div>
                    <div>More <i className="fa fa-angle-right"></i></div>
                </div>
            </div>
        </div>;
};

export default MenuComponent;
