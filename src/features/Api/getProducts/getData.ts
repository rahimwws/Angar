import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useDataRecommended = () => {
    return useQuery(
        ["HomeProducts"],
        () => apiServices.getRecommended(), {
        select: ({ data }) => data
    }
    )
}


export const useDataNew = () => {
    return useQuery(
        ["NewProducts"],
        () => apiServices.getNew(), {
        select: ({ data }) => data
    }
    );
}

export const useDataSale = () => {
    return useQuery(
        ["SaleProducts"],
        () => apiServices.getSale(), {
        select: ({ data }) => data
    }
    );
}  