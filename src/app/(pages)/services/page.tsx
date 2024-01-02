"use client"
import { useAtom } from 'jotai'
import language from '@/service/language/language'
import { lang } from '@/service/language/languageID'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ServiceSection } from '@/widgets/ServiceSection/ServiceSection'
import React from 'react'

type Props = {}

const ServicePage = (props: Props) => {
  const [idLang] = useAtom(lang)

  return (
    <main>
        <PageHeadInfo text={language.services[idLang]}/>
        <ServiceSection/>
    </main>
  )
}

export default ServicePage