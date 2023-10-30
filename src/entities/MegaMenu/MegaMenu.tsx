"use client"

import { MainMenu } from '@/shared/Menu/MainMenu'
import { Menu } from '@/shared/Menu/Menu'
import React, { useState } from 'react'

import "./MegaMenu.scss"
import { NoMain } from '@/shared/Menu/NoMain'

type Props = {
    isOpen:any,
    close:any
}

export const MegaMenu = (props: Props) => {
    const [isOpenedNoMain, setIsOpenedsNoMain] = useState(false)
    const [isOpenedInfo, setIsOpenedsInfo] = useState(false)
    return (
            <div className={props.isOpen? "mega-menu" : "none"}>
                <div className="menu-catalog">
                    <div>
                        <MainMenu class={props.isOpen ? "main-menu" : "none"} isOpen={setIsOpenedsNoMain} />
                    </div>
                    <div>
                        <NoMain class={isOpenedNoMain ? "main-menu" : "none"} isOpen={setIsOpenedsInfo} />
                    </div>
                    <div>
                        <Menu class={isOpenedInfo ? "items" : "none"} close = {props.close} />
                    </div>
                </div>
            </div>
    )
}