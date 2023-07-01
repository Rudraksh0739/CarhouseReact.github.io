import React from "react";

export const SixthRelative=(props)=>{
    return(
        <div class="inner1">
                <img src={props.imgPath} alt=""/>
                <div class="hover">
                    <div>
                        <h2>{props.h2Data}</h2>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            eiusmod tempor incididunt eiusmod</p>
                    </div>
                    <div>
                        <h3>Read More</h3>
                    </div>
                </div>
            </div>
    )
}