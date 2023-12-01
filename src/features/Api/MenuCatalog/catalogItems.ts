import { useState } from "react";
import { getCatalog } from "./getCatalog";

export const catalogItems =  async()=>{
    const data = await getCatalog()
    return data
}

catalogItems()