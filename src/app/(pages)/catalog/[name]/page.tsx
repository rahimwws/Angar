import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ProductPageInfo } from '@/widgets/ProductPageInfo/ProductPageInfo'
import { SameProducts } from '@/widgets/SameProducts/SameProducts'
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
      <SameProducts/> 
    </main>
  )
}
export default ProductPage