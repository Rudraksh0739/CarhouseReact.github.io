import React from "react";

export const FifthRelative=(props)=>{
    return(
        <div className={props.classes}>
                <div className="upperbody">
                    <img src={props.imgPath} alt=""/>
                    <div className="inner1">
                        <button>For Sale</button>
                    </div>
                    <div className="inner2">
                        <div>
                            <h5><i className="fa-solid fa-road"></i> 4,000 km</h5>
                        </div>
                        <div>
                            <h5><i className='fas fa-calendar-alt'></i> 2020</h5>
                        </div>
                        <div>
                            <h5><i className='fas fa-tram'></i> Mannual</h5>
                        </div>
                    </div>
                    <div className="upperbodyhover">
                        <div>
                            <i className="fa-solid fa-eye"></i>
                            <i className="far fa-heart"></i>
                            <i className="fa fa-balance-scale"></i>
                            <i className="fa fa-expand"></i>
                        </div>
                    </div>
                </div>
                <div className="lowerbody">
                    <div className="outerdiv1">
                        <div>
                            <h2>{props.h2Data}</h2>
                        </div>
                        <div>
                            <h5><i className='fa-solid fa-location-dot'></i> {props.h5Data}</h5>
                        </div>
                    </div>
                    <div className="outerdiv2">
                        <div>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h5> (65 Reviews)</h5>
                        </div>
                        <div>
                            <h3>{props.price}</h3>
                        </div>
                    </div>
                </div>
            </div>
    )
}