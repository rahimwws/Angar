import language from "@/service/language/language";
import { lang } from "@/service/language/languageID";
import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";

type Props = {
  close: any;
};

export const MoreInfo = (props: Props) => {
  const [idLang] = useAtom(lang)
  return (
    <div className="more-info">
      <div className="more-info-head">
        <p>{language.menu[idLang]}</p>
        <button onClick={() => props.close(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              d="M7.5 0.5L0.5 7.5M0.5 0.5L7.5 7.5"
              stroke="white"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="more-info-content">
        <div className="more-info-items">
          <ul>
            <li onClick={() => props.close(false)}>
              <Link href="/services">{language.services[idLang]}</Link>
            </li>
            <li>{language.privacy_policy[idLang]}</li>
            <li onClick={() => props.close(false)}>
              <Link href="/catalog/6">{language.catalog[idLang]}</Link>
            </li>
            <li onClick={() => props.close(false)}>
              <Link href="/contact">{language.contacts[idLang]}</Link>
            </li>
          </ul>
        </div>
        <div className="more-info-assets">
          <Link href="tel:+99312754802">+993 12754802</Link>
          <button>
            {" "}
            <Link href="tel:+99312754802">{language.call[idLang]}</Link>
          </button>
        </div>
      </div>
      <p>{language.time[idLang]}</p>
    </div>
  );
};
