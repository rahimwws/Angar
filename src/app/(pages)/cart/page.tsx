import { BasketTable } from '@/entities/BasketTable/BasketTable'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { BasketItems } from '@/widgets/BasketItems/BasketItems'
import { RecommendedSectiion } from '@/widgets/RecommendedSection/RecommendedSection'
import { SameProducts } from '@/widgets/SameProducts/SameProducts'
import React from 'react'

type Props = {}

const CartPage = (props: Props) => {
  return (
   <main>
    <PageHeadInfo/>
    <BasketItems/>
    <SameProducts/>
   </main>
  )
}

export default CartPage