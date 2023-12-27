"use client";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import React, { useEffect, useRef, useState } from "react";

type Props = {};
import "./CatalogProducts.scss";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import { useParams } from "next/navigation";
import { useCatalogProduct } from "@/features/Api/getCatalogProducts/useCatalogProducts";
import { useInView } from "react-intersection-observer";
import { image_url } from "@/service/Urls/image_url";

export const CatalogProducts = (props: Props) => {
  const { ref, inView } = useInView({});
  let params = useParams();
  const [nextUrl, setNextUrl]:any = useState("");
  
  const { data, fetchNextPage, error, fetchPreviousPage } = useCatalogProduct(
    Number(params.catalog),
    nextUrl
  );
  useEffect(() => {
    if (data?.pages) {
      // Сбросим предыдущие данные при изменении каталога
      if (params.catalog !== "251") {
        setNextUrl("");
      }

      data.pages.forEach((item: any) => {
        if (item.links && item.links["next"]) {
          setNextUrl(item.links["next"]);
        } else {
          setNextUrl(null);
        }
      });
    }
  }, [data, params.catalog]);

  useEffect(() => {
    if (inView) {
      // Check if in view, and fetch next page
      fetchNextPage();
      if (nextUrl == null) {
        fetchPreviousPage();
      }
    }
  }, [inView,fetchNextPage, fetchPreviousPage, nextUrl]);

  return (
    <section className="catalog-products">
      {!error ? (
        data?.pages.map((items: any) => {
          return items?.data.map((product: any, key: number) => {
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
          });
        })
      ) : (
        <></>
      )}
      <div className="assets">
        <p onClick={() => fetchNextPage()} ref={ref}></p>
      </div>
    </section>
  );
};
