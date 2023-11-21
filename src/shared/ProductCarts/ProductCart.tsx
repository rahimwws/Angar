import React from 'react'
import Image from 'next/image'

import "./ProductCart.scss"
import image from "./assets/Rectangle 2.jpg"
import { Heart } from './assets/Heart'
import { Star } from './assets/Star'
import { Button } from '../Button/Button'
import Link from 'next/link'

type Props = {
    name: string,
    category: string,
    quantity: number,
    price: number,
    image:any
}

export const ProductCart = (props: Props) => {
    return (
        <Link href="/catalog/name">
            <div className='product-cart'>
                <div className="head">
                    <div className="sale">10% off</div>
                    <Heart />
                </div>
                <Image src={props.image} alt='product' width={200} height={200} />
                <div className="quantity">
                    <p>Количество: <span>{props.quantity}</span></p>
                </div>
                <div className="info">
                    <p>{props.category}</p>
                    <p>{props.name}</p>
                    <div className="stars">
                        <Star />
                    </div>
                </div>
                <div className="prices">
                    <div className="text">
                        <p>3333 TMT</p>
                        <p>{props.price} TMT</p>
                    </div>
                    <Button text='Add +' />
                </div>
            </div>
        </Link>
    )
}