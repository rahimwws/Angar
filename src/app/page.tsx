import React from "react";


import { Slider } from "@/shared/Slider/Slider";
import { CatalogSection } from "@/widgets/CatalogSection/CatalogSection";
import { RecommendedSectiion } from "@/widgets/RecommendedSection/RecommendedSectiion";
import { getData } from "@/features/Api/RecommendedSection/getData";


type Props = {};

const  Home =async (props: Props) => {
  const data = await getData()
  console.log(data);
  
  
  return (
    <>
      <main className="">
        <Slider />
        <CatalogSection />
        <RecommendedSectiion data={data} />
        <Slider />
        <RecommendedSectiion data={data} />
        <RecommendedSectiion data={data} />
      </main>
    </>
  );
};

export default Home;
