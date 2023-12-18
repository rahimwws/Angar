"use client";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import React, { useEffect, useState } from "react";

type Props = {};
import "./CatalogProducts.scss";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import { useParams, useSearchParams } from "next/navigation";
import { useCatalogProduct } from "@/features/Api/getCatalogProducts/useCatalogProducts";
import { Button } from "@/shared/Button/Button";
import InfiniteScroll from "react-infinite-scroll-component";
import apiServices from "@/service/api.services";
import { useInfiniteQuery } from "@tanstack/react-query";

export const CatalogProducts = (props: Props) => {
  let params = useParams();
  if (!params.catalog) {
    params = {
      catalog: "251",
    };
  }
  const { data } = useCatalogProduct(Number(params.catalog), "");

  // const datas = data?.pages.map((items: any):any => {
  //   console.log(items?.data);

  //   items?.data.map((product: any, key: number) => {
  //     const includedItems = ProductSortApi(product, items?.included);
  //     return (
  //       <ProductCart
  //         name={product.attributes["product.label"]}
  //         category={includedItems[3]}
  //         quantity={includedItems[2]}
  //         price={includedItems[1]}
  //         key={key}
  //         image={`https://angar.ussat.tm/aimeos/${includedItems[0]}`}
  //         sale={includedItems[4]}
  //         link={includedItems[5]}
  //       />
  //     );
  //   });
  // });

  console.log(data?.pages);

  return (
    <section className="catalog-products">
      {data?.pages.map((items: any) => {
        console.log(items?.data);

        return items?.data.map((product: any, key: number) => {
          const includedItems = ProductSortApi(product, items?.included);
          return (
            <ProductCart
              name={product.attributes["product.label"]}
              category={includedItems[3]}
              quantity={includedItems[2]}
              price={includedItems[1]}
              key={key}
              image={`https://angar.ussat.tm/aimeos/${includedItems[0]}`}
              sale={includedItems[4]}
              link={includedItems[5]}
            />
          );
        });
      })}
    </section>
  );
};
