import Image from 'next/image'
import React from 'react'


import "./style.scss"

type Props = {
    name:string,
    image:any
}

export const CircleCatalog = (props: Props) => {
  return (
    <div className='CircleCatalog'>
      <div className="image">
        <Image src={props.image} alt='catalog' />
      </div>
      {props.name}
    </div>
  )
}