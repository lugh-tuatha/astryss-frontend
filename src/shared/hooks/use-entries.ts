import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createEntry, getEntries } from "../service/entries";
import { EntriesResponse } from "../types/entry";
import { toast } from "sonner";

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

export function useCreateEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEntry,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["entries"] });
      
      toast.success("Your message has been sent to the stars! ✨");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to send your message");
      console.log(error);
    },
  });
}