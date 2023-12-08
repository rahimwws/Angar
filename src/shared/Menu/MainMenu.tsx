"use client"
import React, { useContext, useState } from 'react'

import "./assets/MainMenu.scss"
import { Arrow } from './assets/Arrow'

type Props = {
    isOpen: any,
    class:string,
    open:any,
    data:Array<any>,
    idItem:any
}

export const MainMenu = (props: Props) => {
    // const main:HTMLElement= document.querySelector("main")
    // main.style.filter = "blur(15px)"
    // main.addEventListener("click",()=>{
    //     setIsOpenedsMain(false)
    // })
    const [red, setRed] = useState(null)
    const HandleClick = (id:any,itemID:number | string )=>{
        setRed(id)
        props.isOpen(true)
        props.idItem(itemID)
    }
    return (
        <div className={props.open ? "none" : props.class}>
            <ul>
                {props.data.map((item: any,index:number) => {
                    return (
                        <li className={red === index ? "red" : ""} key={index} onClick={()=>HandleClick(index,item.id)}> {item.data}<Arrow color={red === index} /></li>
                    )
                })}
            </ul>
        </div>
    )
}