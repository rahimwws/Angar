"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react";

import "./CatalogSection.scss"
import { Catalog } from '@/entities/Catalog/Catalog'
import { MobileCatalog } from '@/entities/Catalog/mobileCatalog';

type Props = {}



export const CatalogSection = (props: Props) => {

    const [Current, setCurrent] = useState(true)
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev()
            setCurrent(true)
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
            setCurrent(false)
        }
    }, [emblaApi]);

    return (
        <section className='catalog-section'>
            <div className='CatalogSlider'>
                <div className="CatalogViewport" ref={emblaRef}>
                    <div className="CatalogContainer">
                        <Catalog end={8} begin={0}/>
                        <MobileCatalog end={8} begin={0}/>
                    </div>
                </div>
                <div className="assets">
                    <button className="CatalogPrev" onClick={scrollPrev}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="24"
                            viewBox="0 0 14 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.0668 23.649C12.5882 24.117 11.8141 24.117 11.3367 23.649L1.21697 13.7327C0.990443 13.5141 0.810069 13.2511 0.686814 12.9595C0.56356 12.6679 0.5 12.3539 0.5 12.0366C0.5 11.7193 0.56356 11.4053 0.686814 11.1137C0.810069 10.8222 0.990443 10.5591 1.21697 10.3405L11.41 0.350993C11.6413 0.127741 11.9477 0.00225887 12.2668 3.02012e-05C12.5859 -0.00219846 12.894 0.118994 13.1283 0.338994C13.2444 0.447636 13.3373 0.57932 13.4012 0.725889C13.4651 0.872458 13.4987 1.03079 13.5 1.19109C13.5012 1.35138 13.47 1.51023 13.4083 1.65778C13.3466 1.80533 13.2557 1.93846 13.1413 2.04891L3.8122 11.1888C3.69884 11.2981 3.60857 11.4297 3.54689 11.5756C3.48521 11.7214 3.4534 11.8785 3.4534 12.0372C3.4534 12.1959 3.48521 12.353 3.54689 12.4988C3.60857 12.6447 3.69884 12.7763 3.8122 12.8856L13.0668 21.9535C13.1802 22.0627 13.2704 22.1942 13.3321 22.3399C13.3938 22.4857 13.4256 22.6426 13.4256 22.8013C13.4256 22.9599 13.3938 23.1169 13.3321 23.2626C13.2704 23.4083 13.1802 23.5398 13.0668 23.649Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                    <p className={Current ? "Current" : ""}>1</p>
                    <p className={Current ? "" : "Current"}>2</p>
                    <button className="CatalogNext" onClick={scrollNext}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="24"
                            viewBox="0 0 14 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.933152 23.649C1.41178 24.117 2.18586 24.117 2.6633 23.649L12.783 13.7327C13.0096 13.5141 13.1899 13.2511 13.3132 12.9595C13.4364 12.6679 13.5 12.3539 13.5 12.0366C13.5 11.7193 13.4364 11.4053 13.3132 11.1137C13.1899 10.8222 13.0096 10.5591 12.783 10.3405L2.59003 0.350993C2.3587 0.127741 2.05235 0.00225887 1.7332 3.02012e-05C1.41405 -0.00219846 1.10603 0.118994 0.871698 0.338994C0.755612 0.447636 0.662729 0.57932 0.598798 0.725889C0.534868 0.872458 0.501253 1.03079 0.500034 1.19109C0.498816 1.35138 0.53002 1.51023 0.591714 1.65778C0.653408 1.80533 0.744278 1.93846 0.858698 2.04891L10.1878 11.1888C10.3012 11.2981 10.3914 11.4297 10.4531 11.5756C10.5148 11.7214 10.5466 11.8785 10.5466 12.0372C10.5466 12.1959 10.5148 12.353 10.4531 12.4988C10.3914 12.6447 10.3012 12.7763 10.1878 12.8856L0.933152 21.9535C0.819829 22.0627 0.729585 22.1942 0.667916 22.3399C0.606247 22.4857 0.574444 22.6426 0.574444 22.8013C0.574444 22.9599 0.606247 23.1169 0.667916 23.2626C0.729585 23.4083 0.819829 23.5398 0.933152 23.649Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}