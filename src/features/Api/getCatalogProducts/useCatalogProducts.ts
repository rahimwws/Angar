import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useCatalogProduct = (id: number, url: any, check: boolean, prev: boolean, prevUrl: any) => {
    let queryFn;

    if (prev) {
        queryFn = () => apiServices.getNext(prevUrl);
    }
    if (check) {
        queryFn = () => apiServices.getNext(url);
    } 
    else {
        queryFn = () => apiServices.getCatalogProduct(id);
    }

    return useQuery(["CatalogProducts"], queryFn, {
        select: ({ data }) => data
    });
}
