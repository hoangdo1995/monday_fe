import { Tooltip } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import styled from "styled-components";
import { roundToDecimalPlace } from "../../../../../utils/util";

const StatusHeader = (props) => {
    const {workProgressDetail} =  props;
    const {done,working,stuck,noStart,total} = workProgressDetail;
  return (
    <StyleStatus>
        <div className="status__container text-center">
            <div className="status__title min-w-48 mb-1">
                Status
            </div>
            <div className="status__detail flex justify-center items-center">
                <Tooltip title={`Done ${done}/${total} - ${roundToDecimalPlace((done/total)*100,2)}%`} mouseEnterDelay={.4}>
                    <div className="status__detail__item bg-[#00c875]" style={{width:`${(done/total)*100}%`}}></div>
                </Tooltip>
                <Tooltip title={`Done ${done}/${total} - ${roundToDecimalPlace((working/total)*100,2)}%`} mouseEnterDelay={.4}>
                    <div className="status__detail__item bg-[#fdab3e]" style={{width:`${(working/total)*100}%`}}></div>
                </Tooltip>
                <Tooltip title={`Done ${done}/${total} - ${roundToDecimalPlace((stuck/total)*100,2)}%`} mouseEnterDelay={.4}>
                    <div className="status__detail__item bg-[#df2e4a]" style={{width:`${(stuck/total)*100}%`}}></div>
                </Tooltip>
                <Tooltip title={`Done ${done}/${total} - ${roundToDecimalPlace((noStart/total)*100,2)}%`} mouseEnterDelay={.4}>
                    <div className="status__detail__item bg-[#c4c4c4]" style={{width:`${(noStart/total)*100}%`}}></div>
                </Tooltip>
            </div>
        </div>
    </StyleStatus>
  );
};

const StyleStatus = styled.div`
    .status__container{
        .status__title{
            font-weight:400;
        }
        .status__detail{
            height: 30px;
            .status__detail__item{
                min-width:15px;
                height:80%;
                cursor:pointer;
                transition:.25s;
                &:hover{
                    height:100%;
                    border-radius:4px;
                }
            }
        }
    }

`

export default StatusHeader;
