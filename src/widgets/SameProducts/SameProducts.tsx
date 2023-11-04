import React from "react";

import "./style.scss";
import { ProductCart } from "@/shared/ProductCarts/ProductCart";

type Props = {};

export const SameProducts = (props: Props) => {
  return (
    <section className="same-products">
      <h1>Похожие продукты</h1>
      <div className="same-products-items">
        <ProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          quantity={54}
          price={22200}
        />
        <ProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          quantity={54}
          price={22200}
        />
        <ProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          quantity={54}
          price={22200}
        />
        <ProductCart
          name='Ниппель оцинкованный DN 15 (1/2")'
          category="Сантехника"
          quantity={54}
          price={22200}
        />
      </div>
    </section>
  );
};
