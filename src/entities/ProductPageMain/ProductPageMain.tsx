"use client";

import { ProductInfo } from "@/shared/ProductInfo/ProductInfo";
import {
  ProductBlockImage,
  ProductMainImage,
} from "@/shared/ProductPageImages";
import { ProductPagePrice } from "@/shared/ProductPagePrice/ProductPagePrice";

import "./style.scss";
import { useDetail } from "@/features/Api/getDetail/useDetail";
import { useParams } from "next/navigation";
import { DetailSort } from "@/features/DetailSort/DetailSort";
import { useEffect, useState } from "react";
import { DetailAttribute } from "@/features/DetailSort/DetailAttribute";

type Props = {};

export const ProductPageMain = (props: Props) => {
  const params = useParams();
  let item: any = [];
  let attributes: any = [];
  const { data } = useDetail(Number(params.name));
  if (data) {
    item = DetailSort(data);
    attributes = DetailAttribute(data);
  }
  
  return (
    <div className="product-page-main">
      <div className="images">
        <div className="blocks">
          {/* <ProductBlockImage />
          <ProductBlockImage />
          <ProductBlockImage /> */}
        </div>
        <ProductMainImage
          url={item[2] ? `https://angar.ussat.tm/aimeos/${item[2]}` : ""}
        />
      </div>
      <ProductInfo data={attributes} isSlice={false} />
      <ProductPagePrice price={item[0]} sale={item[1]} rent = {item[5]} rentInfo = {item[6]} isMonth = {item[7]} stock = {item[8]}/>
    </div>
  );
};
