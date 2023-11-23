"use client"

import React, { useEffect } from 'react'

import "./style.scss"
import { PageInput } from '@/shared/Inputs/PageInput'
import { Button } from '@/shared/Button/Button'
import Link from 'next/link'

type Props = {
    check: any,
    open: any
}

export const AuthModal = (props: Props) => {
    useEffect(() => {

        const main: any | HTMLElement = document.querySelector("main");
        if (props.check) {
            main.className = "modal-effect" as string
            main.addEventListener("click",()=>{
                props.open(false)
              })
        } else {
            main.classList.remove("modal-effect")
        }
    })
    return (
        <div className={props.check ? "auth-modal" : "none"}>
            <h1>Вход</h1>
            <PageInput placeholder='ff' text='Номер' number = {true} />
            <PageInput placeholder='ff' text='Имя' number = {false} />
            <Link href="/profile" className='profile-link' onClick={()=>props.open(false)}>
            <Button text='Авторизоваться'  />
            </Link>           
            <p>Нету аккаунта?</p>
        </div>
    )
}