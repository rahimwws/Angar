import React from "react";
import "./style.scss";
import Link from "next/link";

type Props = {
  text: string;
  link: number;
};

export const CatalogBlock = (props: Props) => {
  return (
    <div className="catalog-block">
      <Link href={`/catalog/${props.link}`}>{props.text}</Link>
    </div>
  );
};
