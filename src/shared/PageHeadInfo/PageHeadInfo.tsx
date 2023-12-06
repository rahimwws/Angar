import React from 'react'

import "./style.scss"
import { Arrow } from './assets/Arrow'

type Props = {
  text:string
}

export const PageHeadInfo = (props: Props) => {
  return (
    <section className='page-head-info'>
        <h1>{props.text}</h1>
        <span>
            <p>Главная</p>
            <Arrow />
            <p>Каталог</p>
            <Arrow />
            <p>Стройматериалы</p>
        </span>
        
    </section>
  )
}