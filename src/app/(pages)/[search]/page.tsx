"use client"
import language from '@/service/language/language'
import { lang } from '@/service/language/languageID'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { SearchProduct } from '@/widgets/SearchProduct/SearchProduct'
import { useAtom } from 'jotai'
import React from 'react'

type Props = {}

const SearchPage = (props: Props) => {
  const [idLang] = useAtom(lang)
  return (
    <main>
        <PageHeadInfo text={language.search[idLang]}/>
        <SearchProduct />
    </main>
  )
}

export default SearchPage  