import { useQuery } from "react-query";
import apiServices from "../api.services";

export const useCatalogProduct = (id:number) => {
    return useQuery(
        ["CatalogProducts"],
        () => apiServices.getCatalogProduct(id), {
        select: ({ data }) => data
    }
    );
}  