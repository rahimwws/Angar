import Image from "next/image";
import React from "react";

import "./style.scss";

type Props = {
  image: any;
};

export const ServicePageItem = (props: Props) => {

  return (
    <div className="service-page-item">
      <div className="service-page-image-head">
        <Image src={props.image} alt="image" />
        <h2>Строительство</h2>
      </div>
      <p>
        Наши услуги в области гражданского строительства предлагают все, от
        подготовки площадки и земляных работ до установки инженерных сетей и
        строительства дорог и зданий. Мы специализируемся на предоставлении
        высококачественной работы, которая отвечает уникальным потребностям и
        спецификациям вашего проекта.
      </p>
    </div>
  );
};
