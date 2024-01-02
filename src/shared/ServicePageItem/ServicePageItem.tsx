import Image from "next/image";
import React from "react";

import "./style.scss";

type Props = {
  image: any;
  title:string,
  text:string
};

export const ServicePageItem = (props: Props) => {

  return (
    <div className="service-page-item">
      <div className="service-page-image-head">
        <Image src={props.image} alt="image" />
        <h2>{props.title}</h2>
      </div>
      <p>
        {props.text}
      </p>
    </div>
  );
};
