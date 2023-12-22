import apiServices from "@/service/api.services";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (name: any, checker: boolean) => {
    let queryFn;
    
    // if (checker) {
    //     queryFn = () => {

    //         return apiServices.getSearch(name);
    //     };

    // }
    return useQuery({
        queryKey: ["SearchItems"],
        queryFn:()=> checker ? apiServices.getSearch(name) :  apiServices.getSearch(''), 
        select:(data)=> data
    }
    );
}  