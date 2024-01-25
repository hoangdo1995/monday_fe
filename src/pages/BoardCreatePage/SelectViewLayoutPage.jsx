import React, { useEffect,useState } from "react";
import LogoComponent from "../../components/LogoComponent";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import RenderColumnCreateBoard from "../../components/RenderColumnCreateBoard";
import { useDispatch, useSelector } from "react-redux";
import {setNewBoardViewLayout} from '../../redux/reducer/newBoardReducer';
import { layoutViewList,columnTitleList,viewBgColor } from "../../utils/defaultValue";
import ItemSelect from "../../components/ItemSelect";
import BreakDownArrow from "../../components/utilComponents/BreakDownArrow";

const SelectViewLayoutPage = () => {
    const {viewLayout,objectManager,name,listColumn} = useSelector((state)=>state.newBoardReducer);
    const dispatch = useDispatch();
    //mảng chưa các giá trị ngày cho render calender layout
    const daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11];
    //handler click icon chon view layout
    const layoutSelectHandler = (event,value)=>{
        const action = setNewBoardViewLayout(value);
        dispatch(action);
    }
    
    // render timeline column table
    function renderColsTimeline(cols = 7, rowIndex = 1, anchor = 1, delayAnimation = 0, background) {
        let result = [];
        let i = 1;
        while (i <= cols) {
            const temp = <div className="border-gray-400 flex justify-center items-center relative grow-in" style={{ borderLeftWidth: 1.5, animationDuration: '.5s', animationDelay: delayAnimation }} col={i} row={rowIndex}>
                {(i === anchor) && <div className="capitalize font-medium text-xs rounded  w-full text-white flex justify-center items-center py-1 absolute text-fade-in truncate" style={{ width: '200%', left: 0, zIndex: 2, backgroundColor: background ? background : '#fdaa3c', animationDuration: '.7s', animationDelay: delayAnimation }}>
                    {objectManager} {rowIndex}
                </div>}
            </div>;
            i++;
            result.push(temp);
        }
        return result;
    }
    useEffect(()=>{
        if(!viewLayout){
            const action = setNewBoardViewLayout('table');
            dispatch(action);
        }
    },[])
  return <div className="flex h-screen">
  <div className="content-container w-full sm:w-6/12 flex justify-center items-center">
      <div className="content max-w-md p-3">
          <div className="header">
              <LogoComponent/>
          </div>
          <div className="body">
              <h3 className="text-2xl font-medium mt-20 mb-3 text-gray-700">Add a view layout</h3>
              <div className='text-slate-600 mb-10'>
                Transform the way you see and manage your work with more unique views. You can always add more later.
              </div>
              <div className="flex justify-start items-center flex-wrap ps-2">
                {/* //content */}
                <ItemSelect value='table' svgLink='/images/icons/table_icon.svg' backgroundColor='#784bd1' handlerClick={layoutSelectHandler} checked={viewLayout==='table'}/>
                <ItemSelect value='cards' svgLink='/images/icons/card_icon.svg' backgroundColor='#ff642e' handlerClick={layoutSelectHandler} checked={viewLayout==='cards'}/>
                <ItemSelect value='gantt' svgLink='/images/icons/gantt_icon.svg' backgroundColor='#027f4b' handlerClick={layoutSelectHandler} checked={viewLayout==='gantt'}/>
                <ItemSelect value='calender' svgLink='/images/icons/calender_icon.svg' backgroundColor='#faa1f1' handlerClick={layoutSelectHandler} checked={viewLayout==='calender'}/>
                <ItemSelect value='kanban' svgLink='/images/icons/kanban_icon.svg' backgroundColor='#2a76e5' handlerClick={layoutSelectHandler} checked={viewLayout==='kanban'}/>
                <ItemSelect value='timeline' svgLink='/images/icons/time_line_icon.svg' backgroundColor='#fdaa3c' handlerClick={layoutSelectHandler} checked={viewLayout==='timeline'}/>
              </div>
              <div style={{height:150}}>
                <div className="text-gray-600 font-normal mb-8 mt-5 p-3 rounded-lg bg-slate-100 border-l-4" style={{fontSize:14,borderColor:viewBgColor[viewLayout]}}>
                <div className="layout-desc">
                    {layoutViewList[`${viewLayout}`]}
                </div>
              </div>
              </div>
              <div className="flex justify-between">
                  <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={'select-object'}/>
                  <DirectionButtonDefault linkRouter={'select-view-layout'} title={<div className='flex items-center'><span className='font-light tracking-wide'>Next</span><i className="fa fa-chevron-right text-xs ms-1"></i></div>} active={objectManager?true:false}/>
              </div>
          </div>
      </div>
  </div>
  <div className="panel w-6/12 hidden sm:block bg-slate-100">
      <div className="panel-content flex justify-end items-center h-full">
          <div className="table-panel bg-white my-20 ms-20 ps-10 py-10 w-full overflow-auto">
              <div className="name h-8 mb-8 flex items-center">
                  {name?<div className="text-2xl text-gray-600 font-medium" style={{width:'100%'}}>
                      {name}
                  </div>:<div className="skeleton-line bg-slate-300 rounded" style={{width:'40%',height:7}}>
                  </div>}
              </div>
              <div className="title">
                  {viewLayout?<div className="mb-5 text-lg font-normal text-gray-600 capitalize text-center flex">
                    <div className="w-fit px-4 pb-1 border-b-2">table</div>
                    {(viewLayout!=='table')&&<div className="w-fit px-4 pb-1 border-b-2 border-sky-500">{viewLayout}</div>}
                    <div className="px-3"><i class="fa fa-plus text-sm"></i></div>
                    </div>:<div className="skeleton-line rounded mb-5" style={{width:'23%',height:5,backgroundColor:'#6799f5'}}></div>}
              </div>
              {/* table layout */}
              {(viewLayout==='table'||viewLayout===null)&&<><div className="table rounded-tl-lg w-full rounded-bl-lg">
                <div className="body flex w-full justify-start items-start">
                    <div className="column-sm max-w-full flex flex-col text-gray-500 font-medium">
                        <div className="row-sm w-full rounded-tl-lg !border-l-blue-500 !justify-center ps-5" style={{borderLeftWidth:6,width:150}}>
                            {objectManager} 
                        </div>
                        <div className="row-sm w-full !border-l-blue-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            {objectManager} 1
                        </div>
                        <div className="row-sm w-full !border-l-blue-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            {objectManager} 2
                        </div>
                        <div className="row-sm w-full !border-l-blue-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            {objectManager} 3
                        </div>
                    </div>
                    <RenderColumnCreateBoard listColumn={listColumn}/>
                    <div className="column-sm grow">
                        <div className="row-sm !w-full !justify-start ps-10" style={{minWidth:50}}>
                            <i className="fa fa-plus text-base font-extrabold text-slate-500"></i>
                        </div>
                        <div className="row-sm !w-full" style={{minWidth:50,height:114}}></div>
                    </div>
                </div>
                <div className="row w-full">
                        <div className="column rounded-bl-lg flex !justify-start px-4 !border-l-blue-300 text-gray-400" style={{width:'100%',borderLeftWidth:6}}>
                            <i className="fa fa-plus text-xs font-extrabold text-gray-400 me-2"></i> Add <span className=" ms-2 lowercase">{objectManager}</span>
                        </div>
                </div>
              </div>
              <div className="title">
                  <div className="skeleton-line bg-green-500 rounded mt-10 mb-6" style={{width:'21%',height:5}}>
                  </div>
              </div>
              <div className="table w-full rounded-tl-lg rounded-bl-lg">
                <div className="body flex w-full justify-start items-start">
                    <div className="column-sm max-w-full flex flex-col">
                        <div className="row-sm w-full rounded-tl-lg !border-l-green-500 !justify-center text-gray-500 font-medium ps-5" style={{borderLeftWidth:6,width:150}}>
                            {objectManager}
                        </div>
                    </div>
                    {listColumn.map((item,index)=><div className="column-sm w-fit">
                        <div className="row-sm text-gray-500 font-medium">
                            {columnTitleList[item]}
                        </div>
                    </div>)}
                    <div className="column-sm max-w-full grow">
                        <div className="row-sm !w-full !justify-start ps-10" style={{minWidth:50}}>
                            <i className="fa fa-plus text-base font-extrabold text-slate-500"></i>
                        </div>
                    </div>
                </div>
                <div className="row w-full">
                      <div className="column rounded-bl-lg flex !justify-start px-4 !border-l-green-300 text-gray-400" style={{width:'100%',borderLeftWidth:6}}>
                            <i className="fa fa-plus text-xs font-extrabold text-gray-400 me-2"></i> Add <span className=" ms-2 lowercase">{objectManager}</span>
                      </div>
                </div>
              </div></>}
              {/* card layout */}
              {(viewLayout==='cards')&&<div>
                <div>
                    <div className="card-layout flex mt-7 justify-start w-full">
                        <div className="card-item border w-60 p-2 text-sm font-normal text-gray-600 rounded me-10" style={{boxShadow:'8px -2px 20px -4px rgba(81,81,81,0.4)'}}>
                            <div className="bg-slate-100 rounded flex items-center justify-center" style={{minHeight:150}}>
                                <i class="fa fa-plus p-2 rounded-full text-white bg-slate-300"></i>
                            </div>
                            <div className="flex justify-between px-2 my-2">
                                <h3 className="capitalize text-gray-800 text-lg font-light">{objectManager} 1</h3>
                                <span>
                                    <img src="/images/icons/chat_add_icon.svg" alt="" />
                                </span>
                            </div>
                            <div className="px-3">
                                <div className="flex justify-between items-center my-3">
                                    <span>Owner</span>
                                    <span className="w-6/12 flex justify-center bg-gray-100 py-1">
                                        <span className="bg-slate-950 rounded-full text-white flex justify-center items-center" style={{width:25,height:25}}>A</span>
                                    </span>
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <span>Status</span>
                                    <span className="text-center text-white py-2 bg-amber-500 w-6/12">
                                        Working on it
                                    </span>
                                </div>
                                <div className="flex justify-between my-3 items-center">
                                    <span>Due date</span>
                                    <span className="flex justify-between items-center w-6/12 px-2 bg-gray-100 py-2">
                                        <span className="bg-red-600 rounded-full flex items-center justify-center text-white" style={{width:20,height:20}}>
                                            <i class="fa fa-exclamation " ></i>
                                        </span>
                                        <span className="text-xs">20 Jan</span>
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-item border w-60 p-2 text-sm font-normal text-gray-600 rounded" style={{boxShadow:'0px -2px 30px -4px rgba(81,81,81,0.6)'}}>
                            <div className="bg-slate-100 rounded flex items-center justify-center" style={{minHeight:150}}>
                                <i class="fa fa-plus p-2 rounded-full text-white bg-slate-300"></i>
                            </div>
                            <div className="flex justify-between px-2 my-2">
                                <h3 className="capitalize text-gray-800 text-lg font-light">{objectManager} 2</h3>
                                <span>
                                    <img src="/images/icons/chat_add_icon.svg" alt="" />
                                </span>
                            </div>
                            <div className="px-3">
                                <div className="flex justify-between items-center my-3">
                                    <span>Owner</span>
                                    <span className="w-6/12 flex justify-center bg-gray-100 py-1">
                                        <img src="/images/icons/person_1.svg" style={{width:25}} alt="" />
                                    </span>
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <span>Status</span>
                                    <span className="text-center text-white py-2 bg-green-500 w-6/12">
                                        Done
                                    </span>
                                </div>
                                <div className="flex justify-between my-3 items-center">
                                    <span>Due date</span>
                                    <span className="flex justify-between items-center w-6/12 px-2 bg-gray-100 py-2">
                                        <span className="bg-green-600 rounded-full flex items-center justify-center text-white" style={{width:20,height:20}}>
                                            <i class="fa fa-check"></i>
                                        </span>
                                        <span className="text-xs line-through">21 Jan</span>
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>}
              {viewLayout==='gantt'&&<div>
                    <div>
                        <div className="w-full text-center font-medium text-base text-slate-700 mb-3">January 2024</div>
                        <div className="flex relative line-vertical-through">
                            <div className="flex flex-col min-w-40">
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:40}}></div>
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:45}}>project 1</div>
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:45}}>project 2</div>
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:45}}>project 3</div>
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:45}}></div>
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:45}}></div>
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:45}}></div>
                                <div className="border-e capitalize flex items-center justify-center text-sm font-medium" style={{height:45}}></div>
                            </div>
                            <div className="flex flex-col border-t-2" style={{width:75}}>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full relative ease-in grow-in" style={{height:40}}>
                                    <div className="bg-blue-400 hover:bg-blue-300 cursor-pointer rounded text-white text-xs absolute start-0 flex items-center justify-center capitalize text-fade-in" style={{height:25,width:'200%',animationDuration:'.6s'}}>{objectManager} 1
                                            <BreakDownArrow/>
                                    </div>
                                </div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                            </div>
                            <div className="flex flex-col border-t-2" style={{width:75}}>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                            </div>
                            <div className="flex flex-col border-t-2" style={{width:75}}>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full relative grow-in" style={{height:45,animationDelay:'.5s'}}>
                                    <div className="bg-blue-400 hover:bg-blue-300 cursor-pointer rounded text-white text-xs start-0 flex items-center justify-center  absolute capitalize text-fade-in" style={{height:25,width:'200%',animationDuration:'.6s',animationDelay:'.5s'}}>Project 2
                                        <BreakDownArrow delay={'.75s'}/>
                                    </div>
                                    
                                </div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                            </div>
                            <div className="flex flex-col border-t-2" style={{width:75}}>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                            </div>
                            <div className="flex flex-col border-t-2" style={{width:75}}>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full relative grow-in" style={{height:45,animationDelay:'1s'}}>
                                    <div className="bg-blue-400 hover:bg-blue-300 cursor-pointer rounded text-white text-xs absolute start-0 flex items-center justify-center capitalize text-fade-in" style={{height:25,width:'200%',animationDuration:'.6s',animationDelay:'1s'}}>Project 3</div>
                                </div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                            </div>
                            <div className="flex flex-col border-t-2" style={{width:75}}>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                            </div>
                            <div className="flex flex-col border-t-2" style={{width:75}}>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:40}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                                <div className="border-x flex items-center justify-center w-full" style={{height:45}}></div>
                            </div>
                        </div>
                    </div>
              </div>}
              {viewLayout==='kanban'&&<div>
                    <div className="flex gap-8 overflow-auto pb-3">
                        <div className="kanban-item text-gray-500 font-medium">
                            <div className="w-52 border-s-amber-500 border-s-2">
                                <div className="text-center font-normal text-white py-2 bg-amber-500">
                                    Working on it
                                </div>
                                <div className="bg-slate-100 px-2 py-3 text-sm">
                                    <div className="bg-white px-3 py-2 rounded">
                                        <h3 className="py-2 text-gray-600 font-semibold capitalize text-base">{objectManager} 1</h3>
                                        <div className="flex justify-between items-center w-full">
                                            <span className="w-6/12">Owner</span>
                                            <div className="justify-center flex py-1 bg-slate-100 w-6/12">
                                                <div className="flex items-center justify-center  rounded-full text-white bg-yellow-400" style={{width:25,height:25}}>A</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center my-2">
                                            <div className="w-6/12">
                                                Due date
                                            </div> 
                                            <div className="w-6/12 flex justify-between px-2 whitespace-nowrap bg-slate-100 py-2">
                                                <i class="fa flex items-center justify-center text-white fa-exclamation bg-rose-500 rounded-full" style={{width:20,height:20}}></i>
                                                <span  className="truncate w-5/12">20 January</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm pt-3">
                                        + Add {objectManager}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kanban-item text-gray-500 font-medium">
                            <div className="w-52 border-s-emerald-400 border-s-2">
                                <div className="text-center font-normal text-white py-2 bg-emerald-400">
                                    Working on it
                                </div>
                                <div className="bg-slate-100 px-2 py-3 text-sm">
                                    <div className="bg-white px-3 py-2 rounded">
                                        <h3 className="py-2 text-gray-600 font-semibold capitalize text-base">{objectManager} 2</h3>
                                        <div className="flex justify-between items-center w-full">
                                            <span className="w-6/12">Owner</span>
                                            <div className="justify-center flex py-1 bg-slate-100 w-6/12">
                                                <div className="flex items-center justify-center  rounded-full text-white" style={{width:25,height:25}}>
                                                    <img src="/images/icons/Person_1.svg" alt="" style={{width:25}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center my-2">
                                            <div className="w-6/12">
                                                Due date
                                            </div> 
                                            <div className="w-6/12 flex justify-between px-2 whitespace-nowrap bg-slate-100 py-2">
                                                <i className="fa fa-check flex justify-center items-center bg-green-600 text-white rounded-full" style={{width:25,height:25}}></i>
                                                <span  className="truncate w-5/12 line-through">20 January</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm pt-3">
                                        + Add {objectManager}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kanban-item text-gray-500 font-medium">
                            <div className="w-52 border-s-rose-500 border-s-2">
                                <div className="text-center font-normal text-white py-2 bg-rose-500">
                                    Working on it
                                </div>
                                <div className="bg-slate-100 px-2 py-3 text-sm">
                                    <div className="bg-white px-3 py-2 rounded">
                                        <h3 className="py-2 text-gray-600 font-semibold capitalize text-base">{objectManager} 3</h3>
                                        <div className="flex justify-between items-center w-full">
                                            <span className="w-6/12">Owner</span>
                                            <div className="justify-center flex py-1 bg-slate-100 w-6/12">
                                                <div className="flex items-center justify-center  rounded-full text-white" style={{width:25,height:25}}>
                                                    <img src="/images/icons/Person_1.svg" alt="" style={{width:25}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center my-2">
                                            <div className="w-6/12">
                                                Due date
                                            </div> 
                                            <div className="w-6/12 flex justify-between px-2 whitespace-nowrap bg-slate-100 py-2">
                                                <i className="fa flex items-center justify-center text-white fa-exclamation bg-rose-500 rounded-full" style={{width:20,height:20}}></i>
                                                <span  className="truncate w-5/12">23 January</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm pt-3">
                                        + Add {objectManager}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>}
              {viewLayout==='calender'&&<div>
                <div>
                    <div className="font-medium text-xl text-slate-700 tracking-wide mb-5 ms-6">January 2024</div>
                    <div className="w-full">
                        <div className="grid grid-cols-7 text-gray-600">
                            <div className="flex justify-center items-start border-gray-300" style={{borderRightWidth:1.5}}>
                                Mon
                            </div>
                            <div className="flex justify-center items-start border-gray-300" style={{borderRightWidth:1.5}}>
                                Tue
                            </div>
                            <div className="flex justify-center items-start border-gray-300" style={{borderRightWidth:1.5}}>
                                Wed
                            </div>
                            <div className="flex justify-center items-start border-gray-300" style={{borderRightWidth:1.5}}>
                                Thu
                            </div>
                            <div className="flex justify-center items-start border-gray-300" style={{borderRightWidth:1.5}}>
                                Fri
                            </div>
                            <div className="flex justify-center items-start border-gray-300" style={{borderRightWidth:1.5}}>
                                Sat
                            </div>
                            <div className="flex justify-center items-start border-gray-300" style={{borderRightWidth:1.5}}>
                                Sun
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-7 grid-rows-6 border-collapse">
                            {daysArray.map((value,index)=><div className={`calender-cell-day text-end px-3 py-2 border-gray-300 ${(index>30)?'text-gray-400':'text-gray-600'}`} style={{height:60,borderTopWidth:1.5,borderRightWidth:1.5}} index={index}>{value}</div>)}
                        </div>
                    </div>
                </div>
              </div>}
              {viewLayout==='timeline'&&<div>
                <div>
                    <div className="grid grid-cols-7">
                        <div></div>
                        <div className="border-gray-400 flex justify-center font-light py-2 text-sm white" style={{borderTopWidth:1.5,borderBottomWidth:1.5,borderLeftWidth:1.5}}>21 Jan</div>
                        <div className="border-gray-400 flex justify-center font-light py-2 text-sm white" style={{borderTopWidth:1.5,borderBottomWidth:1.5,borderLeftWidth:1.5}}>22 Jan</div>
                        <div className="border-gray-400 flex justify-center font-light py-2 text-sm white" style={{borderTopWidth:1.5,borderBottomWidth:1.5,borderLeftWidth:1.5}}>23 Jan</div>
                        <div className="border-gray-400 flex justify-center font-light py-2 text-sm white" style={{borderTopWidth:1.5,borderBottomWidth:1.5,borderLeftWidth:1.5}}>24 Jan</div>
                        <div className="border-gray-400 flex justify-center font-light py-2 text-sm white" style={{borderTopWidth:1.5,borderBottomWidth:1.5,borderLeftWidth:1.5}}>25 Jan</div>
                        <div className="border-gray-400 flex justify-center font-light py-2 text-sm white" style={{borderTopWidth:1.5,borderBottomWidth:1.5,borderLeftWidth:1.5}}>26 Jan</div>
                    </div>
                    <div className="line-vertical-through relative">
                        <div className="grid grid-cols-7">
                            <div className="capitalize text-gray-700 font-medium flex items-center justify-end pe-2 py-7">{objectManager} 1</div>
                            {renderColsTimeline(6,1)}
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="capitalize text-gray-700 font-medium flex items-center justify-end pe-2 py-7">{objectManager} 2</div>
                            {renderColsTimeline(6,2,3,'.5s','#00c875')}
                        </div>
                        <div className="grid grid-cols-7">
                            <div className="capitalize text-gray-700 font-medium flex items-center justify-end pe-2 py-7">{objectManager} 3</div>
                            {renderColsTimeline(6,3,5,'1s','#e2435c')}
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 py-10 mt-2 flex justify-center items-center text-xs">
                    <div className="flex justify-center items-center me-5"><span className="inline-block rounded-full me-2" style={{backgroundColor:'#fdaa3c',padding:6}}></span>Working on it</div>
                    <div className="flex justify-center items-center me-5"><span className="inline-block rounded-full me-2" style={{backgroundColor:'#00c875',padding:6}}></span>Done</div>
                    <div className="flex justify-center items-center"><span className="inline-block rounded-full me-2" style={{backgroundColor:'#e2435c',padding:6}}></span>Stuck</div>
                </div>
              </div>}
          </div>
      </div>
  </div>

</div>;
};

export default SelectViewLayoutPage;
