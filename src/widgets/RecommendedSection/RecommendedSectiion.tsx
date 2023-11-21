"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import "./style.scss";
import useEmblaCarousel from "embla-carousel-react";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";

type Props = {
  data: any;
};

export const RecommendedSectiion = (props: Props) => {
  const [data,setData] = useState([])
  const [included,setIncluded] = useState([])
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
  useEffect(() => {

      setData(props.data ? props.data.data : [])
      setIncluded(props.data ? props.data.included : [])
    
    }, []);
    console.log(included)

  return (
    <section className="recommended-section">
      <div className="recommended-text">
        <h1>Рекомендуемые товары</h1>
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
          {data.map((item: any, key: number) => {
            let idPicture = 0
            let idNumber = item?.relationships["media"].data[0]["id"]
            included.map((img:any)=>{
              if(img.id === idNumber){
                idPicture = img.attributes["media.url"]
              }
            })
            console.log(idPicture);
            
            return (
              <ProductCart
                name={item?.attributes["product.label"]}
                category={idNumber}
                quantity={54}
                price={22200}
                key={key}
                image={`https://angar.ussat.tm/aimeos/${idPicture}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
