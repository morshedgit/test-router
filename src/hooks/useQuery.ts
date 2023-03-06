import { useSearchParams } from "react-router-dom";

const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.toString());

  const updateSearchParams = ([key, value]: [string, string]) => {
    setSearchParams((prev) => {
      const queries: Record<string, string> = {};
      prev.forEach((value, key) => (queries[key] = value));
      return { ...queries, [key]: value };
    });
  };

  const deleteSearchParams = (keyArg: string) => {
    setSearchParams((prev) => {
      const queries: Record<string, string> = {};
      prev.forEach((value, key) => {
        if (key !== keyArg) queries[key] = value;
      });
      return queries;
    });
  };

  return { searchParams, updateSearchParams, deleteSearchParams };
};

export default useQuery;
