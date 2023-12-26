"use client";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import { ANGAR_URL } from "@/service/Urls/angar_url";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import "./style.scss";
import { image_url } from "@/service/Urls/image_url";

type Props = {};

export const SearchProduct = (props: Props) => {
  const [items, setItems] = useState({
    data: [],
    included: [],
  });
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  useEffect(() => {
    axios
      .get(
        `${ANGAR_URL}/product?locale=ru&include=text,media,price,stock,catalog&filter[%26%26][][%3D~][product.label]=${search}`
      )
      .then((res: any) => {
        setItems(res.data);
      });
  }, [search]);
  return (
    <section className="search-section">
        <h1>Результаты поиска: {search}</h1>
      <div className="search-product">
        {items?.data.map((product: any, key: number) => {
          const includedItems = ProductSortApi(product, items?.included);
          return (
            <ProductCart
              name={product.attributes["product.label"]}
              category={includedItems[3]}
              quantity={includedItems[2]}
              price={includedItems[1]}
              key={key}
              image={`${image_url}${includedItems[0]}`}
              sale={includedItems[4]}
              link={includedItems[5]}
            />
          );
        })}
      </div>
    </section>
  );
};
