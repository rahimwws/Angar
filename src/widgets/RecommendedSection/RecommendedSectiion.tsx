"use client"

import React, { useCallback } from 'react'

import "./style.scss"
import { SliderCart } from '@/entities/SliderCarts/SliderCart'
import useEmblaCarousel from 'embla-carousel-react'
import { ProductCart } from '@/shared/ProductCarts/ProductCart'

type Props = {}

export const RecommendedSectiion = (props: Props) => {
    const items = [];

    for (let i = 0; i < 10; i++) {
        items.push(<SliderCart key={i} />);
    }
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev()
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
        }
    }, [emblaApi]);

    return (
        <section className='recommended-section'>
            <div className="recommended-text">
                <h1>Рекомендуемые товары</h1>
                <p>Все <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M0.926802 6.00906L14.3102 6.00346M14.3102 6.00346L9.28944 1.23771M14.3102 6.00346L9.29344 10.7734" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg></p>
            </div>
            <div className="recommended-viewport" ref={emblaRef}>
                <div className="recommended-container">
                    {items}
                </div>
            </div>

        </section>

    )
}