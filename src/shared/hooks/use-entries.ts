import { useQuery } from "@tanstack/react-query";

export function useEntries() {
  return useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 500));
      return "React Query is working!";
    },
  });
}
