import React from "react";
import s from './LeftSide.module.css'
import LeftSideComI from './LeftSideCommonInfo'
import LeftSideFol from './LeftSideFollowing'
import LeftSidePro from './LeftSideProfile'

let LeftSide=()=>{

    return <div className={s.wrapper}>
        
    <LeftSideComI/>c
    <LeftSideFol/>F
    <LeftSidePro/>P
    </div>
    
}
export default LeftSide;