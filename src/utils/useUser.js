import useSWR from "swr";

export default function useUser(index) {
  const { data, error, isLoading } = useSWR("/api/users/");

  return {
    user: data ? data[index] : null,
    isLoading,
    error,
  };
}
