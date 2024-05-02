import React,{useEffect} from "react";
import DirectionButtonDefault from "../../components/DirectionButtonDefault";
import { useDispatch, useSelector } from "react-redux";
import DirectionButtonGray from "../../components/DirectionButtonGray";
import RadioInput from "../../components/RadioInput";
import { setNewBoardObjectManager } from "../../redux/reducer/newBoardReducer";
import InputText from "../../components/InputText";
import LogoComponent from "../../components/LogoComponent";

const SelectObjectManagerPage = () => {
    const dispatch = useDispatch();
    const {objectManager} = useSelector((state)=>state.newBoardReducer);
    const objectSelectHandler = (value)=>{
        const action = setNewBoardObjectManager(value);
        dispatch(action);
    }
    useEffect(()=>{
        if(!objectManager){
            const action = setNewBoardObjectManager('project');
            dispatch(action);
        }
        const defaultRadio = document.querySelector(`input[name='objectManager'][value=${objectManager}]`);
        if(defaultRadio)defaultRadio.checked = true;
    },[objectManager])
  return <div className="w-full h-full flex flex-col justify-between" style={{maxHeight:700}}>
    <div className="">
              <LogoComponent/>
    </div>
    <div>
        <h3 className="text-2xl font-medium mt-20 mb-8 text-gray-700">Select one of the items you'd like to manager</h3>
        <div className="flex justify-between items-center">
            {/* //content */}
            <RadioInput value='project' customStyle={{border:'none'}} name='objectManager' setValue={objectSelectHandler}/>
            <RadioInput value='task' customStyle={{border:'none'}} name='objectManager' setValue={objectSelectHandler}/>
            <RadioInput title={<InputText id='customObjectManagerInput' placeholder="Custom" clearButton={true} onClickHandler={()=>{
                const customRadio = document.querySelector(`input[name='objectManager'][value='custom']`);
                customRadio.checked = true;
            }} onChangeHandler={(event)=>objectSelectHandler(event.currentTarget.value?event.currentTarget.value:'project')} customStyle={{width:100,padding:'3px 10px',transform:'translateY(-4.5px)'}}/>} customStyle={{border:'none'}} name='objectManager' value='custom'/>
        </div>
        <div className="text-gray-600 font-normal mb-8 mt-5 p-3 rounded-lg bg-slate-100" style={{fontSize:14}}>
            <div className="owner-desc">
                "Item's are rows in your board which hold all the relevant information to your tasks, projects, campaigns and more."
            </div>
        </div>
    </div>
  <div className="flex justify-between">
      <DirectionButtonGray  title={<span><i className="fa fa-chevron-left me-2"></i> Back</span>} linkRouter={'select-column'}/>
      <DirectionButtonDefault linkRouter={'select-view-layout'} title={<div className='flex items-center'><span className='font-light tracking-wide'>Next</span><i className="fa fa-chevron-right text-xs ms-1"></i></div>} active={objectManager?true:false}/>
  </div>
</div>;
};

export default SelectObjectManagerPage;
