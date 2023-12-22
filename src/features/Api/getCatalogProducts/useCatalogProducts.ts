import apiServices from "@/service/api.services";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useCatalogProduct = (id: any, nextUrl: any,key:any) => {


    const queryFn = () => {

        return apiServices.getCatalogProduct(id, nextUrl);
    };

    return useInfiniteQuery({
        queryKey: [`CatalogProducts`],
        queryFn: queryFn,
        initialPageParam: 0,
        getNextPageParam: (lastPage: any, allPages) => {
            if(nextUrl == ""){
                allPages.splice(1)        
            }
            return allPages.length+1
            
        },
        staleTime:1000,
        
        // select:({data})=>data
    })
}

