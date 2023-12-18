import apiServices from "@/service/api.services";
import { useQuery } from "@tanstack/react-query";

export const useCatalog = () => {
  return useQuery({

    queryKey: ["Catalog"],
    queryFn: () => apiServices.getCatalog(),
    select: ({ data }) => data

}
);
}  