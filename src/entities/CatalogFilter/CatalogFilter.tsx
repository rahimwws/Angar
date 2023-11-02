"use client"

import React, { useState } from 'react'

import "./style.scss"
import { CatalogArrow } from '../CatalogPageNav/assets/Arrow'

type Props = {}

export const CatalogFilter = (props: Props) => {
    const [MaxValue, setMaxValue] = useState('200000')
    const [MinValue, setMinValue] = useState('500')

    const [isOpenId, setIsOpenId] = useState(0)

    const HandleChangeMax = (event: any) => {
        setMaxValue(event.target.value)
    }
    const HandleChangeMin = (event: any) => {
        setMinValue(event.target.value)
    }

    return (
        <div className='catalog-filter'>
            <h2>Фильтр товаров</h2>
            <div className="price-slider">
                <span className='catalog-name'>
                    <p>Цена</p>
                    <span className='catalog-arrow' onClick={() =>isOpenId!= 1 ?  setIsOpenId(1) :  setIsOpenId(0)}  >
                        <CatalogArrow />
                    </span>
                </span>
                <div className={isOpenId === 1 ? "blocks" : "none"}>
                    <input className="price-block" value={MinValue} onChange={HandleChangeMin} />
                    <input className="price-block" value={MaxValue} onChange={HandleChangeMax} />

                </div>
                <div className="catalog-slider-container">

                    <input type="range" className='slider' value={MinValue} max="200000" step="1000" min="500" onChange={HandleChangeMin} />
                    <input type="range" className='slider' value={MaxValue} max="200000" step="0" min="500" onChange={HandleChangeMax} />
                </div>
            </div>
            <div className="more-filter">
                <span className='catalog-name'>
                    <p>Категории</p>
                    <span className='catalog-arrow' onClick={() =>isOpenId!= 2 ?  setIsOpenId(2) :  setIsOpenId(0)}>
                        <CatalogArrow />

                    </span>
                </span>
                <div className={isOpenId === 2 ? "filter-items" : "none"}>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                </div>
            </div>
            <div className="more-filter">
                <span className='catalog-name'>
                    <p>Категории</p>
                    <span className='catalog-arrow' onClick={() =>isOpenId!= 3 ?  setIsOpenId(3) :  setIsOpenId(0)}>
                        <CatalogArrow />

                    </span>
                </span>
                <div className={isOpenId === 3 ? "filter-items" : "none"}>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                    <div className="item">
                        <input type="checkbox" />
                        <p>Плитка</p>
                    </div>
                </div>
            </div>
        </div>
    )
}