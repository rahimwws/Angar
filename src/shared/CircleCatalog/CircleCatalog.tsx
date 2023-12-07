import Image from "next/image";
import React from "react";

import "./style.scss";
import Link from "next/link";

type Props = {
  name: string;
  image: any;
  link:string | number
};

export const CircleCatalog = (props: Props) => {
  return (
    <Link href={`/catalog/${props.link}`}>
      <div className="CircleCatalog">
        <div className="image">
          <Image src={props.image} alt="catalog" />
        </div>

        <p>{props.name}</p>
      </div>
    </Link>
  );
};
