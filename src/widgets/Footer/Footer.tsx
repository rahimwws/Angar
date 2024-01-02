"use client"
import React from "react";
import Image from "next/image";

import "./Footer.scss";
import logo from "../../../public/footerLogo.svg";
import Link from "next/link";
import language from "@/service/language/language";
import { useAtom } from "jotai";
import { lang } from "@/service/language/languageID";

type Props = {};

export const Footer = (props: Props) => {
  const [idLang] = useAtom(lang)
  return (
    <footer>
      <div className="footer-head">
        <Image src={logo} alt="logo" width={110} height={110} />
        <div className="footer-text">
          <p>
            {language.address[idLang]}
          </p>
          <Link href="tel:+99312754802">
            +993 12754802
            <br /> <span> {language.time[idLang]}</span>
          </Link>
          <button>
            {" "}
            <Link href="tel:+99312754802">{language.call[idLang]}</Link>
          </button>
        </div>
      </div>
      <nav className="nav-footer">
        <ul>
          <li>
            <Link href="/services">{language.services[idLang]}</Link>
          </li>
          <li>
            <Link href="/contact">
            {language.contacts[idLang]}
            </Link>
            </li>
        </ul>
      </nav>
      <p className="footer-end">© 2024 angar.ussat.com</p>
    </footer>
  );
};
