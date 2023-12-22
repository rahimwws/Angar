
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { SearchProduct } from '@/widgets/SearchProduct/SearchProduct'
import React from 'react'

type Props = {}

const SearchPage = (props: Props) => {
  return (
    <main>
        <PageHeadInfo text='Поиск'/>
        <SearchProduct />
    </main>
  )
}

export default SearchPage  