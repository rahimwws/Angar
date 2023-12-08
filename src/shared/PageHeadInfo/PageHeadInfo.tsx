"use client";

import React, { useEffect, useState } from "react";

import "./style.scss";
import { Arrow } from "./assets/Arrow";
import { usePathname } from "next/navigation";

type Props = {
  text: string;
};

export const PageHeadInfo = (props: Props) => {
  const [resultRouter, setResultRouter]: any = useState([]);
  useEffect(() => {
    const router = window.location.pathname
    setResultRouter(router.split("/").filter(Boolean));
  }, []);

  return (
    <section className="page-head-info">
      <h1>{props.text}</h1>
      <span>
        <p>Главная</p>
        <Arrow />
        {resultRouter[0] == "product" ? <p>Продукт:</p> : <p>Каталог</p>}
        <Arrow />
        <p>{resultRouter[1] ? resultRouter[1] : ""}</p>
      </span>
    </section>
  );
};
