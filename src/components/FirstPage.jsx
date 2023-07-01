import React from "react";

export const FirstPage=()=>{
   return(
    <>
        <section className="first">
        <div className="outerdiv1">
            <h1>Carhouse</h1>
        </div>
        <div className="outerdiv2">
            <div className="inner1">
                <div>
                    <i className='fa-solid fa-location-dot'></i>
                </div>
                <div>
                    <h5>Our Location</h5>
                    <h4>25/7 Barden, London</h4>
                </div>
            </div>
            <div className="inner2">
                <div>
                    <i className="fas fa-envelope-open"></i>
                </div>
                <div>
                    <h5>Online Support</h5>
                    <h4>info@rana.com</h4>
                </div>
            </div>
            <div className="inner1">
                <div>
                    <i className="fa-solid fa-phone-volume" aria-hidden="true"></i>
                </div>
                <div>
                    <h5>Free Contact</h5>
                    <h4>+00-4X6-634-781</h4>
                </div>
            </div>
        </div>
    </section>
    </>
   ) 
}