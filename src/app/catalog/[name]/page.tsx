import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ProductPageInfo } from '@/widgets/ProductPageInfo/ProductPageInfo'
import React from 'react'

type Props = {
  params:{
    slug:string
  }
}

const ProductPage = ({params}:Props) => {
  return (
    <main>
      <PageHeadInfo/>
      <ProductPageInfo/>
    </main>
  )
}
export default ProductPage