import React from 'react'

import "./Nav.scss"

type Props = {
  check:any,
  openCatalog:any
}

const Nav = (props: Props) => {
  const HandleClick  = ()=>{

  }
  return (
    <nav className='header-nav'>
      <ul>
        <li>Компания</li>
        <li>Контакт</li>
        <li>Услуги</li>
        <li onClick={()=>props.check ? props.openCatalog(false) : props.openCatalog(true)}>Каталог</li>
      </ul>
    </nav>
  )
}

export default Nav