import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FifthRelative } from "./FifthRelative";
import car1 from "./../assets/Images/card1.jpg"
import car2 from "./../assets/Images/card2.jpg"
import car3 from "./../assets/Images/card3.jpg"


export const Fifth = () => {
    const [currData, updateData] = useState([])
    const newcurrData=currData.slice(0,3)
    useEffect(() => {
        showUser()
    }, [])

    const showUser = async () => {
        const getData = await axios.get(`https://fakestoreapi.com/products`)
        updateData(getData.data)
    }
    console.log(currData)
    return (
        <section class="fifth">
             
            <div class="slider">
            {
                newcurrData.map((element) => {
                 return(
            <> 
            <FifthRelative imgPath={element.image} classes="card" h2Data={element.title} h5Data="Kathal St. Tampa City," price={element.price}/>
            </>
           )
        })
        }
        </div>
        
    </section >
    )
}