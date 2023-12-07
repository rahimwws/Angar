"use client";

import React, { useEffect, useState } from "react";

import "./style.scss";
import { Arrow } from "./assets/Arrow";
import { usePathname } from "next/navigation";

type Props = {
  text: string;
};

export const PageHeadInfo = (props: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const router = usePathname();
  const resultRouter = router.split("/").filter(Boolean);

  return (
    <section className="page-head-info">
      {isClient ? (
        <>
          {/* <h1>{props.text}</h1>
          <span>
            <p>Главная</p>
            <Arrow />
            {resultRouter[0] == "product" ? <p>Продукт:</p> : <p>Каталог</p>}
            <Arrow />
            <p>{resultRouter[1] ? <p>{resultRouter[1]}</p> : <></>}</p>
          </span> */}
        </>
      ) : (
        <></>
      )}
    </section>
  );
};
