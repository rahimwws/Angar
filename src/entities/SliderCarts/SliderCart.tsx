import { ProductCart } from '@/shared/ProductCarts/ProductCart'
import React from 'react'

type Props = {}

import "./SliderCart.scss"

export const SliderCart = (props: Props) => {
  return (
    <>
        <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54}  price={22200}/>
    </>
  )
}