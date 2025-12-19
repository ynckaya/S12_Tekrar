import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTaskApi, fetchTaskApi } from "../api/taskApi";


export const useTasks = () => {
    const { data, isLoading, isFetching, error, refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: fetchTaskApi,
        cacheTime: 10 * 60 * 1000
      });

    return {
        tasks : data || [],
        isLoading,
        error
    }
};

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createTaskApi,
        onSuccess: (newTask) => {
            queryClient.invalidateQueries({queryKey: ['tasks']});
        },
        onError: (error) => {
            console.log('Görev eklenirken hata:', error);
        }
    });

    return {
        mutate: mutation.mutate,
        mutateAsync: mutation.mutateAsync,
        isLoadingM: mutation.isPending,
        isError: mutation.isError,
        error: mutation.error,
        data: mutation.data
    }
};