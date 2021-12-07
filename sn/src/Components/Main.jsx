import React from "react";
import LeftSide from "./LeftSide";
import s from  './Main.module.css'
import Center from './Center'
import RightSide from './RightSide'

let Main=()=>{
    return<div className={`container ${s.wrapper}`}>
                <LeftSide/>
                <Center/>
               <RightSide/>
            </div>
}

export default Main;