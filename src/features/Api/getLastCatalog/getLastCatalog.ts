import apiServices from "@/service/api.services";
import { useQuery } from "@tanstack/react-query";

export const useLastCatalog = (id:number) => {
  return useQuery({

    queryKey: ["LastProduct"],
    queryFn: () => apiServices.getLastCatalog(id),
    select: ({ data }) => data

}
)
}  