import React from "react";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="outerdiv1">
                    <ul>
                        <li>home</li>
                        <li>car listing</li>
                        <li>service</li>
                        <li>pages</li>
                        <li>shop</li>
                        <li>blog</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="outerdiv2">
                    <a href=""><i className="fa fa-search"></i></a>
                </div>
            </header>
        </>
    )
}