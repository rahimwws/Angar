"use client";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import React, { useEffect, useState } from "react";

type Props = {};
import "./CatalogProducts.scss";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCatalogProduct } from "@/features/Api/getCatalogProducts/useCatalogProducts";
import { Button } from "@/shared/Button/Button";
import InfiniteScroll from "react-infinite-scroll-component";
import apiServices from "@/service/api.services";
import {
  QueryClient,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { ANGAR_URL } from "@/service/Data/angar_url";

export const CatalogProducts = (props: Props) => {
  const router = useRouter();
  const { ref, inView } = useInView({});
  let params = useParams();
  const queryClient = useQueryClient();
  const [nextUrl, setNextUrl] = useState("");
  const [key, setKey] = useState(0);
  const { data, fetchNextPage, refetch } = useCatalogProduct(
    Number(params.catalog),
    nextUrl,
    key
  );
  useEffect(() => {
    if (!params.catalog) {
      params = {
        catalog: "251",
      };
    } else {
      setNextUrl("");
    }
  }, [params.catalog]);

  useEffect(() => {

    if (data?.pages) {
      // Сбросим предыдущие данные при изменении каталога
      if (params.catalog !== "251") {
        setNextUrl("");
      }
      
      data.pages.forEach((item: any) => {
        if (item.links && item.links["next"]) {
          setNextUrl(item.links["next"]);
        }else{
          setNextUrl("");
        }
      });
    }
  }, [data, params.catalog]);

  useEffect(() => {
    if (inView) {
      // Check if in view, and fetch next page
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section className="catalog-products">
      {data?.pages.map((items: any) => {
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
      <div className="assets">
        <p onClick={() => fetchNextPage()} ref={ref}></p>
      </div>
    </section>
  );
};
