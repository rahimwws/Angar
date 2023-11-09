import { WideProductCart } from "@/shared/ProductCarts/WideProductCart";
import React from "react";

import "./style.scss";

type Props = {};

export const BasketTable = (props: Props) => {
  return (
    <div className="basket-table">
        <div className="table-header">
            <h2>Товар</h2>
            <h2>Цена</h2>
            <h2>Количество</h2>
            <h2>Сумма</h2>
        </div>
      <div className="table-items">
        <WideProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          price={22200}
        />
        <WideProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          price={22200}
        />
        <WideProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          price={22200}
        />
        <WideProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          price={22200}
        />
      </div>
    </div>
  );
};
