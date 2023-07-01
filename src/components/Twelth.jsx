import React from "react";
import { TwelthRelative } from "./TwelthRelative";
import Image1 from "./../assets/Images/png/brand-1.png"
import Image2 from "./../assets/Images/png/brand-2.png"
import Image3 from "./../assets/Images/png/brand-3.png"
import Image4 from "./../assets/Images/png/brand-4.png"

export const Twelth=()=>{
    return(
        <section class="cardslider3">
        <section class="slide3">
            <section class="twelth">
                <TwelthRelative imgPath={Image1}/>
                <TwelthRelative imgPath={Image2}/>   
                <TwelthRelative imgPath={Image3}/>   
                <TwelthRelative imgPath={Image4}/>   
            </section>
            <section class="twelth">
                
            <TwelthRelative imgPath={Image1}/>
                <TwelthRelative imgPath={Image2}/>   
                <TwelthRelative imgPath={Image3}/>   
                <TwelthRelative imgPath={Image4}/>    
            </section>
        </section>
    </section>

    )
}