import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getEntries } from "../service/entries";
import { EntriesResponse } from "../types/entry";

export function useEntries(limit: number = 18, options?: { initialData?: EntriesResponse }) {
  return useInfiniteQuery({
    queryKey: ["entries", limit],

    queryFn: ({ pageParam }) => getEntries(limit, pageParam),

    getNextPageParam: (lastPage) => {
      return lastPage.meta.hasMore ? lastPage.meta.nextCursor : undefined;
    },

    initialPageParam: undefined as string | undefined,

    initialData: options?.initialData ? {
      pages: [options.initialData],
      pageParams: [undefined],
    } : undefined,
    
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
}