import React, { useRef, useState } from "react";
import LogoComponent from "../../components/LogoComponent";
import { setNewBoardName } from "../../redux/reducer/newBoardReducer";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { useDispatch } from "react-redux";

const CreateBoardPage1 = () => {
    const [name,setName] = useState(null);
    const currentRef = useRef(null);
    const dispatch = useDispatch();
    const inputBlurHandler = (event)=>{
        //thay đổi border cho input
        event.currentTarget.classList.remove('!border-sky-400');
        //thực hiện đưa dử liệu nhập lên reducer
        const action = setNewBoardName(event.currentTarget.value);
        console.log(action,'action');
        dispatch(action);
    }
    const handlerLeaverInput = (event)=>{
        if(currentRef.current && currentRef.current=== document.activeElement){
            currentRef.current.classList.add('!border-sky-400');
        }
    }
    
  return <div className="flex h-screen">
            <div className="content-container w-full sm:w-6/12 flex justify-center items-center">
                <div className="content max-w-md p-3">
                    <div className="header">
                        <LogoComponent/>
                    </div>
                    <div className="body">
                        <h3 className="text-2xl font-medium mt-20 mb-8 text-gray-700">Let's start working together</h3>
                        <div className="mb-3 text-gray-700 text-base">Give your board a name,e.g. marketing plan, sales pipeline, quarterly roadmap...</div>
                        <input type="text" className="border-2 rounded w-full px-3 py-1 outline-none outline-offset-0 border-gray-400 focus:border-gray-600  hover:border-sky-400" placeholder="My first board" ref={currentRef} onMouseLeave={handlerLeaverInput} onBlur={(event)=>inputBlurHandler(event)} onChange={(event)=>setName(event.currentTarget.value)}/>
                        <div className="rounded-lg px-5 py-6 mt-10 mb-20 font-normal text-base text-gray-700" style={{backgroundColor:'#f6f7fc'}}>
                            In monday.com, "boards" are the place where all your content lives.
                        </div>
                        <div className="flex justify-end">
                            <DirectionButtonDefault title={<div className='flex items-center'><span className='font-light tracking-wide'>Next</span><i className="fa fa-chevron-right text-xs ms-1"></i></div>} active={name?true:false} linkRouter={'select-column'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel w-6/12 hidden sm:block bg-slate-100">
                <div className="panel-content flex justify-end items-center h-full">
                    <div className="table-panel bg-white my-20 ms-20 ps-10 py-10 w-full">
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
                            <div className="row flex w-full">
                                <div className="column rounded-tl-lg grow px-4 " style={{justifyContent:'start',flexShrink:0,borderLeftWidth:7,borderLeftColor:'#6799f5'}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'80%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{maxWidth:50,flexShrink:0}}>
                                    <i className="fa fa-plus text-base font-extrabold text-slate-500"></i>
                                </div>
                            </div>
                            <div className="row flex w-full">
                                <div className="column grow px-4" style={{justifyContent:'start',flexShrink:0,borderLeftWidth:7,borderLeftColor:'#6799f5'}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'80%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{maxWidth:50,flexShrink:0}}>
                                </div>
                            </div>
                            <div className="row flex w-full">
                                <div className="column grow px-4" style={{justifyContent:'start',flexShrink:0,borderLeftWidth:7,borderLeftColor:'#6799f5'}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'80%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{maxWidth:50,flexShrink:0}}>
                                </div>
                            </div>
                            <div className="row flex w-full">
                                <div className="column grow px-4" style={{justifyContent:'start',flexShrink:0,borderLeftWidth:7,borderLeftColor:'#6799f5'}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'80%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{maxWidth:50,flexShrink:0}}>
                                </div>
                            </div>
                            <div className="row w-full">
                                <div className="column rounded-bl-lg flex !justify-start px-4" style={{width:'100%',borderLeftWidth:7,borderLeftColor:'#b3ccfa'}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'21%',height:5}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="title">
                            <div className="skeleton-line bg-green-500 rounded mt-10 mb-6" style={{width:'21%',height:5}}>
                            </div>
                        </div>
                        <div className="table w-full rounded-tl-lg rounded-bl-lg">
                        <div className="row flex w-full">
                             <div className="column grow px-4 rounded-tl-lg !border-l-green-500" style={{justifyContent:'start',flexShrink:0,borderLeftWidth:6}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'80%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{flexShrink:20}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'45%',height:5}}>
                                    </div>
                                </div>
                                <div className="column" style={{maxWidth:50,flexShrink:0}}>
                                    <i className="fa fa-plus text-base font-extrabold text-slate-500"></i>
                                </div>
                            </div>
                            <div className="row w-full">
                                <div className="column rounded-bl-lg flex !justify-start px-4 !border-l-green-300" style={{width:'100%',borderLeftWidth:6}}>
                                    <div className="skeleton-line bg-slate-300 rounded" style={{width:'21%',height:5}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  </div>;
};

export default CreateBoardPage1;
