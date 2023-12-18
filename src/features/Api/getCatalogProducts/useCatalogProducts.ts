import apiServices from "@/service/api.services";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useCatalogProduct = (id: any, nextUrl: any) => {



    const queryFn = () => {

        return apiServices.getCatalogProduct(id,nextUrl);
    };

    return useInfiniteQuery({
        queryKey: ['CatalogProducts'],
        queryFn: queryFn,
        initialPageParam: 1,
        getNextPageParam: (lastPage: any) => {
            return lastPage
        },
        // select:({data})=>data
    })
}

