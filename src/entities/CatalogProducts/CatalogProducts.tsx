import { ProductCart } from '@/shared/ProductCarts/ProductCart'
import React from 'react'

type Props = {}
import "./CatalogProducts.scss"


export const CatalogProducts = (props: Props) => {
  return (
    <section className='catalog-products'>
        <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54}  price={22200}/>
        <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54}  price={22200}/>
        <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54}  price={22200}/>
        <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54}  price={22200}/>
    </section>
  )
}