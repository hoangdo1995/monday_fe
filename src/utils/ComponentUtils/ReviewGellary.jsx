import React, { useState } from "react";

const ReviewGellary = (props) => {
  const {listImages,defaultImage} = props;
  const [currentShow,setCurrentShow] = useState(defaultImage?defaultImage:listImages[0]?listImages[0]:'');
  const setActionStyle = (event)=>{
      const listImage = document.querySelectorAll('.review-gellary-image');
      listImage.forEach(image=>image.classList.remove("border-4"));
      event.currentTarget.querySelector('img').classList.add("border-4");
  }
  return ( <div>
    <div className="flex gap-2" style={{width:900,height:380}}>
      <div className="w-9/12 h-full">
        <img className="object-fill w-full h-full" src={currentShow} alt="" />
      </div>
      <div className="w-3/12 h-full overflow-y-scroll custom-scrollbar">
        {listImages?listImages.map((image)=>(
          <div className="w-full px-1 py-2 rounded-sm cursor-pointer" onClick={(event)=>{setCurrentShow(image);setActionStyle(event)}}>
          <img className="review-gellary-image rounded-lg  border-blue-600" src={image} alt="" />
        </div>
        )):''}

      </div>
    </div>
  </div>)
};

export default ReviewGellary;
