"use client";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import React, { useEffect, useState } from "react";

type Props = {};
import "./CatalogProducts.scss";
import {
  useDataNew,
  useDataRecommended,
} from "@/features/Api/getProducts/getData";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import { useParams } from "next/navigation";
import { useCatalogProduct } from "@/features/Api/getCatalogProducts/useCatalogProducts";
import { getLast } from "@/features/getLastCatalogSort/getLast";
import { useDataNext } from "@/features/Api/getNextProducts";
import InfiniteScroll from "react-infinite-scroll-component";

export const CatalogProducts = (props: Props) => {
  let params = useParams();
  if (!params.catalog) {
    params = {
      catalog: "251",
    };
  }
  const [items, setItems] = useState<any>([]);
  const [included, setIncluded] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextUrl, setNextUrl] = useState<string>("");

  // Получение данных с помощью useCatalogProduct
  const { data } = useCatalogProduct(Number(params.catalog));

  useEffect(() => {
    if (data) {
      setItems(data?.data);
      setIncluded(data?.included);
      
      if (data?.links && data?.links["next"]) {
        
        setNextUrl(data?.links["next"])
      } else {
        setHasMore(false);
      }
    }
  }, [data]);

  // Получение данных с помощью useDataNext при скролле
  
  const { newData }: any = useDataNext(nextUrl)
  
  const getMore = () => {

    if (nextUrl) {
      setNextUrl(nextUrl);
    } else {  
      setHasMore(false);
    }
    // setItems([...items,...newData?.data]);
    // setIncluded([...included,...newData?.included]);
  };
  return (
    <section className="catalog-products">
      <InfiniteScroll
        dataLength={items.length}
        next={getMore}
        hasMore={hasMore}
        loader={<h3>Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
        className="catalog-products"
      >
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
      </InfiniteScroll>
    </section>
  );
};
