import { useInfiniteQuery } from "@tanstack/react-query";

const useUsers = (query: any) =>
    useInfiniteQuery<unknown[], Error>({
        getNextPageParam(lastPage, allPages) {
            return allPages.length + 1;
        },
        queryFn: ({ pageParam = 1 }) =>
            axios
                .get("https://jsonplaceholder.typicode.com/users", {
                    params: {
                        _limit: 4,
                        _page: pageParam,
                    },
                })
                .then((res) => res.data),

        queryKey: [
            "users",
            query,
        ],
    });
