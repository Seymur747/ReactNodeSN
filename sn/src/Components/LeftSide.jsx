import React from "react";
import s from './LeftSide.module.css'
import LeftSideComI from './LeftSideCommonInfo'
import LeftSideFol from './LeftSideFollowing'
import LeftSidePro from './LeftSideProfile'

let LeftSide=()=>{

    return <div className={s.wrapper}>
        
    <LeftSideComI/>
    <LeftSideFol/>
    <LeftSidePro/>
    </div>
    
}
export default LeftSide;