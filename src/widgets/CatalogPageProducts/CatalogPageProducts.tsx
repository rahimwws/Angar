import { CatalogFilter } from '@/entities/CatalogFilter/CatalogFilter'
import { CatalogProducts } from '@/entities/CatalogProducts/CatalogProducts'
import React from 'react'

import "./style.scss"

type Props = {}

export const CatalogPageProducts = (props: Props) => {
    return (
        <section className='catalog-page-products'>
            {/* <CatalogFilter /> */}
            <div className="catalog-page-items">
                <CatalogProducts />
            </div>
        </section>
    )
}