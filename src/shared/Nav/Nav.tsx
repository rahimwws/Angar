import React from 'react'

import "./Nav.scss"

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
      <ul>
        <li>Компания</li>
        <li>Контакт</li>
        <li>Услуги</li>
        <li>Каталог</li>
      </ul>
    </nav>
  )
}

export default Nav