import React from "react";
import s from  './Header.module.css';
//import logo from './../Images/logo.png'
import logo from './../Images/logo.png'
import icon1 from './../Images/icon1.png'
import icon2 from './../Images/icon2.png'
import icon3 from './../Images/icon3.png'
import icon4 from './../Images/icon4.png'
import icon5 from './../Images/icon5.png'
import icon6 from './../Images/icon6.png'
import icon7 from './../Images/icon7.png'
import userpic from './../Images/user-pic.png'





let Header=()=>{
    return <div className='container'>
         <header >
            <div className={s.wrapper}>
                <div className={s.box1}>
                    <div className={s.logoContainer}>
                        <img src={logo }  alt='not found' className={s.logo}></img>
                    </div>
                    <div className={s.searchInput}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search..." aria-label="Text" aria-describedby="basic-addon2"></input><button> <i  className='fa fa-search'></i></button>
                </div> 
                    </div>
                </div>
                <div className={s.box2}>
                    <div className={s.listElements}>
                        <ul>
                            <li><a href="index.html" title=""><span><img src={icon1} alt=""/></span>Home</a></li>
                            <li><a href="index.html" title=""><span><img src={icon2} alt=""/></span>Companies</a></li>
                            <li><a href="index.html" title=""><span><img src={icon3} alt=""/></span>Projects</a></li>
                            <li><a href="index.html" title=""><span><img src={icon4} alt=""/></span>Profiles</a></li>
                            <li><a href="index.html" title=""><span><img src={icon5} alt=""/></span>Jobs</a></li>
                            <li><a href="index.html" title=""><span><img src={icon6} alt=""/></span>Messages</a></li>
                            <li><a href="index.html" title=""><span><img src={icon7} alt=""/></span>Notification</a></li>
                        </ul>
                    </div>
                </div>
                <div className={s.box3}>
                    <div>
                        <div className="image">
                            <img src={userpic}/>
                        </div>
                        <div className='Name'>

                        </div>
                    </div>
                </div>
            </div>
    </header>
    </div>
}
export default Header;