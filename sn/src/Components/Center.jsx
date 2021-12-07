import React from "react";
import s from './Center.module.css'
import avatar from './../Images/user-pic.png'
import icon8 from './../Images/icon8.png'
import icon9 from './../Images/icon9.png'
let Center=()=>{
    return <div >
                <div className={s.wrapper}>
                    <div className={s.leftAreaSide}>
                         <img src={avatar} alt="" />
                    </div>
                    <div  className={s.buttons}>
                            <button className='btn btn-primary'>Post a Project</button>
                            <button className='btn btn-warning'>Post a Job</button>
                    </div>    
                </div>  
                <div>
                    <div className={s.wrapper2}>
                        <div>
                            <div className={s.uDatas}>
                            <i style={{float:'right'}} class="fas fa-ellipsis-v"></i>
                                <div  className={s.uImage}>
                                    <img src={avatar}></img>
                                </div>
                                <div className={s.uInfos}>
                               
                                    <h5>John Doe</h5>
                                    <span>3 min ago</span>
                                    
                                </div>
                            </div>
                            <div className={s.uIcons}>
                                <ul className={s.descr}>
                                    <li><img src={icon8} alt=""/><span>Epic Coder</span></li>
                                    <li><img src={icon9} alt=""/><span>India</span></li>
                                </ul>
                                <ul className={s.uIcons2}>
                                    <li><a href="#" title=""><i class="far fa-bookmark"></i></a></li>
                                    <li><a href="#" title=""><i class="far fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5>Senior Wordpress Developer</h5>
                            </div>
                            <div>
                               <div className={s.reqiurements}>
                                <button>Full time</button>
                                    <span> $30 / hr</span>
                               </div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...
                                </p>
                                <a style={{color:'#e44d3a'}} href="#">view more</a>
                                <div>
                                    <ul className={s.skils}>
                                        <li>HTML</li>
                                        <li>PHP</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Wordpress</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={s.bottomIcons}>
                            <div>
                                <div className={s.LeftSideIcons}> 
                                    <a href="#"><i className="fas fa-heart"></i> Like</a>
                                            <ul>
                                                <li>1</li>
                                                <li>1</li>
                                                <li>1</li>

                                            </ul>
                                        <a href="#" className="com"><i className="fas fa-comment-alt"></i> Comment 15</a>
                               </div>
                                <a href="#" className={s.viewsDiv}><i className="fas fa-eye"></i>Views 50</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}   
export default Center;