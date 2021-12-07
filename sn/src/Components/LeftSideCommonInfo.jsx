import React from "react";
import s from './LeftSide.module.css'
import avatar from './../Images/user-pic.png'

let LeftSideComI=()=>{

    return <>
       <div>
         <div className={s.commonInfo}>
             <img src={avatar} alt="" />
           <div className={s.textInfo}>
             <h5>John Doe</h5>
             <span>Graphic Designer at Self Employed</span>
           </div>
         </div>
       </div>
    </>
}
export default LeftSideComI;