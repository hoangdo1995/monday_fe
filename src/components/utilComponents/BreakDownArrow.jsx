import React from "react";

const BreakDownArrow = (props) => {
    // tạo dấu mũi tên xuống dòng
    // với props
    // height: chiều cao của icon
    // width: chiều dài tổng của icon
    // color: màu của icon
    const {height,color,width,delay} = props;
  return <div className="break-arrow absolute scale-in" style={{width:width?width/2:18,height:1,background:color?color:'gray',left:'100%',animationDelay:delay?delay:'0'}}>
    <div className="absolute" style={{width:1,height:height?height/2-1:23,background:color?color:'gray',right:0}}>
      <div className="absolute" style={{height:1.2,width:width?width:36,background:color?color:'gray',right:0,bottom:0}}>
          <div className="absolute" style={{height:height?height/2-1:24,width:1.5,background:color?color:'gray'}}>
              <div className="absolute" style={{height:1,width:18,background:color?color:'gray',bottom:0}}>
                  <div className="arrow-right absolute" style={{right:0,bottom:-6.5}}></div>
              </div>
          </div>
      </div>
  </div>
</div>;
};

export default BreakDownArrow;
