
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
        {data[0].splice(props.begin,props.end).map((item,key)=>{
          return(
            <CircleCatalog name={item.data} image={`https://angar.ussat.tm/aimeos/${item.media}`} link={item.id} key={key}/>
          )
        })}
      </div>
      <div className="mobile-catalog-section">
      {data[0].splice(1,props.end).map((item,key)=>{
          return(
            <CircleCatalog name={item.data} image={`https://angar.ussat.tm/aimeos/${item.media}`} link={item.id} key={key}/>
          )
        })}
      </div>
    </>
  );
};
