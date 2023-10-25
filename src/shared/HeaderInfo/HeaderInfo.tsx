import React from "react";

import "./styles/style.scss";

import time from "./assets/icons/time.svg";
import location from "./assets/icons/location.svg";
import Image from "next/image";
import { Language } from "./assets/svg/language";
import { Call } from "./assets/svg/Call";
import { Currency } from "./assets/svg/Currency";

type Props = {};
export const HeaderInfo = (props: Props) => {
  return (
    <div className="header-info">
      <div className="no-action row">
        <span className="time">
          <Image src={time} alt="time" />
          <p>8:00-19:00</p>
        </span>
        <span className="location">
          <Image src={location} alt="location" />
          <p>г. Ашхабад,Г. Кулиев(2127),41</p>
        </span>
      </div>
      <div className="action row">
        <span className="number">
          <Call />
          <p>+993 12 751200</p>
        </span>
        <span className="currency">
          <Currency/>
          <p>USD</p>
        </span>
        <span className="language">
          <Language />
          <p>Русский</p>
        </span>
      </div>
    </div>
  );
};
