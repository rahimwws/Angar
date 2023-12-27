
import { CircleCatalog } from "@/shared/CircleCatalog/CircleCatalog";
import React from "react";

import { useCatalogItems } from "@/features/Api/MenuCatalog/useCatalogItems";
import { image_url } from "@/service/Urls/image_url";
type Props = {
  begin:number
  end:number
};

export const Catalog = (props: Props) => {
  const data = useCatalogItems()
  
  return (
    <>
      <div className="catalog-item">
        {data[0].splice(props.begin,props.end).map((item,key)=>{
          return(
            <CircleCatalog name={item.data} image={`${image_url}${item.media}`} link={item.id} key={key}/>
          )
        })}
      </div>
     
    </>
  );
};
