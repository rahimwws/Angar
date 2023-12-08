import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useCatalogProduct = (id:number) => {
    return useQuery(
        ["CatalogProducts"],
        () => apiServices.getCatalogProduct(id), {
        select: ({ data }) => data
    }
    );
}  