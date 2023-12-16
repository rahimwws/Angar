import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useCatalogProduct = (id: number, url: any, check: boolean, prev: boolean, prevUrl: any) => {
    if (check) {
        if (prev) {
            return useQuery(
                ["NextProducts"],
                () => apiServices.getNext(prevUrl),
            );
        } else {
            return useQuery(
                ["NextProducts"],
                () => apiServices.getNext(url),
            );
        }
    } else {
        return useQuery(
            ["CatalogProducts"],
            () => apiServices.getCatalogProduct(id), {
            select: ({ data }) => data
        }
        );
    }
}  