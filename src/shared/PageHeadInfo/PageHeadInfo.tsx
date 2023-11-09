import React from 'react'

import "./style.scss"
import { Arrow } from './assets/Arrow'

type Props = {}

export const PageHeadInfo = (props: Props) => {
  return (
    <section className='page-head-info'>
        <h1>Стройматериалы</h1>
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