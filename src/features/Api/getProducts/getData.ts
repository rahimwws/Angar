import { useQuery } from "react-query";
import apiServices from "../api.services";

export const getDataRecommended = () => {
    return useQuery(
        ["HomeProducts"],
        () => apiServices.getRecommended(), {
        select: ({ data }) => data
    }
    );
} 


export const getDataNew = () => {
    return useQuery(
        ["NewProducts"],
        () => apiServices.getNew(), {
        select: ({ data }) => data
    }
    );
}  

export const getDataSale = () => {
    return useQuery(
        ["SaleProducts"],
        () => apiServices.getSale(), {
        select: ({ data }) => data
    }
    );
}  