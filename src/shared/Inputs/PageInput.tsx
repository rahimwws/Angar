import React from 'react'

import "./Input.scss"

type Props = {
    placeholder:string,
    text:string,
    number:boolean
}

export const PageInput = (props: Props) => {
  return (
    <>
    <label htmlFor={props.text}>{props.text}</label> <br />
    <input className='page-input' type={props.number ? "number" : "text"} placeholder={props.placeholder} id={props.text}  />
    </>
  )
}