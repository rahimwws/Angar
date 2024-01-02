import React from 'react'

import "./Nav.scss"
import Link from 'next/link'
import language from '@/service/language/language'
import { useAtom } from 'jotai'
import { lang } from '@/service/language/languageID'

type Props = {
  check:any,
  openCatalog:any
}

const Nav = (props: Props) => {
  const [idLang] = useAtom(lang)
  return (
    <nav className='header-nav'>
      <ul>
        <li>
          <Link href="/contact">
          {language.contacts[idLang]}
          </Link>
          </li>
        
        <li>
          <Link href="/services">
          {language.services[idLang]}
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
          {language.catalog[idLang]}
          </li>
      </ul>
    </nav>
  )
}

export default Nav