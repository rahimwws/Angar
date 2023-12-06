import { useQuery } from "react-query";
import apiServices from "../api.services";

export const useDetail = (id:number) => {
    return useQuery(
        ["DetailProduct"],
        () => apiServices.getDetailProduct(id), {
        select: ({ data }) => data
    }
    );
}  