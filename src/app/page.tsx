import React from "react";


import { Slider } from "@/shared/Slider/Slider";
import { CatalogSection } from "@/widgets/CatalogSection/CatalogSection";
import { RecommendedSection } from "@/widgets/HomeProductSections/RecommendedSection";
import { NewProducts } from "@/widgets/HomeProductSections/NewProducts";
import { SaleProducts } from "@/widgets/HomeProductSections/SaleProducts";


type Props = {};

const  Home =async (props: Props) => {
  
  
  return (
    <>
      <main className="">
        <Slider />
      
        <CatalogSection />
        <RecommendedSection/>
        <Slider />
        <NewProducts/>
        <SaleProducts/>
      </main>
    </>
  );
};

export default Home;
