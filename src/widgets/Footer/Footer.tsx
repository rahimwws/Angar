import React from "react";
import Image from "next/image";

import "./Footer.scss";
import logo from "../../../public/footerLogo.svg";
import Link from "next/link";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer>
      <div className="footer-head">
        <Image src={logo} alt="logo" width={110} height={110} />
        <div className="footer-text">
          <p>
            Адрес : <br /> <span>41,г.Кулиев(2127)</span>
          </p>
          <Link href="tel:+99312754802">
            +993 12754802
            <br /> <span> Ежедневно, с 8:00 до 18:00</span>
          </Link>
          <button>
            {" "}
            <Link href="tel:+99312754802">Заказать Звонок</Link>
          </button>
        </div>
      </div>
      <nav className="nav-footer">
        <ul>
          <li>
            <Link href="/services">Услуги</Link>
          </li>
          <li>
            <Link href="/contact">
            Контакты
            </Link>
            </li>
        </ul>
      </nav>
      <p className="footer-end">© 2023 angar.ussat.com Все права защищены.</p>
    </footer>
  );
};
