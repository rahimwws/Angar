import { ServicePageItem } from '@/shared/ServicePageItem/ServicePageItem'
import React from 'react'

type Props = {}

import "./assets/style.scss"

import image1 from "./assets/image 1.png"
import image2 from "./assets/image 2.png"
import image3 from "./assets/image 3.png"
import image4 from "./assets/image 4.png"

export const ServiveSection = (props: Props) => {
  return (
    <section className='service-section'>

        <ServicePageItem image={image1}/>
        <ServicePageItem image={image2}/>
        <ServicePageItem image={image3}/>
        <ServicePageItem image={image4}/>
    </section>
  )
}