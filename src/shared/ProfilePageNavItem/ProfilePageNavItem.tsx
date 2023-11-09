"use client"

import React, { useState } from 'react'

import "./style.scss"
import Image from 'next/image'

type Props = {
    class:string,
    svg:any,
}

export const ProfilePageNavItem = (props: Props) => {

    return (
        <div className={props.class} >
             <Image src={props.svg} alt='' />
            <p>Изменить профиль</p>
        </div>
    )
}