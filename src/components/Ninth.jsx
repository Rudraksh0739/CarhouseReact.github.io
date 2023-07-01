import React from "react";
import { NinthRelative } from "./NinthRelative";
import Image1 from "./../assets/Images/avatar-10.jpg"
import Image2 from "./../assets/Images/avatar-12.jpg"
import Image3 from "./../assets/Images/avatar-11.jpg"
import Image4 from "./../assets/Images/avatar-9.jpg"


export const Ninth =()=>{
    return(
        <section class="cardslider">
        <section class="slide">
            <section class="ninth">
                <NinthRelative imgPath={Image1} h3Data="Martin Smith" h4Data="Web Devloper"/>
                <NinthRelative imgPath={Image2} h3Data="Brandon Miller" h4Data="Manager"/>
                <NinthRelative imgPath={Image3} h3Data="Stone Carolyn" h4Data="Creative Director"/>
                <NinthRelative imgPath={Image4} h3Data="Michele Nelson" h4Data="Support Manager"/>
            </section>
            <section class="ninth">
            <NinthRelative imgPath={Image1} h3Data="Martin Smith" h4Data="Web Devloper"/>
                <NinthRelative imgPath={Image2} h3Data="Brandon Miller" h4Data="Manager"/>
                <NinthRelative imgPath={Image3} h3Data="Stone Carolyn" h4Data="Creative Director"/>
                <NinthRelative imgPath={Image4} h3Data="Michele Nelson" h4Data="Support Manager"/>
            </section>
        </section>
    </section>
    )
}