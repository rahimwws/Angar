"use client"

import React from 'react'

type Props = {}

import "./style.scss"
import { BasketTable } from '@/entities/BasketTable/BasketTable'
import { BasketPrice } from '@/entities/BasketPrice/BasketPrice'

export const BasketItems = (props: Props) => {
  return (
    <section className='basket-items'>
        <BasketTable/>
        <BasketPrice/>
    </section>
  )
}