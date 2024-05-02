import { Tooltip } from "antd";
import React, { useEffect } from "react";
import { integrateName } from "../../utils/templateValueObject";

const IntegrateIcon = (props) => {
    const {showTooltip,name,size} = props;
    const sizeMap = {'small':'w-8','large':'w-12'}
    return <Tooltip title={`${showTooltip?integrateName[name]:''}`} placement="bottom" >
          <div className="w-fit inline-block">
              <img className={size?sizeMap[size]:'w-8'} src={`/images/Integrate_icons/${name}.png`} alt="" />
    </div>
    </Tooltip>
};

export default IntegrateIcon;
