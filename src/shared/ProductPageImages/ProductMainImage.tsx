import React from 'react'

import image from "./assets/product.png"
import Image from 'next/image'

type Props = {}

export const ProductMainImage = (props: Props) => {
  return (
      <Image src={image} alt='product' width={300} />
  )
}