import React from 'react'

import "./Input.scss"
type Props = {
  placeholder:string
}

const Input = (props: Props) => {
  return (
    <input type="text" className='input' placeholder={props.placeholder}/>
  )
}

export default Input