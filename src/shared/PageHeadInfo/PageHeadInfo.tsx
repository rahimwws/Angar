"use client";

import React, { useEffect, useState } from "react";

import "./style.scss";
import { Arrow } from "./assets/Arrow";
import Link from "next/link";
import { useAtom } from "jotai";
import { lang } from "@/service/language/languageID";
import language from "@/service/language/language";

type Props = {
  text: string;
};

export const PageHeadInfo = (props: Props) => {
  const [idLang] = useAtom(lang)
  const routers: any = {
    contact: language.contacts[idLang],
    catalog: language.catalog[idLang],
    product: language.product[idLang],
    services: language.services[idLang],
    cart: language.cart[idLang],
    profile: language.profile[idLang],
    search:language.search[idLang]
  };
  const [resultRouter, setResultRouter]: any = useState([]);
  useEffect(() => {
    const router = window.location.pathname;
    setResultRouter(router.split("/").filter(Boolean))

  }, []);
  return (
    <section className="page-head-info">
      <h1>{props.text}</h1>
      <span>
        <Link href="/">{language.main[idLang]}</Link>
        <Arrow />
        <Link href={resultRouter[0] == "catalog" ? `/` : `${resultRouter[0]}`}>{routers[resultRouter[0]]}</Link>
        {resultRouter[1] ? (
          <>
            {/* <Arrow /> */}
            {/* <p>{resultRouter[1] ? resultRouter[1] : ""}</p> */}
          </>
        ) : (
          <></>
        )}
      </span>
    </section>
  );
};
