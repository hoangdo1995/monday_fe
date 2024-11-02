import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const MoveCursorComponentIcon = () => {
  return (
    <MoveCursorComponentIconStyle className="cursor-pointer">
        <div className="moveCursorIcon flex flex-col items-center justify-center rounded-full w-5 h-5">
            <CaretUpOutlined className="moveCursorIcon__iconChild"/>
            <CaretDownOutlined  className="moveCursorIcon__iconChild"/>
        </div>
    </MoveCursorComponentIconStyle>
  );
};

export default MoveCursorComponentIcon;

const MoveCursorComponentIconStyle = styled.div`
    .moveCursorIcon{
        background-color:var(--color-table-bg-main);
        .moveCursorIcon__iconChild{
            font-size: 9px;
        }
        &:hover{
           background-color:var(--color-icon-main-hover-bg);
        }
    }
`
