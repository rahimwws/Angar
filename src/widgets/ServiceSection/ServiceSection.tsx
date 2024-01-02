"use client";
import { ServicePageItem } from "@/shared/ServicePageItem/ServicePageItem";
import React from "react";

type Props = {};

import "./assets/style.scss";

import image1 from "./assets/image 1.png";
import image2 from "./assets/image 2.png";
import image3 from "./assets/image 3.png";
import image4 from "./assets/image 4.png";
import { useAtom } from "jotai";
import { lang } from "@/service/language/languageID";
import language from "@/service/language/language";

export const ServiceSection = (props: Props) => {
  const [idLang] = useAtom(lang);
  return (
    <section className="service-section">
      <ServicePageItem
        image={image1}
        text={language.service_text_first[idLang]}
        title={language.construction[idLang]}
      />
      <ServicePageItem
        image={image2}
        text={language.service_text_second[idLang]}
        title={language.construction2[idLang]}
      />
      <ServicePageItem
        image={image3}
        text={language.service_text_third[idLang]}
        title={language.construction3[idLang]}
      />
      <ServicePageItem
        image={image4}
        text={language.service_text_fourth[idLang]}
        title={language.construction4[idLang]}
      />
    </section>
  );
};
