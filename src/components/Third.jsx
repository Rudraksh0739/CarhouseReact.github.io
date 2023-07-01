import React from "react";
import { ThirdRelative } from "./ThirdRelative";


export const Third = () => {
    return (
        <>
            <section className="third">
                <div className="outerdiv1">
                    <ThirdRelative />
                    <ThirdRelative />
                    <ThirdRelative />
                    <ThirdRelative />
                </div>
                <div className="outerdiv2">
                    <ThirdRelative />
                    <ThirdRelative />
                    <div className="myDIV">
                        <input type="range" />
                        <div className="p">
                            <div className="p1">
                                <p>0 USD</p>
                            </div>
                            <div className="p2">
                                <p>100000 USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="myDIV">
                        <button>Search</button>
                    </div>
                </div>
            </section>
        </>
    )
}