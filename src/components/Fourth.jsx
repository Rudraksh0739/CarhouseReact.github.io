import React from "react";

export const Fourth = (props) => {
    return (
        <section class="fourth">
            <div>
                <h1>{props.fourthData1} <span>{props.fourthData2}</span></h1>
                <h4>{props.fourthData3}</h4>
            </div>
        </section>
    )
}