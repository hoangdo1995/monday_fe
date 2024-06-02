import React, { useEffect } from "react";
import allDoneIcon from '../../../images/icon/done-labels-filters.png';

const StatusIcon = (props) => {
    const {state} = props;
    const mapColor = {
        "done":"#00c875",
        "working":"#fdab3e",
        "stuck":"#df2e4a",
        "notStart":"#c4c4c4",
    }
    useEffect(()=>{
    },[])
    return (
        (state==='allDone')?
        <img src={allDoneIcon} width={15}/>
        :
        <span className="rounded-full" style={{backgroundColor:mapColor[state],width:10,height:10,margin:2.5}}>
        </span>
    )
};

export default StatusIcon;
