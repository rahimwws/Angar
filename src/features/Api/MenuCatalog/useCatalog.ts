import { useQuery } from "react-query";
import apiServices from "../api.services";

export const useCatalog = () => {
  return useQuery(
      ["Catalog"],
      () => apiServices.getCatalog(), {
      select: ({ data }) => data
  }
  );
}  