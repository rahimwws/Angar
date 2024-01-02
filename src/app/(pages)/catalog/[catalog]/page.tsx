"use client"

import { CatalogPageNav } from '@/entities/CatalogPageNav/CatalogPageNav'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { CatalogPageProducts } from '@/widgets/CatalogPageProducts/CatalogPageProducts'
import React from 'react'
import { useAtom } from 'jotai'
import language from '@/service/language/language'
import { lang } from '@/service/language/languageID'
type Props = {}

const CatalogPage = (props: Props) => {
  const [idLang] = useAtom(lang)

  return (
    <main>
        <PageHeadInfo text={language.catalog[idLang]}/>
        <CatalogPageNav/>
        <CatalogPageProducts/>
    </main>
  )
}

export default CatalogPage