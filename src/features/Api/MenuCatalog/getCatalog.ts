import { useQuery } from "react-query";
import apiServices from "../api.services";

export const getCatalog = () => {
  return useQuery(
      ["Catalog"],
      () => apiServices.getCatalog(), {
      select: ({ data }) => data
  }
  );
}  