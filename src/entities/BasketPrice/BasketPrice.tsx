import React from "react";

type Props = {};

import "./style.scss";
import { Button } from "@/shared/Button/Button";

export const BasketPrice = (props: Props) => {
  return (
    <div className="basket-price">
      <h2>Итого</h2>
      <div className="basket-price-item">
        <p>Скидка</p>
        <span>40595 TMT</span>
      </div>
      <div className="basket-price-item">
        <p>Скидка</p>
        <span>40595 TMT</span>
      </div>
      <Button text="Купить"/>
    </div>
  );
};
