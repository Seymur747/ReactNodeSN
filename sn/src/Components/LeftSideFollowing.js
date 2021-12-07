import React from "react";
import s from './LeftSide.module.css'

let LeftSideFol=()=>{

    return <>
                <div className={s.FollowDivs} >
                        <h6>Following</h6>
                        <span>34</span>
                </div>
                <div  className={s.FollowDivs} >
                        <h6>Followers</h6>
                        <span>155</span>
                </div>
          </>
}
export default LeftSideFol;