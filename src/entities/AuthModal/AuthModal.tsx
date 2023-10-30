"use client"

import React, { useEffect } from 'react'

import "./style.scss"
import { PageInput } from '@/shared/Inputs/PageInput'
import { Button } from '@/shared/Button/Button'

type Props = {
    check: any,
    open: any
}

export const AuthModal = (props: Props) => {

    useEffect(() => {

        const main: any | HTMLElement = document.querySelector("main");
        if (props.check) {
            main.className = "blur" as string
        } else {
            main.classList.remove("blur")
        }
    })
    return (
        <div className={props.check ? "auth-modal" : "none"}>
            <h1>Вход</h1>
            <PageInput placeholder='ff' text='Номер' />
            <PageInput placeholder='ff' text='Имя' />
            <Button text='Авторизоваться' />
            <p>Нету аккаунта?</p>
        </div>
    )
}