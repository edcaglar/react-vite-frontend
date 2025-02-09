import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Token } from '@/types/api';

export const getTokens = (): Promise<{ data: Token[] }> => {
  return api.get(`/tokens`);
};

export const getTokensQueryOptions = () => {
  return queryOptions({
    queryKey: ['tokens'],
    queryFn: getTokens,
  });
};

type UseTokensOptions = {
  queryConfig?: QueryConfig<typeof getTokensQueryOptions>;
};

export const useTokens = ({ queryConfig }: UseTokensOptions = {}) => {
  return useQuery({
    ...getTokensQueryOptions(),
    ...queryConfig,
  });
};
