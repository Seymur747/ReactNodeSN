import React from "react";
import s from './RigthSide.module.css'
import logo from './../Images/wd-logo.png'


let RightSide=()=>{
    return(
     <div>
         <div className={s.infoBox}> 
             <div>
                <img src={logo} alt="" />
                <h5>Track Time on Workwise</h5>
                <span>Pay only for the Hours worked</span>
            </div>
            <div className={s.downDiv}>
                <h5>SIGN UP</h5>
                <a href="#">Learn More</a>
            </div>
        </div>
    </div>
    )
}
export default RightSide;