import apiServices from "@/service/api.services";
import { useQuery } from "react-query";

export const useDataNext = (url: string) => {
  if (url) {

    return useQuery(
      ["NextProducts"],
      async () => {
        const data = await apiServices.getNext(url);
        return data;
      },
      {
        select: ({ data }) => data
      }
    );
  }
};