import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";

const AdaptiveInputComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  
  

  const handleFocus = ()=>{
    setIsActive(true);
    
  }


  useEffect(()=>{
      const adaptiveInput = document.getElementById('adaptive_input');  

      // xử lý onBlur input search
      const handleClickOutsideOfInputSearch = (event) => {
        // Kiểm tra xem sự kiện click chuột có xảy ra bên ngoài phần tử input không
        if (event.target ===  adaptiveInput || adaptiveInput.contains(event.target) ) {
          // Nếu click chuột không phải là trên phần tử input, đóng input
          setIsActive(true);
        }
        else{
          setIsActive(false);
        }
      };
      
      if(isActive&&inputRef.current){
        inputRef.current.focus();

        // Thêm lắng nghe sự kiện click chuột ở cấp độ cao hơn
        document.addEventListener("mousedown", handleClickOutsideOfInputSearch);
      }
      else{
        document.removeEventListener('mousedown',handleClickOutsideOfInputSearch);
      }
      
      return ()=>{
        document.removeEventListener('mousedown',handleClickOutsideOfInputSearch);
      }
  },[isActive])
  return (
    <div id="adaptive_input" className={`adaptiveInput flex items-center button-light !pe-1 ${isActive?'active':''}`}  onClick={()=>{handleFocus()}}>
            <div className="me-2"><SearchOutlined /></div>
            <div className="title font-light">Search</div>
            <input autoFocus={isActive} ref={inputRef} placeholder="Search in this boards" id="search-board-input"/>
            <div className="filter button-light !m-0 !py-0" style={{padding:'0 5px'}} onClick={()=>setIsActive(true)}>
                <i className="fa fa-stream text-sm "></i>
            </div>

    </div>
  )
};

export default AdaptiveInputComponent;
