"use client";
import React, { useState } from "react";

import "./ProductInfo.scss";

interface Object {
  id: any;
  data: any;
}
type Props = {
  isSlice: boolean;
  data: Array<Object>;
};

export const ProductInfo = (props: Props) => {
  const [Slice, setSlice] = useState(5);
  const [IsSliced, setIsSliced] = useState(false);
  const Slicing = () => {
    setIsSliced(!IsSliced);
    if (Slice <= 5) {
      setSlice(99);
    } else {
      setSlice(5);
    }
  };
  return (
    <div className="product-info">
      {props.data.slice(1, Slice).map((item,key) => {
        return (
          <div className="product-info-item" key={key}>
            <p>{item.id}</p>
            <div className="line"></div>
            <span>{item.data}</span>
          </div>
        );
      })}
      {props.isSlice ? (
        <h2 onClick={Slicing}>{IsSliced ? "" : "Больше характеристик"}</h2>
      ) : (
        <></>
      )}
    </div>
  );
};
