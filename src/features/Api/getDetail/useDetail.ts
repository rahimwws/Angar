import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useDetail = (id:number) => {
    return useQuery(
        ["DetailProduct"],
        () => apiServices.getDetailProduct(id), {
        select: ({ data }) => data
    }
    );
}  