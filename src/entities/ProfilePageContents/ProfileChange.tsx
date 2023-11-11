import React from 'react'

import "./styles/ProfileChange.scss"
import { PageInput } from '@/shared/Inputs/PageInput'
import { Button } from '@/shared/Button/Button'

type Props = {}

export const ProfileChange = (props: Props) => {
  return (
    <div className='profile-change'>
      <PageInput placeholder='Введите ваш Email' text='Email *' number = {false}/>
      <PageInput placeholder='Введите ваш данные' text='ФИО *' number = {false}/>
      <PageInput placeholder='+993 ( ) -  - ' text='Номер телефона *' number = {true}/>
      <PageInput placeholder='Введите ваш Адрес' text='Адрес *' number = {false}/>
      <Button text='Сохранить ваши изменения'/>
    </div>
  )
}