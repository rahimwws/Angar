import { ProfilePageOrderedItem } from '@/shared/ProfilePageOrderedItem/ProfilePageOrderedItem'
import React from 'react'

type Props = {}

export const ProfileOrdered = (props: Props) => {
  return (
    <div className='profile-ordered'>
      <div className="profile-ordered-head">
        <p>Номер</p>
        <p>Дата</p>
        <p>Итог</p>
      </div>
      <div className="profile-ordered-items">
        <ProfilePageOrderedItem />
        <ProfilePageOrderedItem />
        <ProfilePageOrderedItem />
        <ProfilePageOrderedItem />
      </div>
    </div>
  )
}