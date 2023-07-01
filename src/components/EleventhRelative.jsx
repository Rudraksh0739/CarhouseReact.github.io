import React from "react";

export const EleventhRelative=({imgPath,pData})=>{
    return(
        <div class="card">
                    <div class="upperbody">
                        <img src={imgPath} alt=""/>
                        <div class="hover">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="lowerbody">
                        <div class="div1">
                            <p>{pData}</p>
                        </div>
                        <div class="div2">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the</p>
                        </div>
                        <div class="div3">
                            <h5><i class="fas fa-calendar-alt"></i> 25 June 2021</h5>
                            <h5><i class="fa-solid fa-comments"></i> Com(05)</h5>
                        </div>
                    </div>
                </div>
    )
}