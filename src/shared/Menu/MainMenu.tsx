"use client"
import React, { useContext, useState } from 'react'

import "./assets/MainMenu.scss"
import { Arrow } from './assets/Arrow'
import { useRouter } from 'next/navigation'

type Props = {
    isOpen: any,
    class:string,
    open:any,
    data:Array<any>,
    idItem:any,
    close:any
}

export const MainMenu = (props: Props) => {
    const router = useRouter()
    const [red, setRed] = useState(null)
    const HandleClick = (id:any,itemID:number | string ,children:Array<any>)=>{
        setRed(id)
        props.isOpen(true)
        props.idItem(itemID)
        if(!children.length){
            router.push(`/catalog/${itemID}`)
            props.close(false)
        }
    }
    
    return (
        <div className={props.open ? "none" : props.class}>
            <ul>
                {props.data.map((item: any,index:number) => {
                    return (
                        <li className={red === index ? "red" : ""} key={index} onClick={()=>HandleClick(index,item.id,item.children)}> {item.data}<Arrow color={red === index} /></li>
                    )
                })}
            </ul>
        </div>
    )
}