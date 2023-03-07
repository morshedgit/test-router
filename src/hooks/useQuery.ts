import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
const convertSearchParamsToQueryObject = (params: URLSearchParams) => {
  const queries: Record<string, string[]> = {};
  params.forEach((value, key) => {
    if (queries[key]) {
      queries[key].push(value);
    } else {
      queries[key] = [value];
    }
  });
  return queries;
};
const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const addSearchParam = ([keyArg, valueArg]: [string, string]) => {
    setSearchParams((prev) => {
      const queries: Record<string, string[]> =
        convertSearchParamsToQueryObject(prev);
      if (queries[keyArg]) queries[keyArg].push(valueArg);
      else queries[keyArg] = [valueArg];
      return queries;
    });
  };
  const updateSearchParam = ([keyArg, valueArg]: [
    string,
    string | string[]
  ]) => {
    setSearchParams((prev) => {
      const queries: Record<string, string[]> =
        convertSearchParamsToQueryObject(prev);
      queries[keyArg] = Array.isArray(valueArg) ? valueArg : [valueArg];
      return queries;
    });
  };
  const deleteSearchParam = (keyArg: string) => {
    setSearchParams((prev) => {
      const queries: Record<string, string[]> =
        convertSearchParamsToQueryObject(prev);
      delete queries[keyArg];
      return queries;
    });
  };

  const queryPairs = useMemo(() => {
    const queries: Record<string, string[]> =
      convertSearchParamsToQueryObject(searchParams);
    return queries;
  }, [searchParams]);

  return {
    queryPairs,
    addSearchParam,
    updateSearchParam,
    deleteSearchParam,
    paramsString: searchParams.toString(),
  };
};

export default useQuery;
