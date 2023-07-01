import React from "react";

export const FooterRelative=({imgPath,h4Data,pData,pData2})=>{
    return(
        <div class="div1">
                    <div class="inner1">
                        <img src={imgPath} alt=""/>
                    </div>
                    <div class="inner2">
                        <h4>{h4Data}</h4>
                        <div class="price">
                            <div>
                                <p>$345.00</p>
                            </div>
                            <div>
                                <p><i class="fa fa-calendar-alt"></i> {pData2}</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}