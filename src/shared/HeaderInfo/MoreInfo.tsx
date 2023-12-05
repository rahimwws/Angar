import Link from 'next/link'
import React from 'react'

type Props = {
    close: any
}

export const MoreInfo = (props: Props) => {
    return (
        <div className='more-info'>
            <div className="more-info-head">
                <p>Меню</p>
                <button onClick={() => props.close(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
                        <path d="M7.5 0.5L0.5 7.5M0.5 0.5L7.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="more-info-content">
                <div className="more-info-items">
                    <ul>
                        <li>О компании</li>
                        <li onClick={()=>props.close(false)}>
                            <Link href="/services">
                            Услиги
                            </Link>
                        </li>
                        <li>Политика Конфиденциальности</li>
                        <li>Каталог</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="more-info-assets">
                    <Link href="tel:+99363927788">8 800 444 00 65</Link>
                    <button>Заказать звонок</button>
                </div>
            </div>
            <p>Ежедневно, с 8:00 до 18:00</p>
        </div>
    )
}