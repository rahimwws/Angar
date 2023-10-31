import React from 'react'

import "./style.scss"
import { CatalogBlock } from '@/shared/CatalogBlock/CatalogBlock'
import { CatalogArrow } from './assets/Arrow'
import { CatalogFormList } from './assets/FormList'
type Props = {}

export const CatalogPageNav = (props: Props) => {
    return (
        <div className='catalog-page-nav'>
            <div className="catalog-blocks">
                <CatalogBlock />
                <CatalogBlock />
                <CatalogBlock />
                <CatalogBlock />
                <CatalogBlock />
            </div>
            <div className="catalog-sort">
                <p>Сортировать по <CatalogArrow/></p>
                <CatalogFormList/>
            </div>
        </div>
    )
}