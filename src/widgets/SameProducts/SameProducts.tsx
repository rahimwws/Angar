"use client";
import React from "react";

import "./style.scss";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import { useDataRecommended } from "@/features/Api/getProducts/getData";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import { image_url } from "@/service/Urls/image_url";

type Props = {};

export const SameProducts = (props: Props) => {
  let { data } = useDataRecommended();

  return (
    <section className="same-products">
      <h1>Похожие продукты</h1>
      <div className="same-products-items">
        {data?.data.map((item: any, key: number) => {
          const includedItems = ProductSortApi(item, data?.included);

          return (
            <ProductCart
              name={item?.attributes["product.label"]}
              category={includedItems[3]}
              quantity={includedItems[2]}
              price={includedItems[1]}
              key={key}
              image={`${image_url}/${includedItems[0]}`}
              sale={includedItems[4]}
              link={includedItems[5]}
            />
          );
        })}
      </div>
    </section>
  );
};
