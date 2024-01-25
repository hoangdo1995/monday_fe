import React,{useState} from "react";
import LogoComponent from "../../components/LogoComponent";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { useDispatch, useSelector } from "react-redux";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import ItemSelect from "../../components/ItemSelect";
import { columnDesc } from "../../utils/defaultValue";
import { columnTitleList } from "../../utils/defaultValue";
import RenderColumnCreateBoard from "../../components/RenderColumnCreateBoard";
import { setNewBoardListColumn } from "../../redux/reducer/newBoardReducer";

const SelectColumnPage = () => {
    // lấy data từ reducer
    const {name,listColumn} = useSelector((state)=>state.newBoardReducer);
    const dispatch = useDispatch();
    //itemCurrent để handler description cho item mới chọn
    const [itemCurrent, setItemCurrent] = useState('owner');
    const selectColumnListHanlder = (event,value)=>{
        //đặt lại currentItem
        setItemCurrent(value);
        //kiểm tra item có được checked
        if(!event.currentTarget.checked){
            //nêu còn chỉ một column thì trả về
            if(listColumn.length === 1){
                event.currentTarget.checked = true;
                return;
            }
            else{
                // if checked -> set unchecked
                event.currentTarget.checked = false;
                //loại column khỏi list
                const newList = listColumn.filter(item=>item!==value);
                const action = setNewBoardListColumn(newList);
                dispatch(action);
            }
        }
        else{
            
           //nếu đang chưa checked -> set checked
           event.currentTarget.checked = true;
           //thêm column vào list
           const action = setNewBoardListColumn([...listColumn,value]);
           dispatch(action);
        }
        console.log(listColumn);
    }
  return <div className="flex h-screen">
  <div className="content-container w-full sm:w-6/12 flex justify-center items-center">
      <div className="content max-w-md p-3">
          <div className="header">
              <LogoComponent/>
          </div>
          <div className="body">
              <h3 className="text-2xl font-medium mt-20 mb-8 text-gray-700">Let's select the relevant columns for your board</h3>
              <div className="mb-4 text-gray-700 text-base">Choose from the most popular column types for your work</div>
              <div className="ps-2">
                <ItemSelect value={'owner'} svgLink={'/images/icons/owner_icon.svg'} handlerClick={selectColumnListHanlder}  backgroundColor={'#65ccff'} checked={listColumn.includes('owner')}/>
                <ItemSelect value={'status'} svgLink={'/images/icons/status_icon.svg'} handlerClick={selectColumnListHanlder} backgroundColor='#34d391' checked={listColumn.includes('status')}/>
                <ItemSelect value={'due_date'} title={'due date'} svgLink={'/images/icons/due_icon.svg'} handlerClick={selectColumnListHanlder} backgroundColor='#b0dc51' checked={listColumn.includes('due_date')}/>
                <ItemSelect value={'files'} svgLink={'/images/icons/file_icon.svg'} handlerClick={selectColumnListHanlder} backgroundColor='#65ccff' checked={listColumn.includes('files')}/>
                <ItemSelect value={'priority'} svgLink={'/images/icons/priority_icon.svg'} handlerClick={selectColumnListHanlder} backgroundColor='#ffcb02'checked={listColumn.includes('priority')}/>
                <ItemSelect value={'timeline'} svgLink={'/images/icons/time_line_icon.svg'} handlerClick={selectColumnListHanlder} backgroundColor='#b57de3' checked={listColumn.includes('timeline')}/>
                <ItemSelect value={'budget'} svgLink={'/images/icons/budget_icon.svg'} handlerClick={selectColumnListHanlder} backgroundColor='#ffd532' checked={listColumn.includes('budget')}/>
                <ItemSelect value={'last_update'} svgLink={'/images/icons/update_icon.svg'} title={'last update'}  handlerClick={selectColumnListHanlder} backgroundColor='#f55f7c' checked={listColumn.includes('last_update')}/>
                <ItemSelect value={'notes'} svgLink={'/images/icons/note_icon.svg'} handlerClick={selectColumnListHanlder} backgroundColor='#7aaefd' checked={listColumn.includes('notes')}/>
              </div>
              <div className="text-gray-600 font-normal mb-8 mt-5 p-3 rounded-lg bg-slate-100" style={{fontSize:14}}>
                <div className="owner-desc">
                    {columnDesc[itemCurrent]}
                </div>
              </div>
              <div className="flex justify-between">
                  <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={'set-name'}/>
                  <DirectionButtonDefault linkRouter={'select-object'} title={<div className='flex items-center'><span className='font-light tracking-wide'>Next</span><i className="fa fa-chevron-right text-xs ms-1"></i></div>} active={name?true:false}/>
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
                    <div className="column-sm max-w-full flex flex-col">
                        <div className="row-sm w-full rounded-tl-lg !border-l-blue-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            <div className="skelaton bg-slate-300 rounded" style={{width:'65%',height:5}}></div>
                        </div>
                        <div className="row-sm w-full !border-l-blue-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            <div className="skelaton bg-slate-300 rounded" style={{width:'65%',height:5}}></div>
                        </div>
                        <div className="row-sm w-full !border-l-blue-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            <div className="skelaton bg-slate-300 rounded" style={{width:'65%',height:5}}></div>
                        </div>
                        <div className="row-sm w-full !border-l-blue-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            <div className="skelaton bg-slate-300 rounded" style={{width:'65%',height:5}}></div>
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
                        <div className="column rounded-bl-lg flex !justify-start px-4 !border-l-blue-300" style={{width:'100%',borderLeftWidth:6}}>
                            <div className="skeleton-line bg-slate-300 rounded" style={{width:'21%',height:5,maxWidth:150}}>
                            </div>
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
                        <div className="row-sm w-full rounded-tl-lg !border-l-green-500 !justify-start ps-5" style={{borderLeftWidth:6,width:150}}>
                            <div className="skelaton bg-slate-300 rounded" style={{width:'65%',height:5}}></div>
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
                      <div className="column rounded-bl-lg flex !justify-start px-4 !border-l-green-300" style={{width:'100%',borderLeftWidth:6}}>
                          <div className="skeleton-line bg-slate-300 rounded" style={{width:'21%',height:5,maxWidth:150}}>
                          </div>
                      </div>
                </div>
              </div>
          </div>
      </div>
  </div>

</div>;
};

export default SelectColumnPage;
