import React from "react";
import { SeventhRelative } from "./SeventhRelative";
import Photo1 from "./../assets/Images/img-3.jpg"
import Photo2 from "./../assets/Images/img-2.jpg"
import Photo3 from "./../assets/Images/img-5.jpg"
import Photo4 from "./../assets/Images/img-1.jpg"


export const Seventh=()=>{
    return(
        <section class="seventh">
        <div class="outerdiv1">
            <SeventhRelative classes="inner1" imgPath={Photo1} h5Data="Fixed" h3Data="Electric Car Of 2019"/>
            <SeventhRelative classes="inner1" imgPath={Photo2} h5Data="Negotiable" h3Data="Lamborghini Huracán"/>
            <SeventhRelative classes="inner2" imgPath={Photo3} h5Data="Negotiable" h3Data="Lamborghini Huracán"/> 
        </div>
        <div class="outerdiv2">
        <SeventhRelative classes="inner1" imgPath={Photo4} h5Data="Negotiable" h3Data="Red Audi R8 2018"/>
        </div>
    </section>
    )
}