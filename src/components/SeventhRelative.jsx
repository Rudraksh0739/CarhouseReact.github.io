import React from "react";

export const SeventhRelative=(props)=>{
    return(
        <div className={props.classes}>
                <img src={props.imgPath} alt=""/>
                <button>New</button>
                <div>
                    <h5><span>1050.00</span> {props.h5Data}</h5>
                    <h3>{props.h3Data}</h3>
                </div>
                <div class="hover"></div>
            </div>
    )
}