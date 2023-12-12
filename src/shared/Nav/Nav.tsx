import React from 'react'

import "./Nav.scss"
import Link from 'next/link'

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
        <li>
          <Link href="/contact">
          Контакты
          </Link>
          </li>
        
        <li>
          <Link href="/services">
          Услуги
          </Link>
          </li>
        <li onClick={()=>props.check ? props.openCatalog(false) : props.openCatalog(true)}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="9"
              viewBox="0 0 20 9"
              fill="none"
            >
              <path
                d="M1.00073 1.5H19.0007M1.00073 7.5H19.0007"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          Каталог
          </li>
      </ul>
    </nav>
  )
}

export default Nav