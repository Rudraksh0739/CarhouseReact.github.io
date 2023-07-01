import React from "react";
import { FooterRelative } from "./FooterRelative";
import Image1 from "./../assets/Images/png/small-car-1.jpg"
import Image2 from "./../assets/Images/png/small-car-2.jpg"
import Image3 from "./../assets/Images/png/small-car-3.jpg"


export const Footer=()=>{
    return(
        <>
        <footer>
        <div class="footer1">
            <div class="outerdiv1">
                <div>
                    <h3>Contact Info</h3>
                </div>
                <div>
                    <p><i class="fa fa-location-dot"></i> 20/F Green Road, Dhanmondi, Dhaka</p>
                </div>
                <div>
                    <p><i class="fa fa-envelope-open"></i> info@themevessel.com</p>
                </div>
                <div>
                    <p><i class="fa fa-phone"></i> +0477 85X6 552</p>
                </div>
                <div>
                    <p><i class="fa fa-fax"></i> +0024 85X6 987</p>
                </div>
                <div>
                    <p><i class="fa-solid fa-globe"></i> carhouse@themevessel.com</p>
                </div>
            </div>
            <div class="outerdiv2">
                <div>
                    <h3>Useful Links</h3>
                </div>
                <ul>
                    <li><i class="fas fa-angle-double-right"></i> Home</li>
                    <li><i class="fas fa-angle-double-right"></i> About Us</li>
                    <li><i class="fas fa-angle-double-right"></i> Services</li>
                    <li><i class="fas fa-angle-double-right"></i> Car List</li>
                    <li><i class="fas fa-angle-double-right"></i> Blog</li>
                    <li><i class="fas fa-angle-double-right"></i> Gallery</li>
                    <li><i class="fas fa-angle-double-right"></i> Contact Us</li>
                    <li><i class="fas fa-angle-double-right"></i> Elements</li>
                </ul>
            </div>
            <div class="outerdiv3">
                <div>
                    <h3>Recent Cars</h3>
                </div>
                <FooterRelative imgPath={Image1} h4Data="Bentley Continental GT" pData="$345.00" pData2="Jan 12, 2020"/>
                <FooterRelative imgPath={Image2} h4Data="Fiat Punto Red" pData="$745.00" pData2="Sep 06, 2021"/>
                <FooterRelative imgPath={Image3} h4Data="Nissan Micra Gen5" pData="$745.00" pData2="Aug 26, 2020"/>
            </div>
            <div class="outerdiv4">
                <div>
                    <h3>Subscribe</h3>
                </div>
                <div class="inner1">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <div class="inner2">
                    <input type="text" placeholder="Email Address...."/>
                    <button><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
        <div class="footer2">
            <div class="outerdiv1">
                <p>© 2022 Theme Vessel. All Rights Reserved.</p>
            </div>
            <div class="outerdiv2">
                <i class="facebook fa-brands fa-facebook-f"></i>
                <i class="twitter fa-brands fa-twitter"></i>
                <i class="google fa-brands fa-google-plus-g"></i>
                <i class="linkedin fab fa-linkedin-in"></i>
            </div>
        </div>
    </footer>
    <a href="#" class="Fixed">
        <i class="fa-solid fa-angle-up"></i>
    </a>
    </>
    )
}