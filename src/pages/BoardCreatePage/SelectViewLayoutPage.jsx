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
  return <div className="">
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
      <DirectionButtonDefault linkRouter={'enter-task-name'} title={<div className='flex items-center'><span className='font-light tracking-wide'>Next</span><i className="fa fa-chevron-right text-xs ms-1"></i></div>} active={objectManager?true:false}/>
  </div>
</div>;
};

export default SelectViewLayoutPage;
