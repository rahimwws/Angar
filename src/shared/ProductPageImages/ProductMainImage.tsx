import React from 'react'

import image from "./assets/product.png"
import Image from 'next/image'

type Props = {
  url:string
}

export const ProductMainImage = (props: Props) => {
  return (
      <Image src={props.url} alt='product' width={300}  height={300} />
  )
}