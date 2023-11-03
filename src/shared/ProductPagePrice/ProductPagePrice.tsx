"use client"
import React, { useState } from 'react'
import { Button } from '../Button/Button'

type Props = {}
import "./style.scss"

export const ProductPagePrice = (props: Props) => {
  const [quantity, setquantity] = useState(1)
  return (
    <div className='product-page-about'>
      <div className='product-page-price'>
        <span className="price-id">Артикул: XJ89YHGO</span>
        <div className="price">
          <h1>17000 tmt</h1>
          <p>18800 TMT</p>
          <div className="sale"><p>10% off</p></div>
        </div>
        <div className="quantity">
          <p>Количество:</p>
          <div className="quantity-buttons">
            <button onClick={() => setquantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setquantity(quantity + 1)}>+</button>
          </div>
        </div>
        <Button text='Add +' />
      </div>
      <div className="product-assets">
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path d="M11 2H19M11 6H16M11 12H19M11 16H16M1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6C6.26522 1 6.51957 1.10536 6.70711 1.29289C6.89464 1.48043 7 1.73478 7 2V6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7H2C1.73478 7 1.48043 6.89464 1.29289 6.70711C1.10536 6.51957 1 6.26522 1 6V2ZM1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11H6C6.26522 11 6.51957 11.1054 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12V16C7 16.2652 6.89464 16.5196 6.70711 16.7071C6.51957 16.8946 6.26522 17 6 17H2C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16V12Z" stroke="#9BA4AB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Большой выбор товаров в каталоге</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M17 5.5L9 1L1 5.5M17 5.5V14.5L9 19M17 5.5L9 10M9 19L1 14.5V5.5M9 19V10M1 5.5L9 10M5.2 7.8L12.8 3.2" stroke="#9BA4AB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Осуществляем быструю доставку</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 13L13 7M8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5ZM13 12.5C13 12.7761 12.7761 13 12.5 13C12.2239 13 12 12.7761 12 12.5C12 12.2239 12.2239 12 12.5 12C12.7761 12 13 12.2239 13 12.5ZM1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z" stroke="#9BA4AB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Делаем скидки на крупные покупки</p>
          </li>
        </ul>
      </div>
    </div>
  )
}