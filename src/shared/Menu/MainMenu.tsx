"use client"
import React, { useContext, useState } from 'react'

import "./assets/MainMenu.scss"
import { Arrow } from './assets/Arrow'

type Props = {
    isOpen: any,
    class:string
}

export const MainMenu = (props: Props) => {
    // const main:HTMLElement= document.querySelector("main")
    // main.style.filter = "blur(15px)"
    // main.addEventListener("click",()=>{
    //     setIsOpenedsMain(false)
    // })
    const items: any = ["Водо-газоснабжение", "Водо-газоснабжение", "Общестроительные материалы", "Всё для сауны и бани", "Инструмент", "Общестроительные материалы", "Общестроительные материалы", "Всё для сауны и бани", "Инструмент",]
    const [red, setRed] = useState(null)
    const HandleClick = (id:any)=>{
        setRed(id)
        props.isOpen(true)
    }
    return (
        <div className={props.class}>
            <ul>
                {items.map((item: string,index:number) => {
                    return (
                        <li className={red === index ? "red" : ""} key={index} onClick={()=>HandleClick(index)}> {item}<Arrow color={red === index} /></li>
                    )
                })}
            </ul>
        </div>
    )
}