import React from 'react'
import Image from 'next/image'

import "./Footer.scss"
import logo from "../../../public/footerLogo.svg"


type Props = {}

export const Footer = (props: Props) => {
    return (
        <footer>
            <div className="footer-head">
                <Image src={logo} alt='logo' width={110} height={110} />
                <div className="footer-text">
                    <p>Email : <br /> <span> rahim@ussat.com</span></p>
                    <p>+993 63927788 <br /> <span> Ежедневно, с 8:00 до 18:00</span></p>
                    <button>Заказать Звонок</button>
                </div>

            </div>
            <nav className='nav-footer'>
                <ul>
                    <li>Контакты</li>
                    <li>О нас</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <ul>
                    <li>Услуги</li>
                    <li>Доставка и оплата</li>
                    <li>Гарантия</li>
                </ul>
                <div className="footer-catalog">
                    <p>Каталог</p>
                    <div className='catalog-item'>
                    <ul>
                        <li>Запорные Арматуры</li>
                        <li>Запорные Арматуры</li>
                        <li>Запорные Арматуры</li>
                    </ul>
                    <ul>
                        <li>Запорные Арматуры</li>
                        <li>Запорные Арматуры</li>
                        <li>Запорные Арматуры</li>
                    </ul>
                    <ul>
                        <li>Запорные Арматуры</li>
                        <li>Запорные Арматуры</li>
                        <li>Запорные Арматуры</li>
                    </ul>
                    </div>
                </div>
            </nav>
            <p className='footer-end'>© 2023 angar.ussat.com Все права защищены.</p>
        </footer>
    )
}