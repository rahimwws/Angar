"use client";

import React, { useEffect, useState } from "react";

import "./style.scss";
import { ProductInfo } from "@/shared/ProductInfo/ProductInfo";
import { useDetail } from "@/features/Api/getDetail/useDetail";
import { DetailSort } from "@/features/DetailSort/DetailSort";
import { useParams } from "next/navigation";
import { DetailAttribute } from "@/features/DetailSort/DetailAttribute";

type Props = {};

export const AboutProduct = (props: Props) => {
  const params = useParams();
  let item: any = [];
  let attributes: any = [];
  const { data } = useDetail(Number(params.name));
    if (data) {
      item = DetailSort(data);
      attributes = DetailAttribute(data);
    }

  const [Info, setInfo] = useState(0);
  return (
    <div className="about-product">
      <div className="main-text">
        <h2 onClick={() => setInfo(0)} className={Info === 0 ? "border" : ""}>
          Характеристика
        </h2>
        <h2 onClick={() => setInfo(1)} className={Info === 1 ? "border" : ""}>
          О товаре
        </h2>
      </div>
      <hr />
      <h3>{item[3]}</h3>
      <div className={Info === 0 ? "product-charachter" : "none"}>
        <div className="info">
          <ProductInfo data={attributes} isSlice = {true} />
        </div>
      </div>
      <div className={Info === 0 ? "none" : "product-discription"}>
        <p>{item[4]}</p>
      </div>
    </div>
  );
};
