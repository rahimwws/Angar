"use client"
import { useDetail } from '@/features/Api/getDetail/useDetail'
import { DetailSort } from '@/features/DetailSort/DetailSort'
import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ProductPageInfo } from '@/widgets/ProductPageInfo/ProductPageInfo'
import { SameProducts } from '@/widgets/SameProducts/SameProducts'
import React from 'react'

type Props = {
  params:{
    name:number
  }
}
const ProductPage = ({params}:Props) => {
  const {data} = useDetail(params.name)
  let item:Array<any> = []
  if(data){
    item = DetailSort(data)
  }
  return (
    <main>
      <PageHeadInfo text={item[9]}/>
      <ProductPageInfo/>
      <SameProducts/> 
    </main>
  )
}
export default ProductPage