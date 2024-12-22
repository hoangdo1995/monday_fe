import { CloseOutlined, SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from 'yup';

const OwnerCell = (props) => {
    const {value} = props;
    const [isInvite,setIsInvite] = useState(false);
    const [memberInvite,setMemberInvite] = useState();
    const [visible,setVisible] = useState(false);
    // formik custom
    const formik = useFormik({
        initialValues: {
            emailInvite: '',
        },
        validationSchema:Yup.object().shape({
            emailInvite: Yup.string().email('*Invalid email').required('* You need enter a email'),
          }),
        onSubmit: values => {
          setVisible(!visible);
          setIsInvite(!isInvite);
        },
      });
    const renderAvatarIcon = (name,email)=>{
        const splitNameArray = name.split(' ');
        return <div>
            {splitNameArray[0].split("")[0].toUpperCase()}
            {splitNameArray[1]?.split("")[0].toUpperCase()}
        </div>;
    }
    const items = [
        {
            label: (
            <div>
                {isInvite?
                <form className="min-w-72 px-4 py-2 color-text-main" onSubmit={formik.handleSubmit} onClick={(e)=>e.stopPropagation()}>
                    <div>
                        <input className="w-full" 
                            id="emailInvite"
                            name="emailInvite"
                            type="emailInvite"
                            onChange={formik.handleChange}
                            value={formik.values.emailInvite}
                            onSubmit={(e)=>e.stopPropagation()}
                        />
                        <div className="text-end text-red-400">
                        {formik.errors.emailInvite}
                        </div>
                    </div>
                    <div className="flex justify-end mt-3">
                        <div className="button-none-bg me-2" onClick={()=>{setVisible(!visible);setIsInvite(!isInvite)}}>Cancel</div>
                        <button className={`button-none-bg ${formik.errors.emailInvite?'disabled':''}`} {...formik.errors.emailInvite?'disabled':''} {...formik.values.emailInvite?'disabled':''} type="submit" >Invite new member</button>
                    </div>
                </form>:
                <div className="ownerCell__dropdown px-5 py-1">
                    <div>
                        {/* hiển thị danh sách các member */}
                    {value.map((item,index)=>
                        <div className="ownerCell__dropdown__choice flex items-center p-1 w-fit rounded-full bg-[#e5f4ff]">
                            <div key={index} className="ownerCell__dropdown___choice__avatar flex items-center justify-center font-semibold rounded-full w-5 h-5 text-xs bg-green-600">
                            {renderAvatarIcon(item.name)} 
                            </div>
                            <div className="text-xs font-normal cursor-text ms-2">
                                {item.name}
                            </div>
                            <div className="ownerCell__dropdown__iconDelete">
                                <CloseOutlined className="ms-2" />
                            </div>
                        </div>    
                    )}
                    {/*  */}
                    </div>
                    <div className="ownerCell__dropdown__input color-text-main relative">
                        <input className="w-full min-w-72 mt-4 text-sm no-underline !ps-8" placeholder="Search names, roles or teams" onClick={(e)=>e.stopPropagation()}/>
                        <SearchOutlined className="absolute left-2 bottom-2 text-lg"/>
                    </div> 
                    <div>
                        <div className="color-text-main">
                            {/* suggested people display */}
                            <div className="my-2">Suggested people</div>
                            <div className="">
    
                            </div>
                            <div>
                                <div className="button-none-bg font-light" onClick={(e)=>{setIsInvite(!isInvite);e.stopPropagation()}} >
                                    <UserAddOutlined  className="me-2"/>
                                    Invite a new member by email
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>

            
        ),
            key:'0'
        }
    ];
    
    const handleDropdownOpenChange=(newOpen)=>{
        setVisible(newOpen);
    }
    useEffect(()=>{

    },[])
  return (
<OwnerCellStyled>
    <Dropdown 
        menu={{items,}}
        trigger={['click']}
        overlayClassName="main-dropdown"
        placement="bottom"
        open={visible}
        onOpenChange={handleDropdownOpenChange}
        >
        <div className="ownerCell flex justify-center items-center relative w-full h-full ">
            {value.map((item,index)=><div key={index} className="ownerCell__avatar flex items-center justify-center font-semibold rounded-full w-7 h-7 text-sm bg-green-600">
                {renderAvatarIcon(item.name)} 
            </div> )}
            <div className="ownerCell__addIcon absolute left-2">
                <i className="fa fa-plus-circle text-blue-600"></i>
            </div>
        </div>
    </Dropdown>
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
