import { privateAxios } from "@/services";
import { useMutation } from "@tanstack/react-query";

interface MutationProps {
  url: string;
  payload?: any;
  config?: any;
}

export const usePostQuery = (mutationKey: string[]) => {
  return useMutation({
    mutationKey,
    mutationFn: async (props: MutationProps) => {
      const { data } = await privateAxios.post(
        props.url,
        props.payload,
        props.config
      );
      return data;
    },
    retry: false,
  });
};

export const usePutQuery = (mutationKey: string[]) => {
  return useMutation({
    mutationKey,
    mutationFn: async (props: MutationProps) => {
      const { data } = await privateAxios.put(
        props.url,
        props.payload,
        props.config
      );
      return data;
    },
    retry: false,
  });
};

export const useDeleteQuery = (mutationKey: string[]) => {
  return useMutation({
    mutationKey,
    mutationFn: async (props: MutationProps) => {
      const { data } = await privateAxios.delete(props.url, {
        data: props.payload,
        ...props.config,
      });
      return data;
    },
    retry: false,
  });
};

export const usePatchQuery = (mutationKey: string[]) => {
  return useMutation({
    mutationKey,
    mutationFn: async (props: MutationProps) => {
      const { data } = await privateAxios.patch(
        props.url,
        props.payload,
        props.config
      );
      return data;
    },
    retry: false,
  });
};
