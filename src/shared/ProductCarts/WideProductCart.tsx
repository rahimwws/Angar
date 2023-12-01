"use client";

import React, { useState } from "react";
import Image from "next/image";

import image from "./assets/Rectangle 2.jpg";
import "./ProductCart.scss";
import { Delete } from "./assets/Delete";

type Props = {
  name: string;
  category: string;
  price: number;
};

export const WideProductCart = (props: Props) => {
  const [quantity, setquantity] = useState(1);

  return (
    <>
      <div className="wide-product-cart">
        <Image src={image} alt="product" width={90} height={90} />
        <div className="product-name">
          <p>{props.name}</p>
          <span>{props.category}</span>
        </div>
        <div className="product-price">
          <p>{props.price} TMT</p>
        </div>
        <div className="quantity">
          <button onClick={() => setquantity(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setquantity(quantity + 1)}>+</button>
        </div>
        <div className="product-delete">
          <p>{props.price} TMT</p>
          <span className="delete-button">
            <Delete />
          </span>
        </div>
      </div>
      <div className="wide-product-mobile">
        <Image src={image} alt="product" width={90} height={90} />
        <div className="content">
          <div className="product-name">
            <p>{props.name}</p>
            <span>{props.category}</span>
            <div className="content-assets">
              <div className="quantity">
                <button onClick={() => setquantity(quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setquantity(quantity + 1)}>+</button>
              </div>
              <div className="product-delete">
                <p>{props.price} TMT</p>
                <span className="delete-button">
                  <Delete />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
