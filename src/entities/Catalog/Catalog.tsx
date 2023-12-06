import { CircleCatalog } from "@/shared/CircleCatalog/CircleCatalog";
import React from "react";

import image from "./assets/Plumbing.svg";
import { useCatalogItems } from "@/features/Api/MenuCatalog/useCatalogItems";
type Props = {
  number:number
};

export const Catalog = (props: Props) => {
  // const data = catalogItems();
  return (
    <>
      <div className="CatalogSectionItem">
        {/* {data[0].slice(0,8).map((item,key) => {
          return <CircleCatalog name={item} image={image} key={key} />;
        })} */}
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />

      </div>
      <div className="mobile-catalog-section">
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
        <CircleCatalog name="Сантехника" image={image} />
      </div>
    </>
  );
};
