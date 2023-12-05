import React from "react";


import { Slider } from "@/shared/Slider/Slider";
import { CatalogSection } from "@/widgets/CatalogSection/CatalogSection";
import { RecommendedSection } from "@/widgets/HomeProductSections/RecommendedSection";


type Props = {};

const  Home =async (props: Props) => {
  
  
  return (
    <>
      <main className="">
        <Slider />
      
        <CatalogSection />
        <RecommendedSection recommended = {true} new = {false}/>
        <Slider />
        <RecommendedSection recommended = {false} new = {true} />
        <RecommendedSection recommended = {false} new = {false} />
      </main>
    </>
  );
};

export default Home;
