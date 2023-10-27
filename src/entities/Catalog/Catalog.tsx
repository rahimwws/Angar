import { CircleCatalog } from '@/shared/CircleCatalog/CircleCatalog'
import React from 'react'


import image from "./assets/Plumbing.svg"

type Props = {}



export const Catalog = (props: Props) => {
  return (
    <div className='CatalogSectionItem'>
        <CircleCatalog name = "Сантехника" image={image}/>
        <CircleCatalog name = "Стройматериалы" image={image}/>
        <CircleCatalog name = "Электрика" image={image}/>
        <CircleCatalog name = "Котельная" image={image}/>
        <CircleCatalog name = "Вентиляция" image={image}/>
        <CircleCatalog name = "Газоснабжения" image={image}/>
        <CircleCatalog name = "Отопление" image={image}/>
        <CircleCatalog name = "Отопление" image={image}/>
        <CircleCatalog name = "Отопление" image={image}/>
        <CircleCatalog name = "Отопление" image={image}/>
    </div>
  )
}