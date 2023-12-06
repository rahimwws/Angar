"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import "./style.scss";
import useEmblaCarousel from "embla-carousel-react";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";
import { ProductSortApi } from "@/features/ProductSortApi/ProductSortApi";
import {
  useDataRecommended,
} from "@/features/Api/getProducts/getData";

type Props = {
};

export const RecommendedSection = (props: Props) => {
  let { data } = useDataRecommended();
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <section className="recommended-section">
      <div className="recommended-text">
        <h1>
            Рекомендуемые товары
        </h1>
        <p>
          Все{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
          >
            <path
              d="M0.926802 6.00906L14.3102 6.00346M14.3102 6.00346L9.28944 1.23771M14.3102 6.00346L9.29344 10.7734"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
      <div className="recommended-viewport" ref={emblaRef}>
        <div className="recommended-container">
          {data?.data.map((item: any, key: number) => {
            const includedItems = ProductSortApi(item, data?.included);

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
      </div>
    </section>
  );
};
