import React from "react";
import Image from "./../assets/Images/avatar-1.jpg"
import Image1 from "./../assets/Images/car-9.jpg"


export const Tenth =()=>{
    return(
        <section class="tenth">
        <div class="outerdiv1">
            <img src={Image1} alt=""/>
        </div>
        <div class="opacity">
            <div class="outerdiv2">
                <div class="inner1">
                    <h1>Why Clients <span>Love Us</span></h1>
                </div>
                <div class="inner2">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text everLorem industry's standard dummy text everLorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing. as been the industry</p>
                </div>
                <div class="inner3">
                    <img src={Image}/>
                </div>
                <div class="inner4">
                    <h3>Karen Paran</h3>
                </div>
                <div class="inner5">
                    <h4>CEO, Brick Consulting</h4>
                </div>
                <div class="inner6">
                    <div class="div3"></div>
                    <div class="div2"></div>
                    <div class="div1"></div>
                </div>
            </div>
        </div>
    </section>
    )
}