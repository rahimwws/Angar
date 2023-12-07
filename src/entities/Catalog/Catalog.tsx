
import { CircleCatalog } from "@/shared/CircleCatalog/CircleCatalog";
import React from "react";

import image from "./assets/Plumbing.svg";
import { useCatalogItems } from "@/features/Api/MenuCatalog/useCatalogItems";
type Props = {
  begin:number
  end:number
};

export const Catalog = (props: Props) => {
  const data = useCatalogItems()
  
  return (
    <>
      <div className="CatalogSectionItem">
        {data.splice(props.begin,props.end).map((item,key)=>{
          return(
            <CircleCatalog name={item.data} image={image} link={item.id} key={key}/>
          )
        })}
      </div>
      <div className="mobile-catalog-section">
      {data.splice(1,props.end).map((item,key)=>{
          return(
            <CircleCatalog name={item.data} image={image} link={item.id} key={key}/>
          )
        })}
      </div>
    </>
  );
};
