import React from "react";
import { useState,useEffect } from "react";

export const EightRelative=({data,h5Data,imgPath})=>{
    const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < data) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [count, data]);
    
    return(
        <>
        <div className="inner1">
                <div className="div1">
                    <img src={imgPath} alt=""/>
                </div>
                <div className="div2">
                    <div>
                        <h2 className="num">{count}</h2>
                    </div>
                    <div>
                        <h5>{h5Data}</h5>
                    </div>
                </div>
            </div>
    </>
    )
}