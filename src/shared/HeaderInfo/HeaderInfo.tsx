"use client";
import React, { useEffect, useState } from "react";
import "./styles/style.scss";

import time from "./assets/icons/time.svg";
import location from "./assets/icons/location.svg";
import Image from "next/image";

import { Language } from "./assets/svg/Language";
import { Call } from "./assets/svg/Call";
import { Currency } from "./assets/svg/Currency";
import { ChangeLanguage } from "@/features/ChangeLanguage/ChangeLanguage";
import { ChangeCurrency } from "@/features/ChangeCurrency/ChangeCurrency";
import Link from "next/link";
import { MoreInfo } from "./MoreInfo";

type Props = {};
export const HeaderInfo = (props: Props) => {
  const [idLang, setIdLang] = useState<number>(0);
  const [idCurrency, setIdCurrency] = useState<number>(0);
  const [isMoreInfo, setIsMoreInfo] = useState(false)
  const language = ["Русский", "English", "Turkmence"];
  const currency = ["USD", "TMT"];
  useEffect(() => {

    const main: any | HTMLElement = document.querySelector("main");
    if (isMoreInfo) {
      main.className = "modal-effect" as string
      main.addEventListener("click", () => {
        setIsMoreInfo(!isMoreInfo)
      })
    } else {
      main.classList.remove("modal-effect")
    }
  })
  return (
    <>
      <div className="header-info">
        <div className="no-action row">
          <span className="time">
            <Image src={time} alt="time" />
            <p>8:00-19:00</p>
          </span>
          <span className="location">
            <Image src={location} alt="location" />
            <p>г. Ашхабад,Г. Кулиев{"(2127)"},41</p>
          </span>
        </div>
        <div className="header-info-navbar" onClick={() => setIsMoreInfo(!isMoreInfo)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M1.00073 1H15.0007M1.00073 7H15.0007M1.00073 13H15.0007" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="action row">
          <span className="number">
            <Call />
            <Link href="tel:+99312751200">+993 12 751200</Link>
          </span>
          <span
            className="currency"
            onClick={() => setIdCurrency(ChangeCurrency(idCurrency))}
          >
            <Currency />
            <p>{currency[idCurrency]}</p>
          </span>
          <span
            className="language"
            onClick={() => setIdLang(ChangeLanguage(idLang))}
          >
            <Language />
            <p>{language[idLang]}</p>
          </span>
        </div>
      </div>
      {isMoreInfo?(
        <MoreInfo close={setIsMoreInfo}></MoreInfo>
      ):(
        <></>
      )}
    </>
  );
};
