
import { CatalogPageNav } from '@/entities/CatalogPageNav/CatalogPageNav'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { CatalogPageProducts } from '@/widgets/CatalogPageProducts/CatalogPageProducts'
import React from 'react'

type Props = {}

const CatalogPage = (props: Props) => {
  return (
    <main>
        {/* <PageHeadInfo text='Каталог'/> */}
        <CatalogPageNav/>
        <CatalogPageProducts/>
    </main>
  )
}

export default CatalogPage