import React from "react";
import Image from "next/image";

import "./ProductCart.scss";
import { Heart } from "./assets/Heart";
import { Star } from "./assets/Star";
import { Button } from "../Button/Button";
import Link from "next/link";
import { formatPrice } from "@/features/utils/formatPrice";

type Props = {
  name: string;
  category: any;
  quantity: number;
  price: number;
  image: any;
  sale: number;
  link:string
};

export const ProductCart = (props: Props) => {
  const ChangeSale = (sale: number) => {
    return Math.trunc(Number(props.price) + Number(sale));
  };
  

  
  
  
  return (
    <Link href={`/product/${props.link}`} >
      <div className="product-cart">
        <div className="head">
          <div className={props.sale != 0 ? "sale" : ""}>
            <p className={props.sale != 0 ? "" : "none"}>
              {Math.trunc(
                (Number(props.sale) * 100) /
                  (Number(props.price) + Number(props.sale))
              )}
              % off
            </p>
          </div>
          <Heart />
        </div>
        <div className="image">
          {props.quantity === 0 ? (

            <div className="saled">
            <p>Продано</p>
          </div>
            ):(<></>)}
          <Image src={props.image} alt="product" width={150} height={150}    />
        </div>
        <div className="quantity">
          <p>
            Количество: <span>{props.quantity}</span>
          </p>
        </div>
        <div className="info">
          <p>{props.category}</p>
          <p>{props.name}</p>
          <div className="stars">
            <Star />
          </div>
        </div>
        <div className="prices">
          <div className="text">
            <p className={props.sale != 0 ? "" : "none"}>
              {ChangeSale(props.sale)}
            </p>
            <p>{formatPrice(Math.trunc((props.price)))} TMT</p>
          </div>
          <Button text="Добавить" />
        </div>
      </div>
    </Link>
  );
};
