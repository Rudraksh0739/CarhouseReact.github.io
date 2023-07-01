import React from "react";
import { SixthRelative } from "./SixthRelative";
import icon1 from "./../assets/Images/png/003-shield.png"
import icon2 from "./../assets/Images/png/002-deal.png"
import icon3 from "./../assets/Images/png/001-discount.png"
import icon4 from "./../assets/Images/png/004-customer-service.png"



export const Sixth=()=>{
    return(
        <section class="sixth">
        <div class="outerdiv1">
            <div>
                <h1>What Are You <span>Looking For</span></h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            </div>
            <div>
                <h4>Read More</h4>
            </div>
        </div>
        <div class="outerdiv2">
            <SixthRelative imgPath={icon1} h2Data="Highly Secured"/>
            <SixthRelative imgPath={icon2} h2Data="Trusted Agents"/>
            <SixthRelative imgPath={icon3} h2Data="Get an Offer"/>
            <SixthRelative imgPath={icon4} h2Data="Free Support"/>
        </div>
    </section>

    )
}