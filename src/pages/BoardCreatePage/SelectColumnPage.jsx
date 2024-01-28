import React,{useEffect, useState} from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { useDispatch, useSelector } from "react-redux";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import ItemSelect from "../../components/ItemSelect";
import { columnDesc } from "../../utils/defaultValue";
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
    useEffect(()=>{
        if(listColumn.length===0){
            const action = setNewBoardListColumn(['owner','status','due_date']);
            dispatch(action);
        }
    },[listColumn])
  return <div className="body">
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
</div>;
};

export default SelectColumnPage;
