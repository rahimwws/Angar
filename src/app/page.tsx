import React from "react";

import "@/styles/global.scss";
import { Slider } from "@/shared/Slider/Slider";
import { CatalogSection } from "@/widgets/CatalogSection/CatalogSection";
import { SliderCart } from "@/entities/SliderCarts/SliderCart";
import { RecommendedSectiion } from "@/widgets/RecommendedSection/RecommendedSectiion";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
        <Slider />
        <CatalogSection/>
        <RecommendedSectiion/>
        <Slider />
          <RecommendedSectiion/>
          <RecommendedSectiion/>
    </main>
  );
};

export default Home;
