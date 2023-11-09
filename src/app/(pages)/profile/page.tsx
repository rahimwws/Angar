import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ProfilePageSection } from '@/widgets/ProfilyPageSection/ProfilePageSection'
import React from 'react'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <main>
        <PageHeadInfo/>
        <ProfilePageSection/>
    </main>
  )
}

export default ProfilePage