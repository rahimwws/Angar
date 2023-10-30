import React from 'react'

import "./Input.scss"

type Props = {
    placeholder:string,
    text:string,
}

export const PageInput = (props: Props) => {
  return (
    <>
    <label htmlFor={props.text}>{props.text}</label> <br />
    <input className='page-input' type="text" placeholder="Напишите свое имя" id={props.text} />
    </>
  )
}