import apiServices from "@/service/api.services";
import { useQuery } from "@tanstack/react-query";

export const useDetail = (id:number) => {
    return useQuery({

        queryKey: ["DetailProduct"],
        queryFn: () => apiServices.getDetailProduct(id),
        select: ({ data }) => data

    }
    )
}  