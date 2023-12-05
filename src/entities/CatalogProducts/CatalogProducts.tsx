"use client"
import { ProductCart } from '@/shared/ProductCarts/ProductCart'
import React from 'react'

type Props = {}
import "./CatalogProducts.scss"
import { useDataNew } from '@/features/Api/getProducts/getData'
import { ProductSortApi } from '@/features/ProductSortApi/ProductSortApi'


export const CatalogProducts = (props: Props) => {
  const {data} = useDataNew()
  return (
    <section className='catalog-products'>
          {data?.data.map((item: any, key: number) => {
            const includedItems = ProductSortApi(item, data?.included);

            return (
              <ProductCart
                name={item?.attributes["product.label"]}
                category={includedItems[3]}
                quantity={includedItems[2]}
                price={includedItems[1]}
                key={key}
                image={`https://angar.ussat.tm/aimeos/${includedItems[0]}`}
                sale={includedItems[4]}
              />
            );
          })}
    </section>
  )
}