import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ProfilePageSection } from '@/widgets/ProfilePageSection/ProfilePageSection'
import React from 'react'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <main>
        <PageHeadInfo text='Профиль'/>
        <ProfilePageSection/>
    </main>
  )
}

export default ProfilePage