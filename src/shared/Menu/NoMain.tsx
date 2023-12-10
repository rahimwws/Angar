"use client";
import React, { useContext, useState } from "react";

import "./assets/MainMenu.scss";
import { Arrow } from "./assets/Arrow";
import Link from "next/link";

type Props = {
  isOpen: any;
  class: string;
  open: any;
  idItem: any;
  data: any;
  close: any;
};

export const NoMain = (props: Props) => {
  const [red, setRed] = useState(null);
  const HandleClick = (id: any) => {
    setRed(id);
    props.close(false);
  };
  // console.log(props.idItem);

  const data = props.data.filter((item: any) => item.id == props.idItem);

  // console.log(data);

  return (
    <div className={props.open ? "none" : `${props.class} extra-menu`}>
      <ul>
        {data &&
          data[0]?.children.map((item: any, index: number) => {
            return (
              <li
                className={red === index ? "red" : ""}
                key={index}
                onClick={() => HandleClick(index)}
              >
                <Link href={`/catalog/${item.id}`}>{item.data}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
