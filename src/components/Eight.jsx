import React from "react";
import { EightRelative } from "./EightRelative";
import icon1 from "./../assets/Images/png/png/002-blogging.png"
import icon2 from "./../assets/Images/png/png/003-electric-car.png"
import icon3 from "./../assets/Images/png/png/001-award.png"
import icon4 from "./../assets/Images/png/png/004-user.png"


export const Eight=()=>{
    return(
        <section class="eight">
        <div class="outerdiv1">
            <div>
                <h1>More Than 10 Years <span>Of Experience</span></h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            </div>
        </div>
        <div class="outerdiv2">
            <EightRelative imgPath={icon1} data="1276" h5Data="Dealer Review"/>
            <EightRelative imgPath={icon2} data="967" h5Data="Total Cars"/>
            <EightRelative imgPath={icon3} data="167" h5Data="Award Winning"/>
            <EightRelative imgPath={icon4} data="396" h5Data="Dealer Review"/>
        </div>
    </section>
    )
}