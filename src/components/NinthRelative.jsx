import React from "react";

export const NinthRelative = ({imgPath,h3Data,h4Data}) => {

    return (
        <div className="card">
            <div className="upperbody">
                <img src={imgPath} alt=""/>
                    <div className="hover">
                        <div>
                            <i className="face1 fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="face2 fab fa-google-plus-g"></i>
                        </div>
                    </div>
            </div>
            <div className="lowerbody">
                <h3>{h3Data}</h3>
                <h4>{h4Data}</h4>
            </div>
        </div>
    )
}