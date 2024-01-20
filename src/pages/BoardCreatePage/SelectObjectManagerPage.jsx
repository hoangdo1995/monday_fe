import React,{useEffect, useState} from "react";
import LogoComponent from "../../components/LogoComponent";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { useDispatch, useSelector } from "react-redux";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import ColumnItemSelect from "../../components/ColumnItemSelect";
import { columnDesc } from "../../utils/defaultValue";
import { columnTitleList } from "../../utils/defaultValue";
import RenderColumnCreateBoard from "../../components/RenderColumnCreateBoard";
import RadioInput from "../../components/RadioInput";
import { setNewBoardObjectManager } from "../../redux/reducer/newBoardReducer";
import InputText from "../../components/InputText";

const SelectObjectManagerPage = () => {
    const dispatch = useDispatch();
    const {name,objectManager} = useSelector((state)=>state.newBoardReducer);
    const listColumn = useSelector((state)=>state.newBoardReducer.listColumn);
    const objectSelectHandler = (value)=>{
        const action = setNewBoardObjectManager(value);
        dispatch(action);
    }
    useEffect(()=>{
        const defaultRadio = document.querySelector(`input[name='objectManager'][value=${objectManager}]`);
        if(defaultRadio)defaultRadio.checked = true;
    },[])
  return <div className="flex h-screen">
  <div className="content-container w-full sm:w-6/12 flex justify-center items-center">
      <div className="content max-w-md p-3">
          <div className="header">
              <LogoComponent/>
          </div>
          <div className="body">
              <h3 className="text-2xl font-medium mt-20 mb-8 text-gray-700">Select one of the items you'd like to manager</h3>
              <div className="flex justify-between items-center">
                {/* //content */}
                <RadioInput value='project' customStyle={{border:'none'}} name='objectManager' setValue={objectSelectHandler}/>
                <RadioInput value='task' customStyle={{border:'none'}} name='objectManager' setValue={objectSelectHandler}/>
                <RadioInput title={<InputText placeholder="Custom" onClickHandler={()=>{
                    const customRadio = document.querySelector(`input[name='objectManager'][value='custom']`);
                    customRadio.checked = true;
                }} onChangeHandler={(event)=>objectSelectHandler(event.currentTarget.value)} customStyle={{width:100,padding:'3px 10px',transform:'translateY(-4.5px)'}}/>} customStyle={{border:'none'}} name='objectManager' value='custom'/>
              </div>
              <div className="text-gray-600 font-normal mb-8 mt-5 p-3 rounded-lg bg-slate-100" style={{fontSize:14}}>
                <div className="owner-desc">
                    "Item's are rows in your board which hold all the relevant information to your tasks, projects, campaigns and more."
                </div>
              </div>
              <div className="flex justify-between">
                  <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={'select-column'}/>
                  <DirectionButtonDefault linkRouter={'select-object'} title={<div className='flex items-center'><span className='font-light tracking-wide'>Next</span><i className="fa fa-chevron-right text-xs ms-1"></i></div>} active={objectManager?true:false}/>
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
                  <div className="skeleton-line rounded mb-5" style={{width:'23%',height:5,backgroundColor:'#6799f5'}}>
                  </div>
              </div>
              <div></div>
              <div className="table rounded-tl-lg w-full rounded-bl-lg">
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
              </div>
          </div>
      </div>
  </div>

</div>;
};

export default SelectObjectManagerPage;
