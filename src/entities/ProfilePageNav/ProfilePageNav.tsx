"use client"


import { ProfilePageNavItem } from '@/shared/ProfilePageNavItem/ProfilePageNavItem'
import React, { useState } from 'react'


import "./style.scss"

import profile from './icons/ProfileSvg.svg'
import profileDark from './icons/ProfileDarkSvg.svg'
import option from './icons/Option.svg'
import optionDark from './icons/OptionDark.svg'
import heart from './icons/Heart.svg'
import heartDark from './icons/HeartDark.svg'
import exit from './icons/Exit.svg'
import exitDark from './icons/ExitDark.svg'

type Props = {
  section:any,
  setSection:any
}

export const ProfilePageNav = (props: Props) => {
  const [DarkMode, setDarkMode] = useState(1)
  const HandleChangeAll = (id:number)=>{
    setDarkMode(id) 
    props.setSection(id)
  }
  return (
    <aside className='profile-nav'>
      <div className="profile-nav-item" onClick={()=>HandleChangeAll(1)}>
        <ProfilePageNavItem class={DarkMode === 1 ? 'profile-page-nav-item-dark-mode' : "profile-page-nav-item"} svg={DarkMode === 1 ? profile : profileDark}/>
      </div>
      <div className="profile-nav-item" onClick={()=>HandleChangeAll(2)}>
        <ProfilePageNavItem class={DarkMode === 2 ? 'profile-page-nav-item-dark-mode' : "profile-page-nav-item"}  svg={DarkMode === 2 ? option : optionDark}/>
      </div>
      <div className="profile-nav-item" onClick={()=>HandleChangeAll(3)}>
        <ProfilePageNavItem class={DarkMode === 3 ? 'profile-page-nav-item-dark-mode' : "profile-page-nav-item"} svg={DarkMode === 3 ? heart : heartDark}/>
      </div>
      <div className="profile-nav-item" onClick={()=>HandleChangeAll(4)}>
        <ProfilePageNavItem class={DarkMode === 4 ? 'profile-page-nav-item-dark-mode' : "profile-page-nav-item"} svg={DarkMode === 4 ? exit : exitDark}/>
      </div>
    </aside>
  )
}