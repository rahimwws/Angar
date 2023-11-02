import { CatalogPageNav } from '@/entities/CatalogPageNav/CatalogPageNav'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
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
    </main>
  )
}
export default ProductPage