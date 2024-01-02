"use client"

import { BasketTable } from '@/entities/BasketTable/BasketTable'
import language from '@/service/language/language'
import { lang } from '@/service/language/languageID'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { BasketItems } from '@/widgets/BasketItems/BasketItems'
import { RecommendedSection } from '@/widgets/HomeProductSections/RecommendedSection'
import { SameProducts } from '@/widgets/SameProducts/SameProducts'
import { useAtom } from 'jotai'
import React from 'react'

type Props = {}

const CartPage = (props: Props) => {
  const [idLang] = useAtom(lang)

  return (
   <main>
    <PageHeadInfo text={language.cart[idLang]}/>
    <BasketItems/>
    <SameProducts/>
   </main>
  )
}

export default CartPage