import React from "react";

const RenderColumnCreateBoard = (props) => {
    const {listColumn} = props;
    const listColumnRender = {
        'owner':<div className="column-sm w-fit">
        <div className="row-sm text-gray-500 font-medium ">
            Owner
        </div>
        <div className="row-sm text-gray-500 font-medium ">
            <img src="/images/icons/person_2.svg" alt="" style={{height:'70%',boxShadow:'0px 0px 6px -3px rgba(0,0,0,1)',borderRadius:'50%'}} />
        </div>
        <div className="row-sm text-gray-500 font-medium ">
            <img src="/images/icons/person_1.svg" alt="" style={{height:'70%',boxShadow:'0px 0px 6px -3px rgba(0,0,0,1)',borderRadius:'50%'}} />
        </div>
        <div className="row-sm text-gray-500 font-medium ">
            <img src="/images/icons/person_1.svg" alt="" style={{height:'70%',boxShadow:'0px 0px 6px -3px rgba(0,0,0,1)',borderRadius:'50%'}} />
        </div>
    </div>,
        'status':<div className="column-sm w-fit">
        <div className="row-sm text-gray-500 font-medium">status</div>
        <div className="row-sm text-white bg-amber-400 !text-sm">working on it</div>
        <div className="row-sm text-white bg-emerald-400 !text-sm">done</div>
        <div className="row-sm text-white bg-rose-400 !text-sm">Stuck</div>
    </div>,
        'due_date':<div className="column-sm">
        <div className="row-sm text-gray-500 font-medium">due date</div>
        <div className="row-sm !justify-between">
            <i className="fa fa-exclamation-circle text-red-500 text-lg"></i>
            <span className="text-gray-500">12 Jan</span>
            <span></span>
        </div>
        <div className="row-sm !justify-between">
            <i className="fa fa-check-circle text-lg text-green-400"></i>
            <span className="text-gray-500 line-through">13 Jan</span>
            <span></span>
        </div>
        <div className="row-sm !justify-between">
            <i className="fa fa-exclamation-circle text-red-500 text-lg"></i>
            <span className="text-gray-500">14 Jan</span>
            <span></span>
        </div>
    </div>,
        'notes':<div className="column-sm text-gray-500">
        <div className="row-sm font-medium">notes</div>
        <div className="row-sm !text-sm text-gray-700">action items</div>
        <div className="row-sm !text-sm text-gray-700">meeting notes</div>
        <div className="row-sm !text-sm text-gray-700">other</div>
    </div>,
        'priority':<div className="column-sm text-white">
        <div className="row-sm text-gray-500 font-medium">priority</div>
        <div className="row-sm bg-blue-400">low</div>
        <div className="row-sm bg-violet-600">hight</div>
        <div className="row-sm bg-indigo-500">medium</div>
    </div>,
        'timeline':<div className="column-sm text-white">
        <div className="row-sm text-gray-500 font-medium">timeline</div>
        <div className="row-sm !text-xs">
            <div className="w-full rounded-full flex justify-between items-center  bg-rose-500 px-3 py-1">
                <i className="fa fa-exclamation" style={{width:10}}></i>
                <span className=""> 12 - 13 Jan</span>
                <span></span>
            </div>
        </div>
        <div className="row-sm !text-xs">
            <div className="w-full rounded-full flex justify-between items-center  bg-emerald-500 px-3 py-1">
                <i className="fa fa-check" style={{width:10}}></i>
                <span className=""> 12 - 13 Jan</span>
                <span></span>
            </div>
        </div>
        <div className="row-sm !text-xs">
            <div className="w-full rounded-full flex justify-between items-center  bg-slate-400 px-3 py-1">
                <i className="fa fa-check" style={{width:10}}></i>
                <span className=""> 12 - 13 Jan</span>
                <span></span>
            </div>
        </div>
    </div>,
        'budget':<div className="column-sm">
        <div className="row-sm text-gray-500 font-medium">Budget</div>
        <div className="row-sm text-gray-500 font-medium">$100</div>
        <div className="row-sm text-gray-500 font-medium">$1,000</div>
        <div className="row-sm text-gray-500 font-medium">$500</div>
    </div>,
        'last_update':<div className="column-sm text-gray-500">
        <div className="row-sm font-medium">last update</div>
        <div className="row-sm !justify-between">
            <img src="/images/icons/person_2.svg" alt="" style={{width:25, borderRadius:'50%'}}/>
            <span className="text-sm">4 days ago</span>
        </div>
        <div className="row-sm !justify-between">
            <img src="/images/icons/person_2.svg" alt="" style={{width:25, borderRadius:'50%'}}/>
            <span className="text-sm">4 days ago</span>
        </div>
        <div className="row-sm !justify-between">
            <img src="/images/icons/person_2.svg" alt="" style={{width:25, borderRadius:'50%'}}/>
            <span className="text-sm">4 days ago</span>
        </div>
    </div>,
        'files':<div className="column-sm">
        <div className="row-sm text-gray-500 font-medium">files</div>
        <div className="row-sm"></div>
        <div className="row-sm"></div>
        <div className="row-sm"></div>
    </div>
    }
  return <>
    {listColumn.map((item,index)=>{
        return listColumnRender[item]
    })}
  </>;
};

export default RenderColumnCreateBoard;
