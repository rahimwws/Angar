import { CatalogFilter } from '@/entities/CatalogFilter/CatalogFilter'
import { CatalogPageNav } from '@/entities/CatalogPageNav/CatalogPageNav'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import React from 'react'

type Props = {}

const CatalogPage = (props: Props) => {
  return (
    <main>
        <PageHeadInfo/>
        <CatalogPageNav/>
        <CatalogFilter/>
    </main>
  )
}

export default CatalogPage