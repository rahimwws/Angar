import { useQuery } from "react-query";
import apiServices from "../api.services";

export const useDataRecommended = () => {
    return useQuery(
        ["HomeProducts"],
        () => apiServices.getRecommended(), {
        select: ({ data }) => data
    }
    );
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