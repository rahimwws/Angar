"use client";
import React from "react";

import "./style.scss";
import { CatalogBlock } from "@/shared/CatalogBlock/CatalogBlock";
import { CatalogArrow } from "./assets/Arrow";
import { CatalogFormList } from "./assets/FormList";
import { useLastCatalog } from "@/features/Api/getLastCatalog/getLastCatalog";
import { useParams } from "next/navigation";
import { getLast } from "@/features/getLastCatalogSort/getLast";
type Props = {};

export const CatalogPageNav = (props: Props) => {
  const params = useParams();

  const { data } = useLastCatalog(Number(params.catalog));

  const items = getLast(data);

  return (
    <section className="catalog-page-nav">
      <div className="catalog-blocks">
        {items.map((item,key) => {
          return <CatalogBlock text={item.data} link = {item.id} key={key} />;
        })}
      </div>
      {/* <div className="catalog-sort">
        <p>
          Сортировать по <CatalogArrow />
        </p>
        <CatalogFormList />
      </div> */}
    </section>
  );
};
