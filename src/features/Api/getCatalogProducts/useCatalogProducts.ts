import apiServices from "@/service/api.services";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCatalogProduct = (id: any, nextUrl: any,) => {

    const queryFn = () => {

        return apiServices.getCatalogProduct(id, nextUrl);
    };

    return useInfiniteQuery({
        queryKey: [`CatalogProducts`],
        queryFn: queryFn,
        initialPageParam: 0,
        getNextPageParam: (lastPage: any, allPages) => {
            if (nextUrl == "") {
                allPages.splice(1)
                return allPages.length + 1
            }
            if (nextUrl == null) {
                return allPages.slice(0, allPages.length - 1)
            } else {
                return allPages.length + 1
            }


        },
        staleTime: 1000,

        // select:({data})=>data
    })
}

