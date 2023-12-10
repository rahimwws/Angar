import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useLastCatalog = (id:number) => {
  return useQuery(
      ["LastCatalog"],
      () => apiServices.getLastCatalog(id), {
      select: ({ data }) => data
  }
  );
}  