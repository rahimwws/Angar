"use client";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import React, { useEffect, useState } from "react";

type Props = {};
import "./CatalogProducts.scss";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import { useParams, useSearchParams } from "next/navigation";
import { useCatalogProduct } from "@/features/Api/getCatalogProducts/useCatalogProducts";
import { Button } from "@/shared/Button/Button";

export const CatalogProducts = (props: Props) => {
  let params = useParams();
  if (!params.catalog) {
    params = {
      catalog: "251",
    };
  }
  const [items, setItems] = useState<any>([]);
  const [included, setIncluded] = useState<any>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");
  const [hasMore, setHasMore] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const { data, refetch } = useCatalogProduct(
    Number(params.catalog),
    nextUrl,
    hasMore,
    hasPrev,
    prevUrl
  );
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    if (data) {
      setItems(data?.data);
      setIncluded(data?.included);

      if (data?.links && data?.links["next"]) {
        setNextUrl(data?.links["next"]);
        // console.log(data?.links["next"]);
      }
      if (data?.links && data?.links["prev"]) {
        setPrevUrl(data?.links["prev"]);
        // console.log(data?.links["next"]);
      }
    }
  }, [data]);

  const nextProducts = () => {
    setHasMore(true);
    refetch();
  };

  const prevProducts = () => {
    setHasMore(false);
    setHasPrev(true);
    refetch();
  };
  return (
    <section className="catalog-products-section">
      <div className="catalog-products">
        {items?.map((item: any, key: number) => {
          const includedItems = ProductSortApi(item, included);

          return (
            <ProductCart
              name={item?.attributes["product.label"]}
              category={includedItems[3]}
              quantity={includedItems[2]}
              price={includedItems[1]}
              key={key}
              image={`https://angar.ussat.tm/aimeos/${includedItems[0]}`}
              sale={includedItems[4]}
              link={includedItems[5]}
            />
          );
        })}
      </div>

      <div className="catalog-assets">
        <span onClick={prevProducts}>
          <Button text="<" />
        </span>
        <span onClick={nextProducts}>
          <Button text=">" />
        </span>
      </div>
    </section>
  );
};
