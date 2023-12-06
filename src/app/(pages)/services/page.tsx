import { PageHeadInfo } from '@/shared/PageHeadInfo/PageHeadInfo'
import { ServiveSection } from '@/widgets/ServiceSection/ServiveSection'
import React from 'react'

type Props = {}

const ServecePage = (props: Props) => {
  return (
    <main>
        <PageHeadInfo text='Сервис'/>
        <ServiveSection/>
    </main>
  )
}

export default ServecePage