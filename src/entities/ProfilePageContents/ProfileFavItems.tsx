import { ProductCart } from '@/shared/ProductCarts/ProductCart'
import React from 'react'

type Props = {}

export const ProfileFavItems = (props: Props) => {
  return (
    <div className='profile-fav'>
      <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54} price={22200} image={""} />
      <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54} price={22200} image={""} />
      <ProductCart name='Ниппель оцинкованный DN 15 (1/2")' category='Сантехника' quantity={54} price={22200} image={""} />
    </div>
  )
}