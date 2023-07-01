import React from "react";

export const SliderPage = (props) => {
    return (
        <>
        <section className="second">
            <div className="outerdiv1">
                <img src={props.image} alt=""/>
                    <div className="inner1">
                        <h1>{props.data}</h1>
                        <h4>Allow us to guide you through the innovative stress<br/> free approach in finding your dream car.</h4>
                    </div>
                    <div className="inner2">
                        <button className="btn1">order now</button>
                        <button className="btn2">test drive</button>
                    </div>
            </div>
        </section>
        </>
    )
}