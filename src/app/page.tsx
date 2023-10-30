import React from "react";

import "@/styles/global.scss";
import { Slider } from "@/shared/Slider/Slider";
import { CatalogSection } from "@/widgets/CatalogSection/CatalogSection";
import { RecommendedSectiion } from "@/widgets/RecommendedSection/RecommendedSectiion";


type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <main className="">
        <Slider />
        <CatalogSection />
        <RecommendedSectiion />
        <Slider />
        <RecommendedSectiion />
        <RecommendedSectiion />
      </main>
    </>
  );
};

export default Home;
