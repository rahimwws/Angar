import React from 'react'

import "./ProductInfo.scss"

type Props = {}

export const ProductInfo = (props: Props) => {
  return (
    <div className='product-info'>
      <div className="product-info-item">
        <p>Тип товара</p>
        <div className="line"></div>
        <span>Дрель-шуруповерт</span>
      </div>
      <div className="product-info-item">
        <p>Бренд</p>
        <div className="line"></div>
        <span>MAKITA</span>
      </div>
      <div className="product-info-item">
        <p>Назначение инструмента</p>
        <div className="line"></div>
        <span>профессиональный</span>
      </div>
      <div className="product-info-item">
        <p>Мощность (Вт)</p>
        <div className="line"></div>
        <span>18</span>
      </div>
      <div className="product-info-item">
        <p>Назначение инструмента</p>
        <div className="line"></div>
        <span>профессиональный</span>
      </div>
      <h2>Больше характеристик</h2>
    </div>
  )
}