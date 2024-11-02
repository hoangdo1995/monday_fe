import React, { useEffect } from "react";
import styled from "styled-components";

const OwnerCell = (props) => {
    const {value} = props;
    const renderAvatarIcon = (name,email)=>{
        const splitNameArray = name.split(' ');
        return <div>
            {splitNameArray[0].split("")[0].toUpperCase()}
            {splitNameArray[1].split("")[0].toUpperCase()}
        </div>;
    }
    useEffect(()=>{

    },[])
  return (
<OwnerCellStyled>
    <div className="ownerCell flex justify-center items-center relative w-full h-full ">
        {value.map((item,index)=><div key={index} className="ownerCell__avatar flex items-center justify-center font-semibold rounded-full w-7 h-7 text-sm bg-green-600">
            {renderAvatarIcon(item.name)} 
        </div> )}
        <div className="ownerCell__addIcon absolute left-2">
            <i className="fa fa-plus-circle text-blue-600"></i>
        </div>
    </div>
</OwnerCellStyled>
);
};

export default OwnerCell;

const OwnerCellStyled = styled.div`
    width:100%;
    height:100%;
    .ownerCell{
        .ownerCell__avatar{
        }
        .ownerCell__addIcon{
            display:none;
        }
        &:hover{
            .ownerCell__addIcon{
                display: block;
            }
        }
    }
`;
