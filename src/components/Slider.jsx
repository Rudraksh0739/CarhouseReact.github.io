import React from "react";
import { SliderPage } from "./SliderPage";
import car1 from "./../assets/Images/car-1 (1).jpg"
import car2 from "./../assets/Images/car-2.jpg"
import car3 from "./../assets/Images/car-3.jpg"


export const Slider = () => {
    return (
        <section class="slider">
            <div class="slides">
                <SliderPage image={car1} data="EXPLORE YOUR DREAM CAR"/>
                <SliderPage image={car2} data="WOW FACTOR STANDARD"/>
                <SliderPage image={car3} data="WE ARE WHEEL"/>
            </div>
            <div class="slides">
                <SliderPage image={car1} data="EXPLORE YOUR DREAM CAR"/>
                <SliderPage image={car2} data="WOW FACTOR STANDARD"/>
                <SliderPage image={car3} data="WE ARE WHEEL"/>
            </div>
        </section>
    )
}