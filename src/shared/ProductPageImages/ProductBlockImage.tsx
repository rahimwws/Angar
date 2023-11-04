import Image from 'next/image'
import React from 'react'

import image from "./assets/product.png"
import "./assets/style.scss"

type Props = {}

export const ProductBlockImage = (props: Props) => {
  return (
      <Image className='product-image-block' src={image} alt='product' width={70} height={70} />
  )
}