"use client"
import { AboutProduct } from '@/entities/AboutProduct/AboutProduct'
import { ProductPageMain } from '@/entities/ProductPageMain/ProductPageMain'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

export const ProductPageInfo = (props: Props) => {

  
  return (
    <section>
        <ProductPageMain/>
        <AboutProduct/>
    </section>
  )
}