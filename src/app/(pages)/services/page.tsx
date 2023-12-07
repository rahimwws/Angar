import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ServiceSection } from '@/widgets/ServiceSection/ServiceSection'
import React from 'react'

type Props = {}

const ServecePage = (props: Props) => {
  return (
    <main>
        <PageHeadInfo text='Сервис'/>
        <ServiceSection/>
    </main>
  )
}

export default ServecePage