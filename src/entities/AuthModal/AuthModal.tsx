import React from 'react'

import "./style.scss"
import { PageInput } from '@/shared/Inputs/PageInput'
import { Button } from '@/shared/Button/Button'

type Props = {
    class:string
}

export const AuthModal = (props: Props) => {
    if(props.class != "none"){
    }
  return (
   <div className={props.class}>
    {/* <h1>Вход</h1>
    <PageInput placeholder='ff' text='Номер'/>
    <PageInput placeholder='ff' text='Имя'/>
    <Button text='Авторизоваться'/>
    <p>Нету аккаунта?</p> */}
   </div>
  )
}