import React from 'react'

import Image from 'next/image'

import "./assets/style.scss"

type Props = {
  url:string
}

export const ProductMainImage = (props: Props) => {
  return (
      <Image src={props.url} alt='product' width={300}  height={300} className='main-image' />
  )
}