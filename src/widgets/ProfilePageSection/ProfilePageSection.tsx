"use client"
import React, { useState } from 'react'
import "./style.scss"


import { ProfileChange } from '@/entities/ProfilePageContents'
import { ProfileOrderedItems } from '@/entities/ProfilePageContents'

import { ProfilePageNav } from '@/entities/ProfilePageNav/ProfilePageNav'
import { ProfileFavItems } from '@/entities/ProfilePageContents/ProfileFavItems'


type Props = {}

export const ProfilePageSection = (props: Props) => {
  const [section, setSection] = useState(1)
  return (
    <section className='profile-page-section'>
      <ProfilePageNav section={section} setSection={setSection} />
      {section === 1 ? <ProfileChange /> : section === 2 ? <ProfileOrderedItems/> : section ===3  ? <ProfileFavItems/>:<></>}
    </section>
  )
}