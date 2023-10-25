import React from 'react'

import "./Input.scss"
type Props = {}

const Input = (props: Props) => {
  return (
    <input type="text" className='input' placeholder='Поиск' />
  )
}

export default Input