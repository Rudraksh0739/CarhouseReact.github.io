import React from "react";
import { EleventhRelative } from "./EleventhRelative";
import Image1 from "./../assets/Images/blog-1.jpg"
import Image2 from "./../assets/Images/blog-2.jpg"
import Image3 from "./../assets/Images/blog-3.jpg"

export const Eleventh=()=>{
    return(
        <section class="cardslider2">
        <section class="slide2">
            <section class="elevnth">
                <EleventhRelative imgPath={Image1} pData="Quality not Quantity for Selling Cars Today"/>
                <EleventhRelative imgPath={Image2} pData="Are You Ready For Online Dealership"/>
                <EleventhRelative imgPath={Image3} pData="What's New Coming From Carhouse in Future"/>
            </section>
            <section class="elevnth">
            <EleventhRelative imgPath={Image1} pData="Quality not Quantity for Selling Cars Today"/>
                <EleventhRelative imgPath={Image2} pData="Are You Ready For Online Dealership"/>
                <EleventhRelative imgPath={Image3} pData="What's New Coming From Carhouse in Future"/>
            </section>
        </section>
    </section>

    )
}