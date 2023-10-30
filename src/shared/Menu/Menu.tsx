"use client"

import React, { useEffect } from 'react'
import "./assets/MainMenu.scss"
type Props = {
  class: string,
  close: any
}

export const Menu = (props: Props) => {
  useEffect(()=>{
  },[])
  const CloseMenu = () => {
    props.close(false)
  }



  const items = ["Вибротехника и комплектующие", "Вибротехника и комплектующие", "Вибротехника и комплектующие", "Вибротехника и комплектующие", "Вибротехника и комплектующие", "Вибротехника и комплектующие", "Вибротехника и комплектующие", "Вибротехника и комплектующие", "Вибротехника и комплектующие",]
  return (
    <div className={props.class}>
      <ul>
        {items.map((item: string, index) => {
          return (
            <li key={index} onClick={CloseMenu} >{item}</li>
          )
        })}
      </ul>
    </div>

  )
}