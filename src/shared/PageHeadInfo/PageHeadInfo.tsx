"use client";

import React, { useEffect, useState } from "react";

import "./style.scss";
import { Arrow } from "./assets/Arrow";
import Link from "next/link";

type Props = {
  text: string;
};

export const PageHeadInfo = (props: Props) => {
  const routers: any = {
    contact: "Контакты",
    catalog: "Каталог",
    product: "Продукт",
    services: "Услуги",
    cart: "Корзина",
    profile: "Профиль",
    search:"Поиск"
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
        <Link href="/">Главная</Link>
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
