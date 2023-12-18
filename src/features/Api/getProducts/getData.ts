import apiServices from "@/service/api.services";
import { useQuery } from "@tanstack/react-query";

export const useDataRecommended = () => {
    return useQuery({

        queryKey: ["HomeProducts"],
        queryFn: () => apiServices.getRecommended(),
        select: ({ data }) => data

    }
    )
}


export const useDataNew = () => {
    return useQuery({

        queryKey: ["newProducts"],
        queryFn: () => apiServices.getNew(),
        select: ({ data }) => data
    }
    )
}

export const useDataSale = () => {
    return useQuery({

        queryKey: ["DataSale"],
        queryFn: () => apiServices.getSale(),
        select: ({ data }) => data

    }
    )
}  