import React from "react";


import { Slider } from "@/shared/Slider/Slider";
import { CatalogSection } from "@/widgets/CatalogSection/CatalogSection";
import { RecommendedSection } from "@/widgets/RecommendedSection/RecommendedSection";


type Props = {};

const  Home =async (props: Props) => {
  
  
  return (
    <>
      <main className="">
        <Slider />
        <CatalogSection />
        <RecommendedSection  />
        <Slider />
        <RecommendedSection  />
        <RecommendedSection  />
      </main>
    </>
  );
};

export default Home;
