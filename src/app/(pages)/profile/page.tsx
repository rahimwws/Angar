"use client"

import language from '@/service/language/language'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ProfilePageSection } from '@/widgets/ProfilePageSection/ProfilePageSection'
import React from 'react'
import { useAtom } from 'jotai'
import { lang } from '@/service/language/languageID'
type Props = {}

const ProfilePage = (props: Props) => {
  const [idLang] = useAtom(lang)

  return (
    <main>
        <PageHeadInfo text={language.catalog[idLang]}/>
        <ProfilePageSection/>
    </main>
  )
}

export default ProfilePage