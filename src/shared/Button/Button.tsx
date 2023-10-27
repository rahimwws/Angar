import React from 'react'
import "./Button.scss"

type Props = {
    text:string
}

export const Button = (props: Props) => {
  return (
    <button className='button'>{props.text}</button>
  )
}