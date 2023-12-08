import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useCatalog = () => {
  return useQuery(
      ["Catalog"],
      () => apiServices.getCatalog(), {
      select: ({ data }) => data
  }
  );
}  